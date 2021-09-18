/* tslint:disable */
/* eslint-disable */
/**
 * Spire
 * Spire API documentation
 *
 * The version of the OpenAPI document: 3.0
 * Contact: akkadius1@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ModelsGraveyard } from '../models';
/**
 * GraveyardApi - axios parameter creator
 * @export
 */
export const GraveyardApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates Graveyard
         * @param {ModelsGraveyard} graveyard Graveyard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGraveyard: async (graveyard: ModelsGraveyard, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'graveyard' is not null or undefined
            if (graveyard === null || graveyard === undefined) {
                throw new RequiredError('graveyard','Required parameter graveyard was null or undefined when calling createGraveyard.');
            }
            const localVarPath = `/graveyard`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof graveyard !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(graveyard !== undefined ? graveyard : {})
                : (graveyard || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes Graveyard
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGraveyard: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteGraveyard.');
            }
            const localVarPath = `/graveyard/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets Graveyard
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGraveyard: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getGraveyard.');
            }
            const localVarPath = `/graveyard/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Lists Graveyards
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listGraveyards: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/graveyards`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (where !== undefined) {
                localVarQueryParameter['where'] = where;
            }

            if (whereOr !== undefined) {
                localVarQueryParameter['whereOr'] = whereOr;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderDirection !== undefined) {
                localVarQueryParameter['orderDirection'] = orderDirection;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates Graveyard
         * @param {number} id Id
         * @param {ModelsGraveyard} graveyard Graveyard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGraveyard: async (id: number, graveyard: ModelsGraveyard, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateGraveyard.');
            }
            // verify required parameter 'graveyard' is not null or undefined
            if (graveyard === null || graveyard === undefined) {
                throw new RequiredError('graveyard','Required parameter graveyard was null or undefined when calling updateGraveyard.');
            }
            const localVarPath = `/graveyard/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof graveyard !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(graveyard !== undefined ? graveyard : {})
                : (graveyard || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GraveyardApi - functional programming interface
 * @export
 */
export const GraveyardApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates Graveyard
         * @param {ModelsGraveyard} graveyard Graveyard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGraveyard(graveyard: ModelsGraveyard, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGraveyard>>> {
            const localVarAxiosArgs = await GraveyardApiAxiosParamCreator(configuration).createGraveyard(graveyard, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes Graveyard
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGraveyard(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await GraveyardApiAxiosParamCreator(configuration).deleteGraveyard(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets Graveyard
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGraveyard(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGraveyard>>> {
            const localVarAxiosArgs = await GraveyardApiAxiosParamCreator(configuration).getGraveyard(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists Graveyards
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listGraveyards(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGraveyard>>> {
            const localVarAxiosArgs = await GraveyardApiAxiosParamCreator(configuration).listGraveyards(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates Graveyard
         * @param {number} id Id
         * @param {ModelsGraveyard} graveyard Graveyard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGraveyard(id: number, graveyard: ModelsGraveyard, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGraveyard>>> {
            const localVarAxiosArgs = await GraveyardApiAxiosParamCreator(configuration).updateGraveyard(id, graveyard, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * GraveyardApi - factory interface
 * @export
 */
export const GraveyardApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates Graveyard
         * @param {ModelsGraveyard} graveyard Graveyard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGraveyard(graveyard: ModelsGraveyard, options?: any): AxiosPromise<Array<ModelsGraveyard>> {
            return GraveyardApiFp(configuration).createGraveyard(graveyard, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes Graveyard
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGraveyard(id: number, options?: any): AxiosPromise<string> {
            return GraveyardApiFp(configuration).deleteGraveyard(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets Graveyard
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGraveyard(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsGraveyard>> {
            return GraveyardApiFp(configuration).getGraveyard(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists Graveyards
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listGraveyards(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsGraveyard>> {
            return GraveyardApiFp(configuration).listGraveyards(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates Graveyard
         * @param {number} id Id
         * @param {ModelsGraveyard} graveyard Graveyard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGraveyard(id: number, graveyard: ModelsGraveyard, options?: any): AxiosPromise<Array<ModelsGraveyard>> {
            return GraveyardApiFp(configuration).updateGraveyard(id, graveyard, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createGraveyard operation in GraveyardApi.
 * @export
 * @interface GraveyardApiCreateGraveyardRequest
 */
export interface GraveyardApiCreateGraveyardRequest {
    /**
     * Graveyard
     * @type {ModelsGraveyard}
     * @memberof GraveyardApiCreateGraveyard
     */
    readonly graveyard: ModelsGraveyard
}

/**
 * Request parameters for deleteGraveyard operation in GraveyardApi.
 * @export
 * @interface GraveyardApiDeleteGraveyardRequest
 */
export interface GraveyardApiDeleteGraveyardRequest {
    /**
     * Id
     * @type {number}
     * @memberof GraveyardApiDeleteGraveyard
     */
    readonly id: number
}

/**
 * Request parameters for getGraveyard operation in GraveyardApi.
 * @export
 * @interface GraveyardApiGetGraveyardRequest
 */
export interface GraveyardApiGetGraveyardRequest {
    /**
     * Id
     * @type {number}
     * @memberof GraveyardApiGetGraveyard
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof GraveyardApiGetGraveyard
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof GraveyardApiGetGraveyard
     */
    readonly select?: string
}

/**
 * Request parameters for listGraveyards operation in GraveyardApi.
 * @export
 * @interface GraveyardApiListGraveyardsRequest
 */
export interface GraveyardApiListGraveyardsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof GraveyardApiListGraveyards
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof GraveyardApiListGraveyards
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof GraveyardApiListGraveyards
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof GraveyardApiListGraveyards
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof GraveyardApiListGraveyards
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof GraveyardApiListGraveyards
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof GraveyardApiListGraveyards
     */
    readonly select?: string
}

/**
 * Request parameters for updateGraveyard operation in GraveyardApi.
 * @export
 * @interface GraveyardApiUpdateGraveyardRequest
 */
export interface GraveyardApiUpdateGraveyardRequest {
    /**
     * Id
     * @type {number}
     * @memberof GraveyardApiUpdateGraveyard
     */
    readonly id: number

    /**
     * Graveyard
     * @type {ModelsGraveyard}
     * @memberof GraveyardApiUpdateGraveyard
     */
    readonly graveyard: ModelsGraveyard
}

/**
 * GraveyardApi - object-oriented interface
 * @export
 * @class GraveyardApi
 * @extends {BaseAPI}
 */
export class GraveyardApi extends BaseAPI {
    /**
     * 
     * @summary Creates Graveyard
     * @param {GraveyardApiCreateGraveyardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GraveyardApi
     */
    public createGraveyard(requestParameters: GraveyardApiCreateGraveyardRequest, options?: any) {
        return GraveyardApiFp(this.configuration).createGraveyard(requestParameters.graveyard, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes Graveyard
     * @param {GraveyardApiDeleteGraveyardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GraveyardApi
     */
    public deleteGraveyard(requestParameters: GraveyardApiDeleteGraveyardRequest, options?: any) {
        return GraveyardApiFp(this.configuration).deleteGraveyard(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets Graveyard
     * @param {GraveyardApiGetGraveyardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GraveyardApi
     */
    public getGraveyard(requestParameters: GraveyardApiGetGraveyardRequest, options?: any) {
        return GraveyardApiFp(this.configuration).getGraveyard(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists Graveyards
     * @param {GraveyardApiListGraveyardsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GraveyardApi
     */
    public listGraveyards(requestParameters: GraveyardApiListGraveyardsRequest = {}, options?: any) {
        return GraveyardApiFp(this.configuration).listGraveyards(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates Graveyard
     * @param {GraveyardApiUpdateGraveyardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GraveyardApi
     */
    public updateGraveyard(requestParameters: GraveyardApiUpdateGraveyardRequest, options?: any) {
        return GraveyardApiFp(this.configuration).updateGraveyard(requestParameters.id, requestParameters.graveyard, options).then((request) => request(this.axios, this.basePath));
    }
}
