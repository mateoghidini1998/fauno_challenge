'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

async function addPost(title, body, userId, updatePosts) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body,
      userId,
    });
    console.log('New post created:', response.data);
    const newPost = response.data;
    updatePosts(newPost)
  } catch (error) {
    console.error('Error creating post:', error);
    // Handle error or any other logic here
  }
}

function NewPost({updatePosts}) {

  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(title, body, userId, updatePosts);
    router.push('/posts');
    // Reset form inputs
    setTitle('');
    setBody('');
  
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='text-red-500'
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className='text-red-500'
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default NewPost;
