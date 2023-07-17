'use client'
import React, { useState } from 'react'
import { GiCancel } from 'react-icons/gi';
import { RiSave3Fill } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';

function PostItem({ post, updatePost }) {

    const [ isEditing, setIsEditing ] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(post.title);
    const [updatedBody, setUpdatedBody] = useState(post.body);
    
    const handleEdit = (postId) => {
        setIsEditing(true);
    }

    const handleCancelEdit = (postId) => {
        setIsEditing(false);
        
    }

    const handleSave = (postId) => {
        updatePost(postId, updatedTitle, updatedBody);
        setIsEditing(false);
    };

    return (
      <article className="relative flex flex-col gap-2 border-9 border-black-1000 rounded-2xl bg-green-950 whitespace-normal lg:w-auto md:w-auto w-full max-w-md m-6 h-auto p-4 overflow-hidden shadow-3xl text-black">
        {isEditing ? (
          <div>
            <input
              className="bg-transparent text-black border-b-2 rounded-sm border-black uppercase mb-4"
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <textarea
              className="bg-transparent border-2 border-black p-2 text-black w-full h-auto whitespace-pre-wrap overflow-hidden rounded-lg"
              value={updatedBody}
              onChange={(e) => setUpdatedBody(e.target.value)}
            />
            <button
              className="border-9 rounded-xl border-black-1000 bg-blue-600 text-black p-2 shadow-2xl w-10 absolute top-2 right-16"
              onClick={() => handleSave(post.id)}
            >
              <RiSave3Fill className="w-full h-full" />
            </button>
            <button
              className="border-9 rounded-xl border-black-1000 bg-red-700 text-black p-2 shadow-2xl w-10 absolute top-2 right-2"
              onClick={() => handleCancelEdit(post.id)}
            >
              <GiCancel />
            </button>
          </div>
        ) : (
          <div className='w-auto'>
            <h2 className="text-xl font-bold text-white uppercase mb-4">
              {post.id} {post.title}
            </h2>
            <p className="mb-10 text-gray-950 break-words ">{post.body}</p>
            <button
              className="border-9 rounded-xl border-black-1000 bg-yellow-500 text-black p-2 shadow-2xl w-10 absolute bottom-2 right-2 m-2"
              onClick={() => handleEdit(post.id)}
            >
              <GrEdit />
            </button>
          </div>
        )}
      </article>
    );
}

export default PostItem