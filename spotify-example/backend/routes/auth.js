var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = process.env.redirect_uri;
const scope = "user-top-read user-library-read"; //<- needs to be updated based on what you want to do

const auth_token = Buffer.from(
  client_id + ":" + client_secret,
  "utf8"
).toString("base64");
/* GET home page. */
router.get("/", function (req, res) {
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

router.get("/callback", async (req, res) => {
  try {
    const code = req.query.code;
    let token_url = new URL("https://accounts.spotify.com/api/token");
    token_url.searchParams.append("grant_type", "authorization_code");
    token_url.searchParams.append("code", code);
    token_url.searchParams.append("redirect_uri", redirect_uri);

    console.log(token_url.toString());
    const headers = {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret, "utf8").toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const response = await axios.post(token_url.toString(), {}, headers);
    res.status(200).send(hello);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
