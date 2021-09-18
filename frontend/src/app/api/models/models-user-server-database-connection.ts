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


import { ModelsServerDatabaseConnection } from './models-server-database-connection';

/**
 * 
 * @export
 * @interface ModelsUserServerDatabaseConnection
 */
export interface ModelsUserServerDatabaseConnection {
    /**
     * 
     * @type {number}
     * @memberof ModelsUserServerDatabaseConnection
     */
    active?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsUserServerDatabaseConnection
     */
    created_at?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsUserServerDatabaseConnection
     */
    created_by?: number;
    /**
     * 
     * @type {ModelsServerDatabaseConnection}
     * @memberof ModelsUserServerDatabaseConnection
     */
    database_connection?: ModelsServerDatabaseConnection;
    /**
     * 
     * @type {string}
     * @memberof ModelsUserServerDatabaseConnection
     */
    deleted_at?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsUserServerDatabaseConnection
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsUserServerDatabaseConnection
     */
    server_database_connection_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsUserServerDatabaseConnection
     */
    updated_at?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsUserServerDatabaseConnection
     */
    user_id?: number;
}

