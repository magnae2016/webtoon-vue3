var express = require("express");
var router = express.Router();
const fs = require("fs");

router.get("/realTimeRankChoice", function (req, res, next) {
  const { m, order } = req.query;

  let path = "";
  if (order === "User") {
    path = "data/realTimeRankChoiceFavorite.json";
  } else if (order === "Update") {
    path = "data/realTimeRankChoiceUpdate.json";
  }

  try {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) throw err;

      const body = { list: JSON.parse(data) };
      res.json(body);
    });
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
