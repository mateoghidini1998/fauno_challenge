'use client'
import React, { useState } from 'react'
import { GrEdit } from 'react-icons/gr';
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
      <article className="relative flex flex-col gap-2 border-9 border-black-1000 rounded-2xl bg-green-950 whitespace-normal lg:w-auto md:w-auto w-full max-w-md m-6 h-auto p-4  shadow-3xl text-black">
        {isEditing ? (
          <EditPost
          post={post}
          updatePost={updatePost}
          onCancelEdit={handleCancelEdit}
          onSaveSuccess={handleSaveSuccess}
          />
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
              <GrEdit className='w-full  h-full' />
            </button>
          </div>
        )}
      </article>
    );
}

export default PostItem