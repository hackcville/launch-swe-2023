const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
// https://indepth.dev/posts/1084/building-an-api-with-firebase#database-calls
// var admin = require("firebase-admin");

var serviceAccount = require("../permissions.json");

const app = initializeApp({
  ...serviceAccount,
  projectId: serviceAccount.project_id,
});
const db = getFirestore(app);

//const db = admin.firestore();
// const db = admin;

module.exports = db;
