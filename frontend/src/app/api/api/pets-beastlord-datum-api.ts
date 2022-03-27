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
import { ModelsPetsBeastlordDatum } from '../models';
/**
 * PetsBeastlordDatumApi - axios parameter creator
 * @export
 */
export const PetsBeastlordDatumApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates PetsBeastlordDatum
         * @param {ModelsPetsBeastlordDatum} petsBeastlordDatum PetsBeastlordDatum
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPetsBeastlordDatum: async (petsBeastlordDatum: ModelsPetsBeastlordDatum, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'petsBeastlordDatum' is not null or undefined
            if (petsBeastlordDatum === null || petsBeastlordDatum === undefined) {
                throw new RequiredError('petsBeastlordDatum','Required parameter petsBeastlordDatum was null or undefined when calling createPetsBeastlordDatum.');
            }
            const localVarPath = `/pets_beastlord_datum`;
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
            const nonString = typeof petsBeastlordDatum !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(petsBeastlordDatum !== undefined ? petsBeastlordDatum : {})
                : (petsBeastlordDatum || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes PetsBeastlordDatum
         * @param {number} id playerRace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePetsBeastlordDatum: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deletePetsBeastlordDatum.');
            }
            const localVarPath = `/pets_beastlord_datum/{id}`
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
         * @summary Gets PetsBeastlordData in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPetsBeastlordDataBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getPetsBeastlordDataBulk.');
            }
            const localVarPath = `/pets_beastlord_data/bulk`;
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
         * @summary Gets PetsBeastlordDatum
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPetsBeastlordDatum: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getPetsBeastlordDatum.');
            }
            const localVarPath = `/pets_beastlord_datum/{id}`
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
         * @summary Lists PetsBeastlordData
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
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
        listPetsBeastlordData: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/pets_beastlord_data`;
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
         * @summary Updates PetsBeastlordDatum
         * @param {number} id Id
         * @param {ModelsPetsBeastlordDatum} petsBeastlordDatum PetsBeastlordDatum
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePetsBeastlordDatum: async (id: number, petsBeastlordDatum: ModelsPetsBeastlordDatum, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updatePetsBeastlordDatum.');
            }
            // verify required parameter 'petsBeastlordDatum' is not null or undefined
            if (petsBeastlordDatum === null || petsBeastlordDatum === undefined) {
                throw new RequiredError('petsBeastlordDatum','Required parameter petsBeastlordDatum was null or undefined when calling updatePetsBeastlordDatum.');
            }
            const localVarPath = `/pets_beastlord_datum/{id}`
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
            const nonString = typeof petsBeastlordDatum !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(petsBeastlordDatum !== undefined ? petsBeastlordDatum : {})
                : (petsBeastlordDatum || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PetsBeastlordDatumApi - functional programming interface
 * @export
 */
export const PetsBeastlordDatumApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates PetsBeastlordDatum
         * @param {ModelsPetsBeastlordDatum} petsBeastlordDatum PetsBeastlordDatum
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPetsBeastlordDatum(petsBeastlordDatum: ModelsPetsBeastlordDatum, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsPetsBeastlordDatum>>> {
            const localVarAxiosArgs = await PetsBeastlordDatumApiAxiosParamCreator(configuration).createPetsBeastlordDatum(petsBeastlordDatum, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes PetsBeastlordDatum
         * @param {number} id playerRace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePetsBeastlordDatum(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await PetsBeastlordDatumApiAxiosParamCreator(configuration).deletePetsBeastlordDatum(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets PetsBeastlordData in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPetsBeastlordDataBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsPetsBeastlordDatum>>> {
            const localVarAxiosArgs = await PetsBeastlordDatumApiAxiosParamCreator(configuration).getPetsBeastlordDataBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets PetsBeastlordDatum
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPetsBeastlordDatum(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsPetsBeastlordDatum>>> {
            const localVarAxiosArgs = await PetsBeastlordDatumApiAxiosParamCreator(configuration).getPetsBeastlordDatum(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists PetsBeastlordData
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
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
        async listPetsBeastlordData(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsPetsBeastlordDatum>>> {
            const localVarAxiosArgs = await PetsBeastlordDatumApiAxiosParamCreator(configuration).listPetsBeastlordData(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates PetsBeastlordDatum
         * @param {number} id Id
         * @param {ModelsPetsBeastlordDatum} petsBeastlordDatum PetsBeastlordDatum
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePetsBeastlordDatum(id: number, petsBeastlordDatum: ModelsPetsBeastlordDatum, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsPetsBeastlordDatum>>> {
            const localVarAxiosArgs = await PetsBeastlordDatumApiAxiosParamCreator(configuration).updatePetsBeastlordDatum(id, petsBeastlordDatum, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PetsBeastlordDatumApi - factory interface
 * @export
 */
export const PetsBeastlordDatumApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates PetsBeastlordDatum
         * @param {ModelsPetsBeastlordDatum} petsBeastlordDatum PetsBeastlordDatum
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPetsBeastlordDatum(petsBeastlordDatum: ModelsPetsBeastlordDatum, options?: any): AxiosPromise<Array<ModelsPetsBeastlordDatum>> {
            return PetsBeastlordDatumApiFp(configuration).createPetsBeastlordDatum(petsBeastlordDatum, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes PetsBeastlordDatum
         * @param {number} id playerRace
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePetsBeastlordDatum(id: number, options?: any): AxiosPromise<string> {
            return PetsBeastlordDatumApiFp(configuration).deletePetsBeastlordDatum(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets PetsBeastlordData in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPetsBeastlordDataBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsPetsBeastlordDatum>> {
            return PetsBeastlordDatumApiFp(configuration).getPetsBeastlordDataBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets PetsBeastlordDatum
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPetsBeastlordDatum(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsPetsBeastlordDatum>> {
            return PetsBeastlordDatumApiFp(configuration).getPetsBeastlordDatum(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists PetsBeastlordData
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
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
        listPetsBeastlordData(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsPetsBeastlordDatum>> {
            return PetsBeastlordDatumApiFp(configuration).listPetsBeastlordData(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates PetsBeastlordDatum
         * @param {number} id Id
         * @param {ModelsPetsBeastlordDatum} petsBeastlordDatum PetsBeastlordDatum
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePetsBeastlordDatum(id: number, petsBeastlordDatum: ModelsPetsBeastlordDatum, options?: any): AxiosPromise<Array<ModelsPetsBeastlordDatum>> {
            return PetsBeastlordDatumApiFp(configuration).updatePetsBeastlordDatum(id, petsBeastlordDatum, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createPetsBeastlordDatum operation in PetsBeastlordDatumApi.
 * @export
 * @interface PetsBeastlordDatumApiCreatePetsBeastlordDatumRequest
 */
export interface PetsBeastlordDatumApiCreatePetsBeastlordDatumRequest {
    /**
     * PetsBeastlordDatum
     * @type {ModelsPetsBeastlordDatum}
     * @memberof PetsBeastlordDatumApiCreatePetsBeastlordDatum
     */
    readonly petsBeastlordDatum: ModelsPetsBeastlordDatum
}

/**
 * Request parameters for deletePetsBeastlordDatum operation in PetsBeastlordDatumApi.
 * @export
 * @interface PetsBeastlordDatumApiDeletePetsBeastlordDatumRequest
 */
export interface PetsBeastlordDatumApiDeletePetsBeastlordDatumRequest {
    /**
     * playerRace
     * @type {number}
     * @memberof PetsBeastlordDatumApiDeletePetsBeastlordDatum
     */
    readonly id: number
}

/**
 * Request parameters for getPetsBeastlordDataBulk operation in PetsBeastlordDatumApi.
 * @export
 * @interface PetsBeastlordDatumApiGetPetsBeastlordDataBulkRequest
 */
export interface PetsBeastlordDatumApiGetPetsBeastlordDataBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof PetsBeastlordDatumApiGetPetsBeastlordDataBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for getPetsBeastlordDatum operation in PetsBeastlordDatumApi.
 * @export
 * @interface PetsBeastlordDatumApiGetPetsBeastlordDatumRequest
 */
export interface PetsBeastlordDatumApiGetPetsBeastlordDatumRequest {
    /**
     * Id
     * @type {number}
     * @memberof PetsBeastlordDatumApiGetPetsBeastlordDatum
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof PetsBeastlordDatumApiGetPetsBeastlordDatum
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof PetsBeastlordDatumApiGetPetsBeastlordDatum
     */
    readonly select?: string
}

/**
 * Request parameters for listPetsBeastlordData operation in PetsBeastlordDatumApi.
 * @export
 * @interface PetsBeastlordDatumApiListPetsBeastlordDataRequest
 */
export interface PetsBeastlordDatumApiListPetsBeastlordDataRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof PetsBeastlordDatumApiListPetsBeastlordData
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof PetsBeastlordDatumApiListPetsBeastlordData
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof PetsBeastlordDatumApiListPetsBeastlordData
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof PetsBeastlordDatumApiListPetsBeastlordData
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof PetsBeastlordDatumApiListPetsBeastlordData
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof PetsBeastlordDatumApiListPetsBeastlordData
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof PetsBeastlordDatumApiListPetsBeastlordData
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof PetsBeastlordDatumApiListPetsBeastlordData
     */
    readonly select?: string
}

/**
 * Request parameters for updatePetsBeastlordDatum operation in PetsBeastlordDatumApi.
 * @export
 * @interface PetsBeastlordDatumApiUpdatePetsBeastlordDatumRequest
 */
export interface PetsBeastlordDatumApiUpdatePetsBeastlordDatumRequest {
    /**
     * Id
     * @type {number}
     * @memberof PetsBeastlordDatumApiUpdatePetsBeastlordDatum
     */
    readonly id: number

    /**
     * PetsBeastlordDatum
     * @type {ModelsPetsBeastlordDatum}
     * @memberof PetsBeastlordDatumApiUpdatePetsBeastlordDatum
     */
    readonly petsBeastlordDatum: ModelsPetsBeastlordDatum
}

/**
 * PetsBeastlordDatumApi - object-oriented interface
 * @export
 * @class PetsBeastlordDatumApi
 * @extends {BaseAPI}
 */
export class PetsBeastlordDatumApi extends BaseAPI {
    /**
     * 
     * @summary Creates PetsBeastlordDatum
     * @param {PetsBeastlordDatumApiCreatePetsBeastlordDatumRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetsBeastlordDatumApi
     */
    public createPetsBeastlordDatum(requestParameters: PetsBeastlordDatumApiCreatePetsBeastlordDatumRequest, options?: any) {
        return PetsBeastlordDatumApiFp(this.configuration).createPetsBeastlordDatum(requestParameters.petsBeastlordDatum, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes PetsBeastlordDatum
     * @param {PetsBeastlordDatumApiDeletePetsBeastlordDatumRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetsBeastlordDatumApi
     */
    public deletePetsBeastlordDatum(requestParameters: PetsBeastlordDatumApiDeletePetsBeastlordDatumRequest, options?: any) {
        return PetsBeastlordDatumApiFp(this.configuration).deletePetsBeastlordDatum(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets PetsBeastlordData in bulk
     * @param {PetsBeastlordDatumApiGetPetsBeastlordDataBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetsBeastlordDatumApi
     */
    public getPetsBeastlordDataBulk(requestParameters: PetsBeastlordDatumApiGetPetsBeastlordDataBulkRequest, options?: any) {
        return PetsBeastlordDatumApiFp(this.configuration).getPetsBeastlordDataBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets PetsBeastlordDatum
     * @param {PetsBeastlordDatumApiGetPetsBeastlordDatumRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetsBeastlordDatumApi
     */
    public getPetsBeastlordDatum(requestParameters: PetsBeastlordDatumApiGetPetsBeastlordDatumRequest, options?: any) {
        return PetsBeastlordDatumApiFp(this.configuration).getPetsBeastlordDatum(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists PetsBeastlordData
     * @param {PetsBeastlordDatumApiListPetsBeastlordDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetsBeastlordDatumApi
     */
    public listPetsBeastlordData(requestParameters: PetsBeastlordDatumApiListPetsBeastlordDataRequest = {}, options?: any) {
        return PetsBeastlordDatumApiFp(this.configuration).listPetsBeastlordData(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates PetsBeastlordDatum
     * @param {PetsBeastlordDatumApiUpdatePetsBeastlordDatumRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetsBeastlordDatumApi
     */
    public updatePetsBeastlordDatum(requestParameters: PetsBeastlordDatumApiUpdatePetsBeastlordDatumRequest, options?: any) {
        return PetsBeastlordDatumApiFp(this.configuration).updatePetsBeastlordDatum(requestParameters.id, requestParameters.petsBeastlordDatum, options).then((request) => request(this.axios, this.basePath));
    }
}