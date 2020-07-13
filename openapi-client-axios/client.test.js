"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var client_1 = require("./client");
var axios_mock_adapter_1 = __importDefault(require("axios-mock-adapter"));
var testsDir = path_1.default.join(__dirname, '..', '__tests__');
var examplePetAPIJSON = path_1.default.join(testsDir, 'resources', 'example-pet-api.openapi.json');
var examplePetAPIYAML = path_1.default.join(testsDir, 'resources', 'example-pet-api.openapi.yml');
var baseURL = 'http://localhost:8080';
var baseURLAlternative = 'http://localhost:9090/';
var baseURLWithVariable = 'http://{foo1}.localhost:9090/{foo2}/{foo3}/';
var baseURLWithVariableResolved = 'http://bar1.localhost:9090/bar2a/bar3b/';
var baseURLV2 = 'http://localhost:8080/v2';
var responses = {
    200: { description: 'ok' },
};
var petId = {
    name: 'petId',
    in: 'path',
    required: true,
    schema: {
        type: 'integer',
    },
};
var ownerId = {
    name: 'ownerId',
    in: 'path',
    required: true,
    schema: {
        type: 'integer',
    },
};
var definition = {
    openapi: '3.0.0',
    info: {
        title: 'api',
        version: '1.0.0',
    },
    servers: [
        { url: baseURL },
        {
            url: baseURLAlternative,
            description: 'Alternative server',
        },
        {
            url: baseURLWithVariable,
            description: 'server with variable baseURL',
            variables: {
                foo1: {
                    default: 'bar1',
                    enum: ['bar1', 'bar1a'],
                },
                foo2: {
                    default: 'bar2b',
                    enum: ['bar2a', 'bar2b'],
                },
                foo3: {
                    default: 'bar3a',
                    enum: ['bar3a', 'bar3b'],
                },
            },
        },
    ],
    paths: {
        '/pets': {
            get: {
                operationId: 'getPets',
                responses: {
                    200: {
                        $ref: '#/components/responses/PetsListRes',
                    },
                },
                parameters: [
                    {
                        name: 'q',
                        in: 'query',
                        schema: {
                            type: 'array',
                            items: {
                                type: 'string',
                            },
                        },
                    },
                ],
            },
            post: {
                operationId: 'createPet',
                responses: {
                    201: {
                        $ref: '#/components/responses/PetRes',
                    },
                },
            },
        },
        '/pets/{petId}': {
            get: {
                operationId: 'getPetById',
                responses: {
                    200: {
                        $ref: '#/components/responses/PetRes',
                    },
                },
            },
            put: {
                operationId: 'replacePetById',
                responses: {
                    200: {
                        $ref: '#/components/responses/PetRes',
                    },
                },
            },
            patch: {
                operationId: 'updatePetById',
                responses: {
                    200: {
                        $ref: '#/components/responses/PetRes',
                    },
                },
            },
            delete: {
                operationId: 'deletePetById',
                responses: {
                    200: {
                        $ref: '#/components/responses/PetRes',
                    },
                },
            },
            parameters: [petId],
        },
        '/pets/{petId}/owner': {
            get: {
                operationId: 'getOwnerByPetId',
                responses: responses,
            },
            parameters: [petId],
        },
        '/pets/{petId}/owner/{ownerId}': {
            get: {
                operationId: 'getPetOwner',
                responses: responses,
            },
            parameters: [petId, ownerId],
        },
        '/pets/meta': {
            get: {
                operationId: 'getPetsMeta',
                responses: responses,
            },
        },
        '/pets/relative': {
            servers: [{ url: baseURLV2 }],
            get: {
                operationId: 'getPetsRelative',
                responses: responses,
            },
        },
    },
    components: {
        schemas: {
            PetWithName: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        minimum: 1,
                    },
                    name: {
                        type: 'string',
                        example: 'Garfield',
                    },
                },
            },
        },
        responses: {
            PetRes: {
                description: 'ok',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/PetWithName',
                        },
                    },
                },
            },
            PetsListRes: {
                description: 'ok',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/PetWithName',
                            },
                        },
                    },
                },
            },
        },
    },
};
describe('OpenAPIClientAxios', function () {
    var checkHasOperationMethods = function (client) {
        expect(client).toHaveProperty('getPets');
        expect(client).toHaveProperty('createPet');
        expect(client).toHaveProperty('getPetById');
        expect(client).toHaveProperty('replacePetById');
        expect(client).toHaveProperty('updatePetById');
        expect(client).toHaveProperty('deletePetById');
        expect(client).toHaveProperty('getOwnerByPetId');
        expect(client).toHaveProperty('getPetOwner');
        expect(client).toHaveProperty('getPetsMeta');
        expect(client).toHaveProperty('getPetsRelative');
    };
    describe('init', function () {
        test('can be initalised with a valid OpenAPI document as JS Object', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.initalized).toEqual(true);
                        expect(api.client.api).toBe(api);
                        checkHasOperationMethods(api.client);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can be initalised using a valid YAML file', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: examplePetAPIYAML, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.initalized).toEqual(true);
                        expect(api.client.api).toBe(api);
                        checkHasOperationMethods(api.client);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can be initalised using a valid JSON file', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: examplePetAPIJSON, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.initalized).toEqual(true);
                        expect(api.client.api).toBe(api);
                        checkHasOperationMethods(api.client);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can be initalised using alternative server using index', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, withServer: 1 });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.getBaseURL()).toEqual(baseURLAlternative);
                        expect(api.client.api).toBe(api);
                        checkHasOperationMethods(api.client);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can be initalised using alternative server using description', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, withServer: 'Alternative server' });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.getBaseURL()).toEqual(baseURLAlternative);
                        expect(api.client.api).toBe(api);
                        checkHasOperationMethods(api.client);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can be initialised using alternative server with variable in baseURL', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, withServer: 2, baseURLVariables: { foo2: 'bar2a', foo3: 1 } });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.getBaseURL()).toEqual(baseURLWithVariableResolved);
                        expect(api.client.api).toBe(api);
                        checkHasOperationMethods(api.client);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can be initalised using alternative server using object', function () { return __awaiter(void 0, void 0, void 0, function () {
            var url, api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = 'http://examplde.com/v5';
                        api = new client_1.OpenAPIClientAxios({ definition: definition, withServer: { url: url } });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.getBaseURL()).toEqual(url);
                        expect(api.client.api).toBe(api);
                        checkHasOperationMethods(api.client);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can be initalised using default baseUrl resolver', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.getBaseURL()).toEqual(baseURL);
                        expect(api.client.api).toBe(api);
                        checkHasOperationMethods(api.client);
                        return [2 /*return*/];
                }
            });
        }); });
        test('throws an error when initalised with an invalid document in strict mode', function () { return __awaiter(void 0, void 0, void 0, function () {
            var invalid, api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        invalid = { invalid: 'not openapi' };
                        api = new client_1.OpenAPIClientAxios({ definition: invalid, strict: true });
                        return [4 /*yield*/, expect(api.init()).rejects.toThrowError()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        test('emits a warning when initalised with an invalid OpenAPI document not in strict mode', function () { return __awaiter(void 0, void 0, void 0, function () {
            var invalid, warn, api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        invalid = __assign(__assign({}, definition), { invalid: 'not openapi' });
                        warn = console.warn;
                        console.warn = jest.fn();
                        api = new client_1.OpenAPIClientAxios({ definition: invalid, strict: false });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(console.warn).toBeCalledTimes(1);
                        console.warn = warn; // reset console.warn
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('withServer', function () {
        test('can set default server as object', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, newServer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.getBaseURL()).toEqual(baseURL);
                        newServer = {
                            url: 'http://example.com/apiv4',
                            description: 'example api v4',
                        };
                        api.withServer(newServer);
                        expect(api.getBaseURL()).toEqual(newServer.url);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can set default server by using description', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, newServer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.getBaseURL()).toEqual(baseURL);
                        newServer = 'Alternative server';
                        api.withServer(newServer);
                        expect(api.getBaseURL()).toEqual(baseURLAlternative);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can set default server by index', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, newServer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.getBaseURL()).toEqual(baseURL);
                        newServer = 1;
                        api.withServer(newServer);
                        expect(api.getBaseURL()).toEqual(baseURLAlternative);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can set default server with variables', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, newServer, newServerVars;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        _a.sent();
                        expect(api.getBaseURL()).toEqual(baseURL);
                        newServer = 2;
                        newServerVars = { foo2: 'bar2a', foo3: 1 };
                        api.withServer(newServer, newServerVars);
                        expect(api.getBaseURL()).toEqual(baseURLWithVariableResolved);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('initSync', function () {
        test('can be initalised synchronously with a valid OpenAPI document as JS Object', function () {
            var api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
            api.initSync();
            expect(api.initalized).toEqual(true);
            expect(api.client.api).toBe(api);
            checkHasOperationMethods(api.client);
        });
        test('throws an error when initalised using a file URL', function () {
            var api = new client_1.OpenAPIClientAxios({ definition: examplePetAPIYAML, strict: true });
            expect(api.initSync).toThrowError();
        });
        test('throws an error when initalised with an invalid document in strict mode', function () {
            var invalid = { invalid: 'not openapi' };
            var api = new client_1.OpenAPIClientAxios({ definition: invalid, strict: true });
            expect(api.initSync).toThrowError();
        });
        test('emits a warning when initalised with an invalid OpenAPI document not in strict mode', function () {
            var invalid = __assign(__assign({}, definition), { invalid: 'not openapi' });
            var warn = console.warn;
            console.warn = jest.fn();
            var api = new client_1.OpenAPIClientAxios({ definition: invalid, strict: false });
            api.initSync();
            expect(console.warn).toBeCalledTimes(1);
            console.warn = warn; // reset console.warn
        });
    });
    describe('client', function () {
        test('has set default baseURL to the first server in config', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        expect(client.defaults.baseURL).toBe(baseURL);
                        return [2 /*return*/];
                }
            });
        }); });
        test('can override axios default config', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({
                            definition: definition,
                            strict: true,
                            axiosConfigDefaults: { maxRedirects: 1, withCredentials: true },
                        });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        expect(client.defaults.maxRedirects).toBe(1);
                        expect(client.defaults.withCredentials).toBe(true);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('operation methods', function () {
        test('getPets() calls GET /pets', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = [{ id: 1, name: 'Garfield' }];
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.getPets()];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test("getPets({ q: 'cats' }) calls GET /pets?q=cats", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, params, res, mockContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = [{ id: 1, name: 'Garfield' }];
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets').reply(function (config) { return mockHandler(config); });
                        params = { q: 'cats ' };
                        return [4 /*yield*/, client.getPets(params)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        mockContext = mockHandler.mock.calls[mockHandler.mock.calls.length - 1][0];
                        expect(mockContext.params).toEqual(params);
                        return [2 /*return*/];
                }
            });
        }); });
        test("getPets({ q: ['cats', 'dogs'] }) calls GET /pets?q=cats&q=dogs", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, params, res, mockContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = [{ id: 1, name: 'Garfield' }];
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets').reply(function (config) { return mockHandler(config); });
                        params = { q: ['cats', 'dogs'] };
                        return [4 /*yield*/, client.getPets(params)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        mockContext = mockHandler.mock.calls[mockHandler.mock.calls.length - 1][0];
                        expect(mockContext.params).toEqual(params);
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetById({ petId: 1 }) calls GET /pets/1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { id: 1, name: 'Garfield' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets/1').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.getPetById({ petId: 1 })];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetById(1) calls GET /pets/1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { id: 1, name: 'Garfield' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets/1').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.getPetById(1)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetById([{ name: "petId", value: "1", in: "path" }]) calls GET /pets/1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { id: 1, name: 'Garfield' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets/1').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.getPetById([{ name: 'petId', value: '1', in: 'path' }])];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        // tslint:disable-next-line
        test('getPetById([{ name: "petId", value: "1", in: "path" }, { name: "new", value: "2", in: "query" }]) calls GET /pets/1?new=2', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { id: 1, name: 'Garfield' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets/1').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.getPetById([{ name: 'petId', value: '1', in: 'path' }])];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test('createPet(pet) calls POST /pets with JSON payload', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, pet, mockResponse, mockHandler, res, mockContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        pet = { name: 'Garfield' };
                        mockResponse = __assign({ id: 1 }, pet);
                        mockHandler = jest.fn(function (config) { return [201, mockResponse]; });
                        mock.onPost('/pets').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.createPet(null, pet)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        mockContext = mockHandler.mock.calls[mockHandler.mock.calls.length - 1][0];
                        expect(mockContext.data).toEqual(JSON.stringify(pet));
                        return [2 /*return*/];
                }
            });
        }); });
        test('replacePetById(1, pet) calls PUT /pets/1 with JSON payload', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, pet, mockResponse, mockHandler, res, mockContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        pet = { id: 1, name: 'Garfield' };
                        mockResponse = pet;
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onPut('/pets/1').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.replacePetById(1, pet)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        mockContext = mockHandler.mock.calls[mockHandler.mock.calls.length - 1][0];
                        expect(mockContext.data).toEqual(JSON.stringify(pet));
                        return [2 /*return*/];
                }
            });
        }); });
        test('deletePetById(1) calls DELETE /pets/1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { id: 1, name: 'Garfield' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onDelete('/pets/1').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.deletePetById(1)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test('getOwnerByPetId(1) calls GET /pets/1/owner', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { name: 'Jon' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets/1/owner').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.getOwnerByPetId(1)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetOwner([1, 2]) calls GET /pets/1/owner/2', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { name: 'Jon' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets/1/owner/2').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.getPetOwner({ petId: 1, ownerId: 2 })];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetOwner({ petId: 1, ownerId: 2 }) calls GET /pets/1/owner/2', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { name: 'Jon' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets/1/owner/2').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.getPetOwner({ petId: 1, ownerId: 2 })];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetsMeta() calls GET /pets/meta', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { totalPets: 10 };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets/meta').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.getPetsMeta()];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetsRelative() calls GET /v2/pets/relative', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockHandler = jest.fn(function (config) { return [200, config.baseURL]; });
                        mock.onGet('/pets/relative').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.getPetsRelative()];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(baseURLV2);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('paths dictionary', function () {
        test("paths['/pets'].get() calls GET /pets", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = [{ id: 1, name: 'Garfield' }];
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.paths['/pets'].get()];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test("paths['/pets/{petId}'].get(1) calls GET /pets/1", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { id: 1, name: 'Garfield' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets/1').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.paths['/pets/{petId}'].get(1)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test("paths['/pets'].post() calls POST /pets", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, pet, mockResponse, mockHandler, res, mockContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        pet = { name: 'Garfield' };
                        mockResponse = __assign({ id: 1 }, pet);
                        mockHandler = jest.fn(function (config) { return [201, mockResponse]; });
                        mock.onPost('/pets').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.paths['/pets'].post(null, pet)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        mockContext = mockHandler.mock.calls[mockHandler.mock.calls.length - 1][0];
                        expect(mockContext.data).toEqual(JSON.stringify(pet));
                        return [2 /*return*/];
                }
            });
        }); });
        test("paths['/pets/{petId}'].put(1) calls PUT /pets/1", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, pet, mockResponse, mockHandler, res, mockContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        pet = { id: 1, name: 'Garfield' };
                        mockResponse = pet;
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onPut('/pets/1').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.paths['/pets/{petId}'].put(1, pet)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        mockContext = mockHandler.mock.calls[mockHandler.mock.calls.length - 1][0];
                        expect(mockContext.data).toEqual(JSON.stringify(pet));
                        return [2 /*return*/];
                }
            });
        }); });
        test("paths['/pets/{petId}'].delete(1) calls DELETE /pets/1", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { id: 1, name: 'Garfield' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onDelete('/pets/1').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.paths['/pets/{petId}'].delete(1)];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test("paths['/pets/{petId}/owner/{ownerId}'].get({ petId: 1, ownerId: 2 }) calls GET /pets/1/owner/2", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = { name: 'Jon' };
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets/1/owner/2').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.paths['/pets/{petId}/owner/{ownerId}'].get({ petId: 1, ownerId: 2 })];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('getRequestConfigForOperation()', function () {
        test('getPets() calls GET /pets', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        config = api.getRequestConfigForOperation('getPets', []);
                        expect(config.method).toEqual('get');
                        expect(config.path).toEqual('/pets');
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPets({ q: "cat" }) calls GET /pets?q=cat', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        config = api.getRequestConfigForOperation('getPets', [{ q: 'cat' }]);
                        expect(config.method).toEqual('get');
                        expect(config.path).toEqual('/pets');
                        expect(config.url).toMatch('/pets?q=cat');
                        expect(config.query).toEqual({ q: 'cat' });
                        expect(config.queryString).toEqual('q=cat');
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetById({ petId: 1 }) calls GET /pets/1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        config = api.getRequestConfigForOperation('getPetById', [{ petId: 1 }]);
                        expect(config.method).toEqual('get');
                        expect(config.path).toEqual('/pets/1');
                        expect(config.pathParams).toEqual({ petId: '1' });
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetById(1) calls GET /pets/1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        config = api.getRequestConfigForOperation('getPetById', [1]);
                        expect(config.method).toEqual('get');
                        expect(config.path).toEqual('/pets/1');
                        expect(config.pathParams).toEqual({ petId: '1' });
                        return [2 /*return*/];
                }
            });
        }); });
        test('createPet(null, pet) calls POST /pets with JSON payload', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, pet, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        pet = { name: 'Garfield' };
                        config = api.getRequestConfigForOperation('createPet', [null, pet]);
                        expect(config.method).toEqual('post');
                        expect(config.path).toEqual('/pets');
                        expect(config.payload).toEqual(pet);
                        return [2 /*return*/];
                }
            });
        }); });
        test('replacePetById(1, pet) calls PUT /pets/1 with JSON payload', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, pet, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        pet = { id: 1, name: 'Garfield' };
                        config = api.getRequestConfigForOperation('replacePetById', [1, pet]);
                        expect(config.method).toEqual('put');
                        expect(config.path).toEqual('/pets/1');
                        expect(config.pathParams).toEqual({ petId: '1' });
                        expect(config.payload).toEqual(pet);
                        return [2 /*return*/];
                }
            });
        }); });
        test('deletePetById(1) calls DELETE /pets/1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        config = api.getRequestConfigForOperation('deletePetById', [1]);
                        expect(config.method).toEqual('delete');
                        expect(config.path).toEqual('/pets/1');
                        expect(config.pathParams).toEqual({ petId: '1' });
                        return [2 /*return*/];
                }
            });
        }); });
        test('getOwnerByPetId(1) calls GET /pets/1/owner', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        config = api.getRequestConfigForOperation('getOwnerByPetId', [1]);
                        expect(config.method).toEqual('get');
                        expect(config.path).toEqual('/pets/1/owner');
                        expect(config.pathParams).toEqual({ petId: '1' });
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetOwner({ petId: 1, ownerId: 2 }) calls GET /pets/1/owner/2', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        config = api.getRequestConfigForOperation('getPetOwner', [{ petId: 1, ownerId: 2 }]);
                        expect(config.method).toEqual('get');
                        expect(config.path).toEqual('/pets/1/owner/2');
                        expect(config.pathParams).toEqual({ petId: '1', ownerId: '2' });
                        return [2 /*return*/];
                }
            });
        }); });
        test('getPetsMeta() calls GET /pets/meta', function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        config = api.getRequestConfigForOperation('getPetsMeta', []);
                        expect(config.method).toEqual('get');
                        expect(config.path).toEqual('/pets/meta');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('axios methods', function () {
        test("get('/pets') calls GET /pets", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = [{ id: 1, name: 'Garfield' }];
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client.get('/pets')];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        test("({ method: 'get', url: '/pets' }) calls GET /pets", function () { return __awaiter(void 0, void 0, void 0, function () {
            var api, client, mock, mockResponse, mockHandler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = new client_1.OpenAPIClientAxios({ definition: definition, strict: true });
                        return [4 /*yield*/, api.init()];
                    case 1:
                        client = _a.sent();
                        mock = new axios_mock_adapter_1.default(api.client);
                        mockResponse = [{ id: 1, name: 'Garfield' }];
                        mockHandler = jest.fn(function (config) { return [200, mockResponse]; });
                        mock.onGet('/pets').reply(function (config) { return mockHandler(config); });
                        return [4 /*yield*/, client({ method: 'get', url: '/pets' })];
                    case 2:
                        res = _a.sent();
                        expect(res.data).toEqual(mockResponse);
                        expect(mockHandler).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=client.test.js.map