'use client'
import React, { useState } from 'react'


function NewPost({ addPost }) {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(newPostTitle, newPostBody);
    setNewPostTitle("");
    setNewPostBody("");
  };
      
  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col items-center gap-2 border-9 border-black-1000 rounded-2xl bg-green-950 m-6 w-full h-auto p-4 overflow-hidden shadow-3xl text-black">
      <div className="flex flex-col gap-4 w-full items-start">
        <label className="text-white font-bold uppercase" htmlFor="title">Title:</label>
        <input
        name="title"
        type="text"
        id="title"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
        required
        className="overflow-y-hidden rounded w-full bg-transparent text-white font-bold border-spacing-5 border-black-1000 border-2 uppercase p-2"
        />
      </div>
      <div className="flex flex-col gap-4 w-full items-start">
        <label className="text-white font-bold uppercase" htmlFor="body">Body:</label>
        <textarea
        type="text"
        id="body"
        value={newPostBody}
        onChange={(e) => setNewPostBody(e.target.value)}
        required
        className="overflow-y-hidden rounded w-full bg-transparent text-black border-spacing-5 p-2 border-black-1000 border-2"
        />
      </div>
      <button
      className="border-4 rounded-lg text-xs border-black-1000 bg-green-950 text-black p-1  w-24 uppercase"
      type="submit">
      Create Post
      </button>
  </form>
  )
}

export default NewPost