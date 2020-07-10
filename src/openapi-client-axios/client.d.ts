import { AxiosInstance, AxiosRequestConfig } from 'axios';
import SwaggerParser from 'swagger-parser';
import { OpenAPIV3, Document, Operation, OperationMethodArguments, UnknownOperationMethods, RequestConfig, UnknownPathsDictionary, Server } from './types/client';
/**
 * OpenAPIClient is an AxiosInstance extended with operation methods
 */
export declare type OpenAPIClient<OperationMethods = UnknownOperationMethods, PathsDictionary = UnknownPathsDictionary> = AxiosInstance & OperationMethods & {
    api: OpenAPIClientAxios;
    paths: PathsDictionary;
};
/**
 * Main class and the default export of the 'openapi-client-axios' module
 *
 * @export
 * @class OpenAPIClientAxios
 */
export declare class OpenAPIClientAxios {
    document: Document;
    inputDocument: Document | string;
    definition: Document;
    strict: boolean;
    quick: boolean;
    validate: boolean;
    initalized: boolean;
    instance: any;
    axiosConfigDefaults: AxiosRequestConfig;
    swaggerParserOpts: SwaggerParser.Options;
    private defaultServer;
    private baseURLVariables;
    /**
     * Creates an instance of OpenAPIClientAxios.
     *
     * @param opts - constructor options
     * @param {Document | string} opts.definition - the OpenAPI definition, file path or Document object
     * @param {boolean} opts.strict - strict mode, throw errors or warn on OpenAPI spec validation errors (default: false)
     * @param {boolean} opts.quick - quick mode, skips validation and doesn't guarantee document is unchanged
     * @param {boolean} opts.validate - whether to validate the input document document (default: true)
     * @param {boolean} opts.axiosConfigDefaults - default axios config for the instance
     * @memberof OpenAPIClientAxios
     */
    constructor(opts: {
        definition: Document | string;
        strict?: boolean;
        quick?: boolean;
        validate?: boolean;
        axiosConfigDefaults?: AxiosRequestConfig;
        swaggerParserOpts?: SwaggerParser.Options;
        withServer?: number | string | Server;
        baseURLVariables?: {
            [key: string]: string | number;
        };
    });
    /**
     * Returns the instance of OpenAPIClient
     *
     * @readonly
     * @type {OpenAPIClient}
     * @memberof OpenAPIClientAxios
     */
    get client(): OpenAPIClient<UnknownOperationMethods, UnknownPathsDictionary>;
    /**
     * Returns the instance of OpenAPIClient
     *
     * @returns
     * @memberof OpenAPIClientAxios
     */
    getClient: <Client = OpenAPIClient<UnknownOperationMethods, UnknownPathsDictionary>>() => Promise<Client>;
    withServer(server: number | string | Server, variables?: {
        [key: string]: string | number;
    }): void;
    /**
     * Initalizes OpenAPIClientAxios and creates a member axios client instance
     *
     * The init() method should be called right after creating a new instance of OpenAPIClientAxios
     *
     * @returns AxiosInstance
     * @memberof OpenAPIClientAxios
     */
    init: <Client = OpenAPIClient<UnknownOperationMethods, UnknownPathsDictionary>>() => Promise<Client>;
    /**
     * Loads the input document asynchronously and sets this.document
     *
     * @memberof OpenAPIClientAxios
     */
    loadDocument(): Promise<OpenAPIV3.Document>;
    /**
     * Synchronous version of .init()
     *
     * Note: Only works when the input definition is a valid OpenAPI v3 object and doesn't contain remote $refs.
     *
     * @memberof OpenAPIClientAxios
     */
    initSync: <Client = OpenAPIClient<UnknownOperationMethods, UnknownPathsDictionary>>() => Client;
    /**
     * Creates a new axios instance, extends it and returns it
     *
     * @memberof OpenAPIClientAxios
     */
    createAxiosInstance: <Client = OpenAPIClient<UnknownOperationMethods, UnknownPathsDictionary>>() => Client;
    /**
     * Validates this.document, which is the parsed OpenAPI document. Throws an error if validation fails.
     *
     * @returns {Document} parsed document
     * @memberof OpenAPIClientAxios
     */
    validateDefinition: () => OpenAPIV3.Document;
    /**
     * Gets the API baseurl defined in the first OpenAPI specification servers property
     *
     * @returns string
     * @memberof OpenAPIClientAxios
     */
    getBaseURL: (operation?: Operation) => string | undefined;
    /**
     * Creates an axios config object for operation + arguments
     * @memberof OpenAPIClientAxios
     */
    getAxiosConfigForOperation: (operation: Operation | string, args: OperationMethodArguments) => AxiosRequestConfig;
    /**
     * Creates a generic request config object for operation + arguments.
     *
     * This function contains the logic that handles operation method parameters.
     *
     * @memberof OpenAPIClientAxios
     */
    getRequestConfigForOperation: (operation: Operation | string, args: OperationMethodArguments) => RequestConfig;
    /**
     * Flattens operations into a simple array of Operation objects easy to work with
     *
     * @returns {Operation[]}
     * @memberof OpenAPIBackend
     */
    getOperations: () => Operation[];
    /**
     * Gets a single operation based on operationId
     *
     * @param {string} operationId
     * @returns {Operation}
     * @memberof OpenAPIBackend
     */
    getOperation: (operationId: string) => Operation | undefined;
    /**
     * Creates an axios method for an operation
     * (...pathParams, data?, config?) => Promise<AxiosResponse>
     *
     * @param {Operation} operation
     * @memberof OpenAPIClientAxios
     */
    private createOperationMethod;
}
