'use client'
import { useEffect, useState } from "react";
import usePagination from '../custom-hooks/usePagination'
import axios from "axios";
import PostItem from "./PostItem";
import NewPost from "./NewPost";
//Pagination
import Pagination from "../components/Pagination";

export default function ListOfPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentPage, perPage, paginate,  setCurrentPage } = usePagination()  
  
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

    const indexOfLastPost = currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / perPage);

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
          <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          perPage={perPage}
          paginate={paginate}
          />
        </div>
      </div>
    );
  }
  