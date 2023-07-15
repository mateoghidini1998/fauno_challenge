'use client'
import React, { useState } from 'react'
import { GiCancel } from 'react-icons/gi';
import { RiSave3Fill } from 'react-icons/ri';

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
        <article className="relative flex flex-col gap-2 border-9 border-black-1000 rounded-2xl bg-green-950 mt-6 w-96 p-4 overflow-hidden shadow-3xl text-black">
          {isEditing ? (
            <div>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <textarea
                value={updatedBody}
                onChange={(e) => setUpdatedBody(e.target.value)}
              />
              <button 
              className='top-2 right-2 absolute' 
              onClick={() => handleSave(post.id)}
              >
                <RiSave3Fill/>
              </button>
              <button 
              className='top-2 right-0 absolute'
              onClick={() => handleCancelEdit(post.id)}
              >
                <GiCancel/>
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold text-white uppercase">
                {post.id} {post.title}
              </h2>
              <p className="my-2 text-gray-950 ">{post.body}</p>
              <button 
              className='border-9 rounded-xl border-black-1000 bg-white text-black p-2 shadow-2xl w-24 absolute bottom-2 right-2'
              onClick={() => handleEdit(post.id)} >
                Edit
              </button>
            </div>
          )}
        </article>
      );
}

export default PostItem