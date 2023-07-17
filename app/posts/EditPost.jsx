'use client'
import React, { useState } from 'react'
import { GiCancel } from 'react-icons/gi';
import { RiSave3Fill } from 'react-icons/ri';

function EditPost({post, updatePost, handleCancelEdit}) {
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedBody, setUpdatedBody] = useState(post.body);

  const handleSave = () => {
    updatePost(post.id, updatedTitle, updatedBody);
  };

  const cancelEdit = () => {
    handleCancelEdit();
  };

  return (
    <div>
        <input
        className="bg-transparent text-black border-b-2 rounded-sm border-black uppercase mb-4"
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <textarea
        className="bg-transparent border-2 border-black p-2 text-black w-full h-auto overflow-hidden rounded-lg"
        value={updatedBody}
        onChange={(e) => setUpdatedBody(e.target.value)}
        />
        <button
        className="border-9 rounded-xl border-black-1000 bg-blue-600 text-black p-2 shadow-2xl w-10 absolute top-2 right-16"
        onClick={handleSave}
        >
        <RiSave3Fill className="w-full h-full" />
        </button>
        <button
        className="border-9 rounded-xl border-black-1000 bg-red-700 text-black p-2 shadow-2xl w-10 absolute top-2 right-2"
        onClick={cancelEdit}
        >
        <GiCancel />
        </button>
    </div>   
  )
}

export default EditPost