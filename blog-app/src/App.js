import React from 'react';
import AddBlog from './AddBlog';
import ShowBlogs from './ShowBlogs';

function App() {
  return (
    <div className="App">
      <h1>Add a new blog post</h1>
      <AddBlog />
      <ShowBlogs />
    </div>
  );
}

export default App;

