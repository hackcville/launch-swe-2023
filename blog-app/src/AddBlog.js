import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const AddBlog = () => {

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function addBlogtoDb() {
    try {
        const docRef = await addDoc(collection(db, "blogs"), {
        author: author,
        title: title,
        content: content,
      });
      console.log("document ID: ", docRef.id);
      setAuthor("");
      setTitle("");
      setContent("");

    } catch (error) {
      console.error("error adding document: ", error);
    }
  };

  return (
    <div>
    <input
      type="text"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      placeholder="Author"
    />
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
    />
    <input
      type="text"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Content"
    />
    <button onClick={addBlogtoDb}>Submit</button>
  </div>
  
  );
};

export default AddBlog;
