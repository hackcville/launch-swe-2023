var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
require("dotenv").config();

const client_id = process.env.client_id;
const client_secret = process.env.secret;
const redirect_uri = "http://localhost:3000";
const scope =
  "user-top-read user-library-read user-read-private user-read-email"; //<- needs to be updated based on what you want to do

router.get("/", async (req, res, next) => {
  try {
    const url =
      "https://accounts.spotify.com/authorize?client_id=" +
      client_id +
      "&response_type=code&redirect_uri=" +
      redirect_uri +
      "&scope=" +
      scope;
    res.status(200).json({ url: url });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/callback", async (req, res, next) => {
  try {
    const code = req.query.code;
    const url =
      "https://accounts.spotify.com/api/token?grant_type=authorization_code&code=" +
      code +
      "&redirect_uri=" +
      redirect_uri;
    const headers = {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret, "utf8").toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    };
    console.log(url);
    console.log(headers);
    fetch(url, { method: "post", headers: headers })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        obj = {
          token: data.access_token,
        };
        return obj;
      })
      .then((obj) => res.status(200).json(obj));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
