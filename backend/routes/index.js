var express = require("express");
var router = express.Router();
const fs = require("fs");
const {
  findMonthNewWebtoon,
  findWeekdayRecommendWebtoon,
} = require("../services/indexServices");
const { getWeekNumber } = require("../utils");

router.get("/realTimeRankChoice", function (req, res, next) {
  const { m = "list", order } = req.query;

  let path = "";
  if (order === "User") {
    path = "data/realTimeRankChoiceFavorite.json";
  } else if (order === "Update") {
    path = "data/realTimeRankChoiceUpdate.json";
  }

  try {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) throw err;

      const body = { [m]: JSON.parse(data) };
      res.json(body);
    });
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get("/monthNewWebtoon", async function (req, res, next) {
  try {
    const body = await findMonthNewWebtoon();
    res.json(body);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get("/weekdayRecommendWebtoon", async function (req, res, next) {
  try {
    const { week } = req.query;
    const day = getWeekNumber(week);
    const body = await findWeekdayRecommendWebtoon({ day });
    res.json(body);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
