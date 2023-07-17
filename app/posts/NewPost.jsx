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
    <form onSubmit={handleSubmit} className="relative flex flex-col items-center gap-2 border-[#0F9B74] border-[1.5px]  rounded-[10px] bg-white my-6 mx-12 w-full h-auto p-4 overflow-hidden  text-black shadow-[-1px_2px_4px_0px_#DDDDDD59]">
      <div className="flex flex-col gap-4 w-full items-start">
        <label className="text-[#282828] font-semibold" htmlFor="title">Title:</label>
        <input
        name="title"
        type="text"
        id="title"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
        required
        className="overflow-y-hidden rounded-[6px] w-full bg-transparent text-white font-semibold border-spacing-5 border-[#E2E8F0] border-[1.5px] p-2 shadow-[-1px_2px_4px_0px_#DDDDDD59]"
        />
      </div>
      <div className="flex flex-col gap-4 w-full items-start">
        <label className="text-[#757575] font-normal" htmlFor="body">Body:</label>
        <textarea
        type="text"
        id="body"
        value={newPostBody}
        onChange={(e) => setNewPostBody(e.target.value)}
        required
        className="overflow-y-hidden rounded-[6px] w-full bg-transparent text-black border-spacing-5 border-[#E2E8F0] border-[1.5px] p-2 shadow-[-1px_2px_4px_0px_#DDDDDD59]"
        />
      </div>
      <div className='w-full flex justify-end'>
        <button
        className="rounded-[6px] border-none text-[14px] mr-2  bg-gray-600 text-white p-1  w-[80px] h-[37px] "
        type="submit">
        Cancel
        </button>
        <button
        className="rounded-[6px] border-none text-[14px]  bg-[#0F9B74] text-white p-1  w-[80px] h-[37px] "
        type="submit">
        Post
        </button>
      </div>
  </form>
  )
}

export default NewPost