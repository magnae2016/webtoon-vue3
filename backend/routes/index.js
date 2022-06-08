var express = require("express");
var router = express.Router();
const fs = require("fs");
const {
  findMonthNewWebtoon,
  findWeekdayRecommendWebtoon,
  findAllWebtoons,
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
  const { m = "list" } = req.query;

  try {
    const data = await findMonthNewWebtoon();
    const body = { [m]: data };
    res.json(body);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get("/weekdayRecommendWebtoon", async function (req, res, next) {
  const { m = "list", week } = req.query;

  try {
    const day = getWeekNumber(week);
    const data = await findWeekdayRecommendWebtoon({ day });
    const body = { [m]: data };
    res.json(body);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get("/allWebtoons", async function (req, res, next) {
  const { m = "list" } = req.query;
  const weeks = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  try {
    const data = await findAllWebtoons();
    const webtoons = [...Array(weeks.length)].map((x) => []);
    data.forEach((element) => {
      const { weekdayYN } = element;
      const matches = [...weekdayYN.matchAll(/Y/g)];
      matches.forEach((match) => {
        const { index } = match;
        webtoons[index].push(element);
      });
    });

    const zip = {};
    weeks.forEach((week, index) => {
      zip[week] = webtoons[index];
    });

    const body = { [m]: zip };
    res.json(body);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
