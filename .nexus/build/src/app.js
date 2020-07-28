"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeyType = void 0;
const nexus_1 = require("nexus");
const dotenv = __importStar(require("dotenv"));
const openapi_client_axios_1 = __importDefault(require("../openapi-client-axios"));
const qs_1 = __importDefault(require("qs"));
dotenv.config();
nexus_1.settings.change({
    server: {
        port: parseInt(process.env.PORT),
        playground: { path: '/playground' },
    },
    schema: {
        nullable: {
            outputs: false,
            inputs: true,
        },
    },
});
var APIKeyType;
(function (APIKeyType) {
    APIKeyType[APIKeyType["League"] = 0] = "League";
    APIKeyType[APIKeyType["TFT"] = 1] = "TFT";
    APIKeyType[APIKeyType["VAL"] = 2] = "VAL";
    APIKeyType[APIKeyType["LOR"] = 3] = "LOR";
    APIKeyType[APIKeyType["DEV"] = 4] = "DEV";
    APIKeyType[APIKeyType["TOURNAMENT"] = 5] = "TOURNAMENT";
    APIKeyType[APIKeyType["ANY"] = 6] = "ANY";
})(APIKeyType = exports.APIKeyType || (exports.APIKeyType = {}));
function apiContext(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const RIOT_KEY = process.env.RIOT_KEY;
        apiKeyAlerts();
        const APIKeyLookup = {
            [APIKeyType.League]: process.env.RIOT_API_LEAGUE_KEY ||
                process.env.RIOT_API_DEVELOPMENT_KEY ||
                '',
            [APIKeyType.TFT]: process.env.RIOT_API_TFT_KEY ||
                process.env.RIOT_API_DEVELOPMENT_KEY ||
                '',
            [APIKeyType.LOR]: process.env.RIOT_API_LOR_KEY ||
                process.env.RIOT_API_DEVELOPMENT_KEY ||
                '',
            [APIKeyType.VAL]: process.env.RIOT_API_VAL_KEY ||
                process.env.RIOT_API_DEVELOPMENT_KEY ||
                '',
            [APIKeyType.DEV]: process.env.RIOT_API_DEVELOPMENT_KEY || '',
            [APIKeyType.TOURNAMENT]: process.env.RIOT_API_TOURNAMENT_KEY || '',
            [APIKeyType.ANY]: process.env.RIOT_API_LEAGUE_KEY ||
                process.env.RIOT_API_TFT_KEY ||
                process.env.RIOT_API_LOR_KEY ||
                process.env.RIOT_API_VAL_KEY ||
                process.env.RIOT_API_DEVELOPMENT_KEY ||
                '',
        };
        let latestRecord = require('../SchemaRecord.json')[0];
        console.log(latestRecord);
        const OpenAPI = new openapi_client_axios_1.default({
            definition: latestRecord,
            validate: false,
            axiosConfigDefaults: Object.assign({ headers: {
                    'X-Riot-Token': process.env.RIOT_KEY,
                }, 
                // @ts-ignore
                paramsSerializer: function (params) {
                    return qs_1.default.stringify(params, { arrayFormat: 'repeat' });
                } }, options),
        });
        yield OpenAPI.init();
        const client = yield OpenAPI.getClient();
        // add any adapter if not in testing environment
        // testing environment uses its own adapter.
        if (!process.env.TESTING && (options === null || options === void 0 ? void 0 : options.adapter)) {
            client.defaults.adapter = options.adapter;
        }
        let api = (keyType, region, endpoint, parameters, data, config) => {
            var _a;
            OpenAPI.withServer(0, { platform: region });
            let baseURL = OpenAPI.getBaseURL();
            let configWithRegion = Object.assign({ baseURL, headers: {
                    'X-Riot-Token': APIKeyLookup[keyType],
                } }, config);
            try {
                // @ts-ignore
                return client[endpoint](parameters, data, configWithRegion);
            }
            catch (err) {
                console.log(err);
                if (((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) == 404) {
                    return null;
                }
                throw err;
            }
        };
        return { api, client, OpenAPI };
    });
}
apiContext()
    .then((api) => {
    nexus_1.schema.addToContext(() => {
        return Object.assign({}, api);
    });
})
    .catch((err) => console.log(err));
process.on('unhandledRejection', (reason, promise) => {
    promise.then((...rets) => {
        console.log(rets);
    });
    console.log('Unhandled Rejection at:', reason.stack || reason);
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
});
function apiKeyAlerts() {
    if (!process.env.RIOT_API_DEVELOPMENT_KEY) {
        console.info('no development key');
    }
    if (!process.env.RIOT_API_DEVELOPMENT_KEY) {
        if (!process.env.RIOT_API_LEAGUE_KEY) {
            console.info('no RIOT_API_LEAGUE_KEY in .env; no RIOT_API_DEVLOPMENT_KEY either. Calls to these endpoints will throw errors.');
        }
        if (!process.env.RIOT_API_TFT_KEY) {
            console.info('no RIOT_API_TFT_KEY in .env; no RIOT_API_DEVLOPMENT_KEY either. Calls to these endpoints will throw errors.');
        }
        if (!process.env.RIOT_API_LOR_KEY) {
            console.info('no RIOT_API_LOR_KEY in .env; no RIOT_API_DEVLOPMENT_KEY either. Calls to these endpoints will throw errors.');
        }
        if (!process.env.RIOT_API_VAL_KEY) {
            console.info('no RIOT_API_VAL_KEY in .env; no RIOT_API_DEVLOPMENT_KEY either. Calls to these endpoints will throw errors.');
        }
        if (!process.env.RIOT_API_TOURNAMENT_KEY) {
            console.info('no RIOT_API_TOURNAMENT_KEY in .env; calls to tournament endpoint will throw errors');
        }
    }
    else {
        if (!process.env.RIOT_API_LEAGUE_KEY) {
            console.info('no RIOT_API_LEAGUE_KEY in .env falling back to RIOT_API_DEVELOPMENT_KEY');
        }
        if (!process.env.RIOT_API_TFT_KEY) {
            console.info('no RIOT_API_TFT_KEY in .env falling back to RIOT_API_DEVELOPMENT_KEY');
        }
        if (!process.env.RIOT_API_LOR_KEY) {
            console.info('no RIOT_API_LOR_KEY in .env falling back to RIOT_API_DEVELOPMENT_KEY');
        }
        if (!process.env.RIOT_API_VAL_KEY) {
            console.info('no RIOT_API_VAL_KEY in .env falling back to RIOT_API_DEVELOPMENT_KEY');
        }
        if (!process.env.RIOT_API_TOURNAMENT_KEY) {
            console.info('no RIOT_API_TOURNAMENT_KEY in .env; calls to tournament endpoint will throw errors');
        }
        if (!(process.env.RIOT_API_LEAGUE_KEY ||
            process.env.RIOT_API_TFT_KEY ||
            process.env.RIOT_API_LOR_KEY ||
            process.env.RIOT_API_VAL_KEY ||
            process.env.RIOT_API_DEVELOPMENT_KEY ||
            '')) {
            console.info(`no keys declared in .env calls will throw errors`);
        }
    }
}
