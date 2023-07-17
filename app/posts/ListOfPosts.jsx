'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import NewPost from "./NewPost";

export default function ListOfPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
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

    
  
    const addPost = async (title, body) => {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          {
            title,
            body,
            userId: 1,
          }
        );
  
        const newPost = response.data; 
        setPosts((prevPosts) => [newPost, ...prevPosts]);

      } catch (error) {
        console.error("Error creating post:", error);
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
      <div className="flex flex-col gap-4 items-center container mx-4 w-full">
        <div className="flex flex-col gap-4 w-auto items-center">
          <h2 className="">New Post</h2>
          <NewPost addPost={addPost} />
        </div>
        <div className="flex flex-col gap-4 w-full items-center  mx-4 lg:mx-auto">
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
  