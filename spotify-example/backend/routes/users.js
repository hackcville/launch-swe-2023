var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");

/* GET users listing. */
router.get("/profile", async (req, res, next) => {
  try {
    const token = req.query.token;
    const url = "https://api.spotify.com/v1/me";
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).catch((err) => console.log(err));
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/top-items", async (req, res) => {
  try {
    const token = req.query.token;
    const url = "https://api.spotify.com/v1/me/top/tracks";
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .catch((err) => console.log(err))
      .then((response) => response.json());
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
