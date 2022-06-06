"use strict";

require("dotenv").config();

module.exports = {
    host: process.env.NODE_MYSQLDB_HOST,
    user: process.env.NODE_MYSQLDB_USER,
    password: process.env.NODE_MYSQLDB_PASSWORD,
    database: process.env.NODE_MYSQLDB_DATABASE,
};
