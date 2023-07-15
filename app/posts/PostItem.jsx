import React from 'react'

function PostItem({post}) {
  return (
    <article key={post.id} className='flex flex-col gap-2 rounded-lg bg-white mt-6 w-96 p-3' >
        <h2 className='text-xl font-bold text-lime-500'>
            {post.id} {post.title}
        </h2>
        <p className='mt-2 text-gray-950'>{post.body}</p>
    </article>
  )
}

export default PostItem