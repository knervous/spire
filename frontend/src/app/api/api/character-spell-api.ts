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
import { ModelsCharacterSpell } from '../models';
/**
 * CharacterSpellApi - axios parameter creator
 * @export
 */
export const CharacterSpellApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates CharacterSpell
         * @param {ModelsCharacterSpell} characterSpell CharacterSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCharacterSpell: async (characterSpell: ModelsCharacterSpell, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'characterSpell' is not null or undefined
            if (characterSpell === null || characterSpell === undefined) {
                throw new RequiredError('characterSpell','Required parameter characterSpell was null or undefined when calling createCharacterSpell.');
            }
            const localVarPath = `/character_spell`;
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
            const nonString = typeof characterSpell !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(characterSpell !== undefined ? characterSpell : {})
                : (characterSpell || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes CharacterSpell
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCharacterSpell: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteCharacterSpell.');
            }
            const localVarPath = `/character_spell/{id}`
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
         * @summary Gets CharacterSpell
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterSpell: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getCharacterSpell.');
            }
            const localVarPath = `/character_spell/{id}`
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
         * @summary Lists CharacterSpells
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
        listCharacterSpells: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/character_spells`;
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
         * @summary Updates CharacterSpell
         * @param {number} id Id
         * @param {ModelsCharacterSpell} characterSpell CharacterSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCharacterSpell: async (id: number, characterSpell: ModelsCharacterSpell, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateCharacterSpell.');
            }
            // verify required parameter 'characterSpell' is not null or undefined
            if (characterSpell === null || characterSpell === undefined) {
                throw new RequiredError('characterSpell','Required parameter characterSpell was null or undefined when calling updateCharacterSpell.');
            }
            const localVarPath = `/character_spell/{id}`
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
            const nonString = typeof characterSpell !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(characterSpell !== undefined ? characterSpell : {})
                : (characterSpell || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CharacterSpellApi - functional programming interface
 * @export
 */
export const CharacterSpellApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates CharacterSpell
         * @param {ModelsCharacterSpell} characterSpell CharacterSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCharacterSpell(characterSpell: ModelsCharacterSpell, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterSpell>>> {
            const localVarAxiosArgs = await CharacterSpellApiAxiosParamCreator(configuration).createCharacterSpell(characterSpell, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes CharacterSpell
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCharacterSpell(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await CharacterSpellApiAxiosParamCreator(configuration).deleteCharacterSpell(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets CharacterSpell
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharacterSpell(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterSpell>>> {
            const localVarAxiosArgs = await CharacterSpellApiAxiosParamCreator(configuration).getCharacterSpell(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists CharacterSpells
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
        async listCharacterSpells(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterSpell>>> {
            const localVarAxiosArgs = await CharacterSpellApiAxiosParamCreator(configuration).listCharacterSpells(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates CharacterSpell
         * @param {number} id Id
         * @param {ModelsCharacterSpell} characterSpell CharacterSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCharacterSpell(id: number, characterSpell: ModelsCharacterSpell, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterSpell>>> {
            const localVarAxiosArgs = await CharacterSpellApiAxiosParamCreator(configuration).updateCharacterSpell(id, characterSpell, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CharacterSpellApi - factory interface
 * @export
 */
export const CharacterSpellApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates CharacterSpell
         * @param {ModelsCharacterSpell} characterSpell CharacterSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCharacterSpell(characterSpell: ModelsCharacterSpell, options?: any): AxiosPromise<Array<ModelsCharacterSpell>> {
            return CharacterSpellApiFp(configuration).createCharacterSpell(characterSpell, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes CharacterSpell
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCharacterSpell(id: number, options?: any): AxiosPromise<string> {
            return CharacterSpellApiFp(configuration).deleteCharacterSpell(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets CharacterSpell
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterSpell(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsCharacterSpell>> {
            return CharacterSpellApiFp(configuration).getCharacterSpell(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists CharacterSpells
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
        listCharacterSpells(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsCharacterSpell>> {
            return CharacterSpellApiFp(configuration).listCharacterSpells(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates CharacterSpell
         * @param {number} id Id
         * @param {ModelsCharacterSpell} characterSpell CharacterSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCharacterSpell(id: number, characterSpell: ModelsCharacterSpell, options?: any): AxiosPromise<Array<ModelsCharacterSpell>> {
            return CharacterSpellApiFp(configuration).updateCharacterSpell(id, characterSpell, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCharacterSpell operation in CharacterSpellApi.
 * @export
 * @interface CharacterSpellApiCreateCharacterSpellRequest
 */
export interface CharacterSpellApiCreateCharacterSpellRequest {
    /**
     * CharacterSpell
     * @type {ModelsCharacterSpell}
     * @memberof CharacterSpellApiCreateCharacterSpell
     */
    readonly characterSpell: ModelsCharacterSpell
}

/**
 * Request parameters for deleteCharacterSpell operation in CharacterSpellApi.
 * @export
 * @interface CharacterSpellApiDeleteCharacterSpellRequest
 */
export interface CharacterSpellApiDeleteCharacterSpellRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharacterSpellApiDeleteCharacterSpell
     */
    readonly id: number
}

/**
 * Request parameters for getCharacterSpell operation in CharacterSpellApi.
 * @export
 * @interface CharacterSpellApiGetCharacterSpellRequest
 */
export interface CharacterSpellApiGetCharacterSpellRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharacterSpellApiGetCharacterSpell
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof CharacterSpellApiGetCharacterSpell
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof CharacterSpellApiGetCharacterSpell
     */
    readonly select?: string
}

/**
 * Request parameters for listCharacterSpells operation in CharacterSpellApi.
 * @export
 * @interface CharacterSpellApiListCharacterSpellsRequest
 */
export interface CharacterSpellApiListCharacterSpellsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof CharacterSpellApiListCharacterSpells
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof CharacterSpellApiListCharacterSpells
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof CharacterSpellApiListCharacterSpells
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof CharacterSpellApiListCharacterSpells
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof CharacterSpellApiListCharacterSpells
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof CharacterSpellApiListCharacterSpells
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof CharacterSpellApiListCharacterSpells
     */
    readonly select?: string
}

/**
 * Request parameters for updateCharacterSpell operation in CharacterSpellApi.
 * @export
 * @interface CharacterSpellApiUpdateCharacterSpellRequest
 */
export interface CharacterSpellApiUpdateCharacterSpellRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharacterSpellApiUpdateCharacterSpell
     */
    readonly id: number

    /**
     * CharacterSpell
     * @type {ModelsCharacterSpell}
     * @memberof CharacterSpellApiUpdateCharacterSpell
     */
    readonly characterSpell: ModelsCharacterSpell
}

/**
 * CharacterSpellApi - object-oriented interface
 * @export
 * @class CharacterSpellApi
 * @extends {BaseAPI}
 */
export class CharacterSpellApi extends BaseAPI {
    /**
     * 
     * @summary Creates CharacterSpell
     * @param {CharacterSpellApiCreateCharacterSpellRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterSpellApi
     */
    public createCharacterSpell(requestParameters: CharacterSpellApiCreateCharacterSpellRequest, options?: any) {
        return CharacterSpellApiFp(this.configuration).createCharacterSpell(requestParameters.characterSpell, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes CharacterSpell
     * @param {CharacterSpellApiDeleteCharacterSpellRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterSpellApi
     */
    public deleteCharacterSpell(requestParameters: CharacterSpellApiDeleteCharacterSpellRequest, options?: any) {
        return CharacterSpellApiFp(this.configuration).deleteCharacterSpell(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets CharacterSpell
     * @param {CharacterSpellApiGetCharacterSpellRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterSpellApi
     */
    public getCharacterSpell(requestParameters: CharacterSpellApiGetCharacterSpellRequest, options?: any) {
        return CharacterSpellApiFp(this.configuration).getCharacterSpell(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists CharacterSpells
     * @param {CharacterSpellApiListCharacterSpellsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterSpellApi
     */
    public listCharacterSpells(requestParameters: CharacterSpellApiListCharacterSpellsRequest = {}, options?: any) {
        return CharacterSpellApiFp(this.configuration).listCharacterSpells(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates CharacterSpell
     * @param {CharacterSpellApiUpdateCharacterSpellRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterSpellApi
     */
    public updateCharacterSpell(requestParameters: CharacterSpellApiUpdateCharacterSpellRequest, options?: any) {
        return CharacterSpellApiFp(this.configuration).updateCharacterSpell(requestParameters.id, requestParameters.characterSpell, options).then((request) => request(this.axios, this.basePath));
    }
}
