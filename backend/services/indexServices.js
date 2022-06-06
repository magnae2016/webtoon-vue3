"use strict";

const { SQLHandler, Query, QueryTypes } = require("../modules/mysqldb");

async function findMonthNewWebtoon(params) {
  try {
    let sql = Query.monthNewWebtoon;
    const rows = await SQLHandler.query(sql, {
      type: QueryTypes.SELECT,
      rowsAsArray: false,
    });

    return rows;
  } catch (error) {
    throw error;
  }
}
exports.findMonthNewWebtoon = findMonthNewWebtoon;
