'use client'
import React, { useState } from 'react'
import { TbEdit } from 'react-icons/tb';
import EditPost from './EditPost';

function PostItem({ post, updatePost }) {

    const [ isEditing, setIsEditing ] = useState(false);
    
    const handleEdit = (postId) => {
        setIsEditing(true);
    }

    const handleCancelEdit = (postId) => {
        setIsEditing(false);
        
    }

    const handleSaveSuccess = () => {
      setIsEditing(false);
    };

    return (
      <article className="relative flex flex-col gap-2 border-[1.5px]  border-[#E2E8F0]  rounded-[10px] bg-white whitespace-normal lg:w-[450px] md:w-[450px]  w-full max-w-md m-6 h-auto p-4 text-black shadow-[-1px_2px_4px_0px_#DDDDDD59]
      ">
        {isEditing ? (
          <EditPost
          post={post}
          updatePost={updatePost}
          onCancelEdit={handleCancelEdit}
          onSaveSuccess={handleSaveSuccess}
          />
        ) : (
          <div className='w-auto'>
            <h2 className="text-xl font-bold text-[#282828] text-[20px] mb-4 overflow-hidden break-words">
              {post.id} - {post.title}
            </h2>
            <p className="mb-10 text-[#757575] break-words ">{post.body}</p>
            <button
              className="border-none rounded-[6px] bg-gray-600 flex justify-evenly items-center text-white text-[14px] font-[500] p-2 h-[37px] w-[80px] absolute bottom-2 right-2 m-2"
              onClick={() => handleEdit(post.id)}
            >
              <TbEdit className='' /> Edit
            </button>
          </div>
        )}
      </article>
    );
}

export default PostItem