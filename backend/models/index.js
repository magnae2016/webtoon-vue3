"use strict";

const fs = require("fs");
const path = require("path");

const queries = {};
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      (file.slice(-4) === ".sql" || file.slice(-4) === ".SQL")
    );
  })
  .forEach((file) => {
    const name = file.slice(0, -4);
    let sql = fs.readFileSync(path.join(__dirname, file)).toString();
    sql = sql.trim();
    if (sql.slice(-1) === ";") sql = sql.slice(0, -1);
    queries[name] = sql;
  });

module.exports = queries;
