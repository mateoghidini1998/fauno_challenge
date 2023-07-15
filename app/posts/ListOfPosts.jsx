'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import PostItem from "./PostItem";

export default function ListOfPosts() {
    const [posts, setPosts] = useState([]);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
          );
          setPosts(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchPosts();
    }, []);

    
  
    const addPost = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts',
          {
            title: newPostTitle,
            body: newPostBody,
            userId: 1,
          }
        );
  
        const newPost = response.data;
        console.log('New post created:', newPost);
  
        setPosts((prevPosts) => [...prevPosts, newPost]);
  
        // Reset form inputs
        setNewPostTitle('');
        setNewPostBody('');
      } catch (error) {
        console.error('Error creating post:', error);
      }
    };
  
    const updatePost = async (postId, updatedTitle, updatedBody) =>{
        const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
            id: postId,
            title: updatedTitle,
            body: updatedBody,
            userId: 1
        })
       
        setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, title: updatedTitle, body: updatedBody } : post
        )
      );
    }

    return (
      <div className="">
        <div className="">
          <h2>Create New Post</h2>
          <form onSubmit={addPost}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                name="title"
                type="text"
                id="title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                required
                className="rounded text-lime-500 "
              />
            </div>
            <div>
              <label htmlFor="body">Body:</label>
              <input
                type="text"
                id="body"
                value={newPostBody}
                onChange={(e) => setNewPostBody(e.target.value)}
                required
                className="rounded text-lime-500 border-lime-400"
              />
            </div>
            <button type="submit">Create Post</button>
          </form>
        </div>
  
        {posts.map((post) => (
            <PostItem key={post.id} post={post} updatePost={updatePost}/>
        ))}
      </div>
    );
  }
  