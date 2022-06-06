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

async function findWeekdayRecommendWebtoon({ day }) {
  try {
    let sql = Query.weekdayRecommendWebtoon;
    const bind = [day];
    const rows = await SQLHandler.query(sql, {
      type: QueryTypes.SELECT,
      rowsAsArray: false,
      bind,
    });

    return rows;
  } catch (error) {
    throw error;
  }
}
exports.findWeekdayRecommendWebtoon = findWeekdayRecommendWebtoon;
