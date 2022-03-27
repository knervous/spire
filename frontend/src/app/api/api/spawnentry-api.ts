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
import { CrudcontrollersBulkFetchByIdsGetRequest } from '../models';
// @ts-ignore
import { ModelsSpawnentry } from '../models';
/**
 * SpawnentryApi - axios parameter creator
 * @export
 */
export const SpawnentryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates Spawnentry
         * @param {ModelsSpawnentry} spawnentry Spawnentry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSpawnentry: async (spawnentry: ModelsSpawnentry, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'spawnentry' is not null or undefined
            if (spawnentry === null || spawnentry === undefined) {
                throw new RequiredError('spawnentry','Required parameter spawnentry was null or undefined when calling createSpawnentry.');
            }
            const localVarPath = `/spawnentry`;
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
            const nonString = typeof spawnentry !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(spawnentry !== undefined ? spawnentry : {})
                : (spawnentry || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes Spawnentry
         * @param {number} id spawngroupID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpawnentry: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSpawnentry.');
            }
            const localVarPath = `/spawnentry/{id}`
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
         * @summary Gets Spawnentries in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpawnentriesBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getSpawnentriesBulk.');
            }
            const localVarPath = `/spawnentries/bulk`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
            const nonString = typeof body !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(body !== undefined ? body : {})
                : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets Spawnentry
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcType&lt;br&gt;NpcType.AlternateCurrency&lt;br&gt;NpcType.Merchantlists&lt;br&gt;NpcType.NpcFactions&lt;br&gt;NpcType.NpcFactions.NpcFactionEntries&lt;br&gt;NpcType.NpcSpells&lt;br&gt;NpcType.NpcSpells.NpcSpellsEntries&lt;br&gt;Spawngroup&lt;br&gt;Spawngroup.Spawn2
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpawnentry: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getSpawnentry.');
            }
            const localVarPath = `/spawnentry/{id}`
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
         * @summary Lists Spawnentries
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcType&lt;br&gt;NpcType.AlternateCurrency&lt;br&gt;NpcType.Merchantlists&lt;br&gt;NpcType.NpcFactions&lt;br&gt;NpcType.NpcFactions.NpcFactionEntries&lt;br&gt;NpcType.NpcSpells&lt;br&gt;NpcType.NpcSpells.NpcSpellsEntries&lt;br&gt;Spawngroup&lt;br&gt;Spawngroup.Spawn2
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSpawnentries: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/spawnentries`;
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

            if (groupBy !== undefined) {
                localVarQueryParameter['groupBy'] = groupBy;
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
         * @summary Updates Spawnentry
         * @param {number} id Id
         * @param {ModelsSpawnentry} spawnentry Spawnentry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSpawnentry: async (id: number, spawnentry: ModelsSpawnentry, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateSpawnentry.');
            }
            // verify required parameter 'spawnentry' is not null or undefined
            if (spawnentry === null || spawnentry === undefined) {
                throw new RequiredError('spawnentry','Required parameter spawnentry was null or undefined when calling updateSpawnentry.');
            }
            const localVarPath = `/spawnentry/{id}`
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
            const nonString = typeof spawnentry !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(spawnentry !== undefined ? spawnentry : {})
                : (spawnentry || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SpawnentryApi - functional programming interface
 * @export
 */
export const SpawnentryApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates Spawnentry
         * @param {ModelsSpawnentry} spawnentry Spawnentry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSpawnentry(spawnentry: ModelsSpawnentry, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpawnentry>>> {
            const localVarAxiosArgs = await SpawnentryApiAxiosParamCreator(configuration).createSpawnentry(spawnentry, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes Spawnentry
         * @param {number} id spawngroupID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSpawnentry(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await SpawnentryApiAxiosParamCreator(configuration).deleteSpawnentry(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets Spawnentries in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpawnentriesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpawnentry>>> {
            const localVarAxiosArgs = await SpawnentryApiAxiosParamCreator(configuration).getSpawnentriesBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets Spawnentry
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcType&lt;br&gt;NpcType.AlternateCurrency&lt;br&gt;NpcType.Merchantlists&lt;br&gt;NpcType.NpcFactions&lt;br&gt;NpcType.NpcFactions.NpcFactionEntries&lt;br&gt;NpcType.NpcSpells&lt;br&gt;NpcType.NpcSpells.NpcSpellsEntries&lt;br&gt;Spawngroup&lt;br&gt;Spawngroup.Spawn2
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpawnentry(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpawnentry>>> {
            const localVarAxiosArgs = await SpawnentryApiAxiosParamCreator(configuration).getSpawnentry(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists Spawnentries
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcType&lt;br&gt;NpcType.AlternateCurrency&lt;br&gt;NpcType.Merchantlists&lt;br&gt;NpcType.NpcFactions&lt;br&gt;NpcType.NpcFactions.NpcFactionEntries&lt;br&gt;NpcType.NpcSpells&lt;br&gt;NpcType.NpcSpells.NpcSpellsEntries&lt;br&gt;Spawngroup&lt;br&gt;Spawngroup.Spawn2
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSpawnentries(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpawnentry>>> {
            const localVarAxiosArgs = await SpawnentryApiAxiosParamCreator(configuration).listSpawnentries(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates Spawnentry
         * @param {number} id Id
         * @param {ModelsSpawnentry} spawnentry Spawnentry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSpawnentry(id: number, spawnentry: ModelsSpawnentry, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpawnentry>>> {
            const localVarAxiosArgs = await SpawnentryApiAxiosParamCreator(configuration).updateSpawnentry(id, spawnentry, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SpawnentryApi - factory interface
 * @export
 */
export const SpawnentryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates Spawnentry
         * @param {ModelsSpawnentry} spawnentry Spawnentry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSpawnentry(spawnentry: ModelsSpawnentry, options?: any): AxiosPromise<Array<ModelsSpawnentry>> {
            return SpawnentryApiFp(configuration).createSpawnentry(spawnentry, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes Spawnentry
         * @param {number} id spawngroupID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpawnentry(id: number, options?: any): AxiosPromise<string> {
            return SpawnentryApiFp(configuration).deleteSpawnentry(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets Spawnentries in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpawnentriesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsSpawnentry>> {
            return SpawnentryApiFp(configuration).getSpawnentriesBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets Spawnentry
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcType&lt;br&gt;NpcType.AlternateCurrency&lt;br&gt;NpcType.Merchantlists&lt;br&gt;NpcType.NpcFactions&lt;br&gt;NpcType.NpcFactions.NpcFactionEntries&lt;br&gt;NpcType.NpcSpells&lt;br&gt;NpcType.NpcSpells.NpcSpellsEntries&lt;br&gt;Spawngroup&lt;br&gt;Spawngroup.Spawn2
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpawnentry(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsSpawnentry>> {
            return SpawnentryApiFp(configuration).getSpawnentry(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists Spawnentries
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcType&lt;br&gt;NpcType.AlternateCurrency&lt;br&gt;NpcType.Merchantlists&lt;br&gt;NpcType.NpcFactions&lt;br&gt;NpcType.NpcFactions.NpcFactionEntries&lt;br&gt;NpcType.NpcSpells&lt;br&gt;NpcType.NpcSpells.NpcSpellsEntries&lt;br&gt;Spawngroup&lt;br&gt;Spawngroup.Spawn2
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSpawnentries(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsSpawnentry>> {
            return SpawnentryApiFp(configuration).listSpawnentries(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates Spawnentry
         * @param {number} id Id
         * @param {ModelsSpawnentry} spawnentry Spawnentry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSpawnentry(id: number, spawnentry: ModelsSpawnentry, options?: any): AxiosPromise<Array<ModelsSpawnentry>> {
            return SpawnentryApiFp(configuration).updateSpawnentry(id, spawnentry, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSpawnentry operation in SpawnentryApi.
 * @export
 * @interface SpawnentryApiCreateSpawnentryRequest
 */
export interface SpawnentryApiCreateSpawnentryRequest {
    /**
     * Spawnentry
     * @type {ModelsSpawnentry}
     * @memberof SpawnentryApiCreateSpawnentry
     */
    readonly spawnentry: ModelsSpawnentry
}

/**
 * Request parameters for deleteSpawnentry operation in SpawnentryApi.
 * @export
 * @interface SpawnentryApiDeleteSpawnentryRequest
 */
export interface SpawnentryApiDeleteSpawnentryRequest {
    /**
     * spawngroupID
     * @type {number}
     * @memberof SpawnentryApiDeleteSpawnentry
     */
    readonly id: number
}

/**
 * Request parameters for getSpawnentriesBulk operation in SpawnentryApi.
 * @export
 * @interface SpawnentryApiGetSpawnentriesBulkRequest
 */
export interface SpawnentryApiGetSpawnentriesBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof SpawnentryApiGetSpawnentriesBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for getSpawnentry operation in SpawnentryApi.
 * @export
 * @interface SpawnentryApiGetSpawnentryRequest
 */
export interface SpawnentryApiGetSpawnentryRequest {
    /**
     * Id
     * @type {number}
     * @memberof SpawnentryApiGetSpawnentry
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcType&lt;br&gt;NpcType.AlternateCurrency&lt;br&gt;NpcType.Merchantlists&lt;br&gt;NpcType.NpcFactions&lt;br&gt;NpcType.NpcFactions.NpcFactionEntries&lt;br&gt;NpcType.NpcSpells&lt;br&gt;NpcType.NpcSpells.NpcSpellsEntries&lt;br&gt;Spawngroup&lt;br&gt;Spawngroup.Spawn2
     * @type {string}
     * @memberof SpawnentryApiGetSpawnentry
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof SpawnentryApiGetSpawnentry
     */
    readonly select?: string
}

/**
 * Request parameters for listSpawnentries operation in SpawnentryApi.
 * @export
 * @interface SpawnentryApiListSpawnentriesRequest
 */
export interface SpawnentryApiListSpawnentriesRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcType&lt;br&gt;NpcType.AlternateCurrency&lt;br&gt;NpcType.Merchantlists&lt;br&gt;NpcType.NpcFactions&lt;br&gt;NpcType.NpcFactions.NpcFactionEntries&lt;br&gt;NpcType.NpcSpells&lt;br&gt;NpcType.NpcSpells.NpcSpellsEntries&lt;br&gt;Spawngroup&lt;br&gt;Spawngroup.Spawn2
     * @type {string}
     * @memberof SpawnentryApiListSpawnentries
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof SpawnentryApiListSpawnentries
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof SpawnentryApiListSpawnentries
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof SpawnentryApiListSpawnentries
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof SpawnentryApiListSpawnentries
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof SpawnentryApiListSpawnentries
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof SpawnentryApiListSpawnentries
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof SpawnentryApiListSpawnentries
     */
    readonly select?: string
}

/**
 * Request parameters for updateSpawnentry operation in SpawnentryApi.
 * @export
 * @interface SpawnentryApiUpdateSpawnentryRequest
 */
export interface SpawnentryApiUpdateSpawnentryRequest {
    /**
     * Id
     * @type {number}
     * @memberof SpawnentryApiUpdateSpawnentry
     */
    readonly id: number

    /**
     * Spawnentry
     * @type {ModelsSpawnentry}
     * @memberof SpawnentryApiUpdateSpawnentry
     */
    readonly spawnentry: ModelsSpawnentry
}

/**
 * SpawnentryApi - object-oriented interface
 * @export
 * @class SpawnentryApi
 * @extends {BaseAPI}
 */
export class SpawnentryApi extends BaseAPI {
    /**
     * 
     * @summary Creates Spawnentry
     * @param {SpawnentryApiCreateSpawnentryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawnentryApi
     */
    public createSpawnentry(requestParameters: SpawnentryApiCreateSpawnentryRequest, options?: any) {
        return SpawnentryApiFp(this.configuration).createSpawnentry(requestParameters.spawnentry, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes Spawnentry
     * @param {SpawnentryApiDeleteSpawnentryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawnentryApi
     */
    public deleteSpawnentry(requestParameters: SpawnentryApiDeleteSpawnentryRequest, options?: any) {
        return SpawnentryApiFp(this.configuration).deleteSpawnentry(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets Spawnentries in bulk
     * @param {SpawnentryApiGetSpawnentriesBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawnentryApi
     */
    public getSpawnentriesBulk(requestParameters: SpawnentryApiGetSpawnentriesBulkRequest, options?: any) {
        return SpawnentryApiFp(this.configuration).getSpawnentriesBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets Spawnentry
     * @param {SpawnentryApiGetSpawnentryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawnentryApi
     */
    public getSpawnentry(requestParameters: SpawnentryApiGetSpawnentryRequest, options?: any) {
        return SpawnentryApiFp(this.configuration).getSpawnentry(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists Spawnentries
     * @param {SpawnentryApiListSpawnentriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawnentryApi
     */
    public listSpawnentries(requestParameters: SpawnentryApiListSpawnentriesRequest = {}, options?: any) {
        return SpawnentryApiFp(this.configuration).listSpawnentries(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates Spawnentry
     * @param {SpawnentryApiUpdateSpawnentryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpawnentryApi
     */
    public updateSpawnentry(requestParameters: SpawnentryApiUpdateSpawnentryRequest, options?: any) {
        return SpawnentryApiFp(this.configuration).updateSpawnentry(requestParameters.id, requestParameters.spawnentry, options).then((request) => request(this.axios, this.basePath));
    }
}