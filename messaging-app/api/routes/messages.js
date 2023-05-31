var express = require("express");
var router = express.Router();
const db = require("./firebase");
const {
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  serverTimestamp,
  deleteDoc,
  updateDoc,
} = require("firebase/firestore");

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    let query = await getDocs(collection(db, "messages"));
    let response = [];
    query.forEach((doc) => response.push({ ...doc.data(), id: doc.id }));
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/:messageId", async (req, res) => {
  try {
    const id = req.params.messageId;
    const docRef = doc(db, "messages", id);
    const docSnap = await getDoc(docRef);
    return res.status(200).json({ ...docSnap.data() });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const ref = await addDoc(collection(db, "messages"), {
      username: req.body.username,
      createdAt: serverTimestamp(),
      isEdited: false,
      text: req.body.text,
    });
    console.log("Document written with id", ref.id);
    return res.status(201).json({ message: "Post successful!", id: ref.id });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:messageId", async (req, res) => {
  try {
    const id = req.params.messageId;
    const updated_text = req.body.text;
    console.log(updated_text);
    const docRef = doc(db, "messages", id);
    await updateDoc(docRef, { text: updated_text, isEdited: true });
    return res
      .status(200)
      .json({ message: `Message with id ${id} successfully updated!` });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
router.delete("/:messageId", async (req, res) => {
  try {
    const id = req.params.messageId;
    const docRef = doc(db, "messages", id);
    const docSnap = await deleteDoc(docRef);
    return res
      .status(200)
      .json({ message: `Message with id ${id} successfully deleted!` });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
