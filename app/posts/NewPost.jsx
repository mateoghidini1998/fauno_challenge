'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function NewPost() {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

  const addPost = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: newPostTitle,
          body: newPostBody,
          userId: 1,
        }
      );

      const newPost = response.data;
      console.log('New post created:', newPost);

      setPosts((prevPosts) => [...prevPosts, newPost]);

      // Reset form inputs
      setNewPostTitle('');
      setNewPostBody('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };


  return (
    <div>
      <div className="">
          <h2>Create New Post</h2>
          <form onSubmit={addPost}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                name="title"
                type="text"
                id="title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                required
                className="rounded text-black bg-transparent"
              />
            </div>
            <div>
              <label htmlFor="body">Body:</label>
              <input
                type="text"
                id="body"
                value={newPostBody}
                onChange={(e) => setNewPostBody(e.target.value)}
                required
                className="rounded bg-transparent text-black"
              />
            </div>
            <button type="submit">Create Post</button>
          </form>
        </div>
    </div>
  )
}

export default NewPost