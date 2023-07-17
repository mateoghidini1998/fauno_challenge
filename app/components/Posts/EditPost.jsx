'use client'
import React, { useState } from 'react'

function EditPost({post, updatePost, onCancelEdit, onSaveSuccess}) {
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedBody, setUpdatedBody] = useState(post.body);

  const handleSave = (postId) => {
    const confirmed = window.confirm('Are you sure you want to update this post?');
    if (confirmed) {
      updatePost(postId, updatedTitle, updatedBody);
      onSaveSuccess();
    }
  };



  return (
    <div className='h-auto'>
        <input
        className="w-full p-2 bg-transparent text-black border-[#E2E8F0] border-[1.5px] rounded-[6px]  mb-4 shadow-[-1px_2px_4px_0px_#DDDDDD59] h-[44px]"
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <textarea
        className="bg-transparent  p-2 text-black w-full h-auto min-h-[115px] whitespace-pre-wrap mb-2  rounded-[6px] border-[#E2E8F0] border-[1.5px] overflow-hidden scrollable shadow-[-1px_2px_4px_0px_#DDDDDD59]"
        value={updatedBody}
        onChange={(e) => setUpdatedBody(e.target.value)}
        />
        <div className='flex w-full justify-end'>
          <button
          className="rounded-[6px] w-[80px] h-[37px] border-none bg-gray-600 text-white text-[14px] p-2 mr-2"
          onClick={onCancelEdit}
          >
          Cancel
          </button>
          <button
          className="rounded-[6px] w-[80px] h-[37px]  bg-[#0F9B74] text-white text-[14px] p-2"
          onClick={() => handleSave(post.id)}
          >
          Save
          </button>
        </div>
    </div>
  )
}



export default EditPost