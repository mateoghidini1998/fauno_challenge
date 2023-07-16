'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";

export default function ListOfPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
          );
          const orderedPosts = response.data.sort((a, b) => b.id - a.id);
          setPosts(orderedPosts)
          setLoading(false);
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
        console.log('Response from creating post:', response);
        console.log('New post created:', newPost);
  
        setPosts((prevPosts) => [newPost, ...prevPosts]);
        // Reset form inputs
        setNewPostTitle('');
        setNewPostBody('');
      } catch (error) {
        console.error('Error creating post:', error);
      }
    };
  
    const updatePost = (postId, updatedTitle, updatedBody) => {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, title: updatedTitle, body: updatedBody } : post
        )
      );
    };

    if(loading){
        return <h1>Loading...</h1>
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="flex flex-col gap-4 items-center container mx-auto">
        <div className="flex flex-col gap-4 w-full items-center">
          <h2 className="">New Post</h2>
          <form onSubmit={addPost} className="flex flex-col gap-4 w-full items-center">
            <div className="flex flex-col gap-4 w-full items-center">
              <label htmlFor="title">Title:</label>
              <input
                name="title"
                type="text"
                id="title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                required
                className="rounded bg-transparent text-black border-spacing-5 border-black-1000 border-2"
              />
            </div>
            <div className="flex flex-col gap-4 w-full items-center">
              <label htmlFor="body">Body:</label>
              <textarea
                type="text"
                id="body"
                value={newPostBody}
                onChange={(e) => setNewPostBody(e.target.value)}
                required
                className="rounded bg-transparent text-black border-spacing-5 border-black-1000 border-2"
              />
            </div>
            <button
              className="border-4 rounded-lg text-xs border-black-1000 bg-green-950 text-black p-1  w-24 uppercase"
              type="submit">
              Create Post
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          {currentPosts.map((post) => (
            <PostItem key={post.id} post={post} updatePost={updatePost} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {currentPage > 1 && (
            <button onClick={() => paginate(currentPage - 1)} className="mr-2 bg-green-950 text-white px-4 py-2 rounded">
              Prev
            </button>
          )}
          {currentPage < Math.ceil(posts.length / postsPerPage) && (
            <button onClick={() => paginate(currentPage + 1)} 
            className="bg-green-950 text-white px-4 py-2 rounded">
              <span>Next</span>
            </button>
          )}
        </div>
      </div>
    );
  }
  