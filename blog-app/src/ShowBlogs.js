import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";
import './ShowBlogs.css'; 

const ShowBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const blogsCollection = collection(db, 'blogs');
            const blogsSnapshot = await getDocs(blogsCollection);
            const blogsList = blogsSnapshot.docs.map(doc => doc.data());
            setBlogs(blogsList);
        }
        
        fetchBlogs();
    }, []);

    return (
        <div>
            <h2>All Blogs</h2>
            {blogs.map((blog, index) => (
                <div className="Blog" key={index}>
                    <h3>{blog.title}</h3>
                    <h4>By {blog.author}</h4>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
}

export default ShowBlogs;
