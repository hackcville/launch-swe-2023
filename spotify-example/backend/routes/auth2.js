var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");
const fetch = require("node-fetch");
var SpotifyWebApi = require("spotify-web-api-node");

const stateKey = "spotify_auth_state";

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = process.env.redirect_uri;
const scope = "user-top-read user-library-read user-read-recently-played"; //<- needs to be updated based on what you want to do

var spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: redirect_uri,
});

const auth_token = Buffer.from(
  client_id + ":" + client_secret,
  "utf8"
).toString("base64");
/* GET home page. */

const generateRandomString = (length) => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
router.get("/", function (req, res) {
  try {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);
    const myParams = {
      client_id: client_id,
      response_type: "code",
      redirect_uri: redirect_uri,
      scope: scope,
      state: state,
    };
    const url =
      "https://accounts.spotify.com/authorize?" +
      new URLSearchParams(myParams).toString();
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

    // console.log(token_url.toString());
    /*
    const headers = {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret, "utf8").toString("base64"),
      // "Content-Type": "application/x-www-form-urlencoded",
    };
    */
    // const response = await axios.post(
    //   token_url.toString(),
    //   {},
    //   {
    //     headers: {
    //       Authorization:
    //         "Basic " +
    //         Buffer.from(client_id + ":" + client_secret, "utf8").toString(
    //           "base64"
    //         ),
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   }
    // );
    /*
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
        client_id: client_id,
        client_secret: client_secret,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
    */
    // Authorization: "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64"),
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
    fetch(url, { method: "post", headers: headers })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        obj = {
          token: data.access_token,
        };
        return obj;
      })
      .then((obj) => res.status(200).json(obj));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
