"use strict";

const appRoot = require("app-root-path");

const promisePool = require("./connectionpool");

const db = {};
const SQLHandler = {};
const Query = require(appRoot.resolve("/models"));

/**
 * @typedef {object} QueryTypes
 * @property {string} SELECT
 * @property {string} RAW
 **/

/**
 * @enum {QueryTypes}
 */
const QueryTypes = {
  /** @type {string} return one arguments: an array of results */
  SELECT: "SELECT",
  /** @type {string} return two arguments: an array of results, and a metadata object */
  RAW: "RAW",
};

/**
 * Execute a query on the DB
 * @param {string} sql sql
 * @param {object} [options = {}] Query options
 * @param {Array | string[]} options.bind an array of unnamed bind parameter to replace ?, ?, ... in your SQL
 * @param {QueryTypes} options.type The query type affects how results are formatted before they are passed back
 * @param {bool} options.rowsAsArray get results as an array rather than an object
 * @returns {Promise<any>} Promise
 */
SQLHandler.query = async function (sql, options = {}) {
  try {
    const { bind = [], type = QueryTypes.RAW, rowsAsArray = false } = options;
    const [rows, fields] = await promisePool.query(
      {
        sql,
        rowsAsArray,
      },
      bind
    );
    // Connection is automatically released when query resolves

    if (type === QueryTypes.SELECT) return rows;
    else if (type === QueryTypes.RAW) return { fields, rows };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

db.SQLHandler = SQLHandler;
db.Query = Query;
db.QueryTypes = Object.freeze(QueryTypes);

module.exports = db;
