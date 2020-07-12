import { schema, settings } from "nexus";
import { Client, OperationMethods } from "./generated/riot-types";
import * as dotenv from "dotenv";
import { Region } from "./types/Regions";

import OpenAPIClientAxios, {
  Operation,
  AxiosRequestConfig,
} from "openapi-client-axios";
import qs from "qs";

settings.change({
  schema: {
    nullable: {
      outputs: false,
      inputs: true,
    },
  },
});

apiContext().then((api) => {
  schema.addToContext(() => {
    return {
      api,
    };
  });
});

type OpMethodKeys = keyof OperationMethods;

export type ApiClient = <T extends OpMethodKeys>(
  region: Region,
  endpoint: T,
  parameters?: Parameters<OperationMethods[T]>[0],
  data?: Parameters<OperationMethods[T]>[1],
  config?: Parameters<OperationMethods[T]>[2]
) => ReturnType<OperationMethods[T]> | Promise<null> | null;

async function apiContext(options?: AxiosRequestConfig) {
  dotenv.config();

  const RIOT_KEY = process.env.RIOT_KEY;
  if (!process.env.RIOT_KEY || !process.env.RIOT_OPENAPI_SCHEMA) {
    throw new Error("no RIOT_KEY or no RIOT_OPENAPI_SCHEMA in .env");
  }

  const OpenAPI = new OpenAPIClientAxios({
    definition: "./riot-openapi-schema.json",
    validate: false,
    // @ts-ignore || axios dependency for openapi-client-axios is behind so types aren't exactly the same
    axiosConfigDefaults: {
      headers: {
        "X-Riot-Token": process.env.RIOT_KEY,
      },
      // @ts-ignore
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
      ...options,
    },
  });

  await OpenAPI.init<Client>();
  const client = await OpenAPI.getClient<Client>();

  let api = <T extends keyof OperationMethods>(
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
      if (err.response?.status == 404) {
        return null;
      }
      throw err;
    }
  };
  return api as ApiClient;
}
