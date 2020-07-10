import { GraphQLServer } from "graphql-yoga";
import OpenAPIClientAxios, { AxiosRequestConfig } from "openapi-client-axios";
import { setupCache } from "axios-cache-adapter";
import qs from "qs";

import resolvers from "./resolvers/";
import typeDefs from "./schema";

import * as dotenv from "dotenv";
import { ContextParameters } from "graphql-yoga/dist/types";
import { Region } from "./types/Regions";
import { Client, OperationMethods } from "./generated/riot-types";

type OpMethodKeys = keyof OperationMethods;
type Api = <T extends OpMethodKeys>(
  region: Region,
  endpoint: T,
  parameters?: Parameters<OperationMethods[T]>[0],
  data?: Parameters<OperationMethods[T]>[1],
  config?: Parameters<OperationMethods[T]>[2]
) => ReturnType<OperationMethods[T]> | Promise<null> | null;

export type Context = {
  api: Api;
} & ContextParameters;

async function main(options?: AxiosRequestConfig) {
  dotenv.config();

  const RIOT_KEY = process.env.RIOT_KEY;
  if (!process.env.RIOT_KEY || !process.env.RIOT_OPENAPI_SCHEMA) {
    throw new Error("no RIOT_KEY or no RIOT_OPENAPI_SCHEMA in .env");
  }

  const OpenAPI = new OpenAPIClientAxios({
    definition: process.env.RIOT_OPENAPI_SCHEMA,
    validate: false,
    axiosConfigDefaults: {
      headers: {
        "X-Riot-Token": process.env.RIOT_KEY,
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
      ...options,
    },
  });

  await OpenAPI.init<Client>();
  const client = await OpenAPI.getClient<Client>();

  if (process.env.NODE_ENV === "testing") {
    client.interceptors.request.use((config) => {
      console.log(config);
      config.baseURL = "http://localhost:4010";
      return config;
    });
  }

  const api: Api = <T extends keyof OperationMethods>(
    region: Region,
    endpoint: T,
    parameters?: Parameters<OperationMethods[T]>[0],
    data?: Parameters<OperationMethods[T]>[1],
    config?: Parameters<OperationMethods[T]>[2]
  ) => {
    OpenAPI.withServer(0, { platform: region });
    let baseURL = OpenAPI.getBaseURL();

    let configWithRegion = {
      baseURL,
      ...config,
    };

    try {
      // @ts-ignore
      return client[endpoint](parameters, data, configWithRegion) as ReturnType<
        OperationMethods[T]
      >;
    } catch (err) {
      console.log(err);
      if (err.response?.status == 404) {
        return null;
      }
      throw err;
    }
  };

  return new GraphQLServer({
    typeDefs,
    // @ts-ignore
    resolvers,
    context: (request): Context => ({
      ...request,
      api,
    }),
  });
}

if (require.main === module) {
  // TODO: set up exclude paths. ie. don't cache
  //       for tournament, clash, active game,
  //       short cache time for matchlist (like one minute or something)
  let cache = setupCache({
    maxAge: 15 * 60 * 1000,
    // @ts-ignore || conservative caching
    limit: 100,
    exclude: {
      query: false,
    },
  });
  main({
    // @ts-ignore
    adapter: cache.adapter,
  }).then((server) => {
    server.start({ port: process.env.PORT || 4000 }, ({ port }) => {
      console.log(`Starting on port: ${port}`);
    });
  });
}
