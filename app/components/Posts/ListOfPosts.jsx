'use client'
import { useEffect, useState } from "react";
import usePagination from "@/app/custom-hooks/usePagination";
import axios from "axios";
import PostItem from "./PostItem";
import NewPost from "./NewPost";
//Pagination
import Pagination from "../UI/Pagination";



export default function ListOfPosts({notify}) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentPage, perPage, paginate,  setCurrentPage } = usePagination()  
  

    //Fetch all posts from API
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
          );
          //Sort the posts by id in descending order
          const orderedPosts = response.data.sort((a, b) => b.id - a.id);
          setPosts(orderedPosts)
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchPosts();
    }, []);

    
    //Create a post
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
        //Fake the recently created post's id
        newPost.id = posts.length + 1;

        //Render the new post at the very first of the list
        setPosts((prevPosts) => [newPost, ...prevPosts]);
        notify('Post created successfully!!!');

      } catch (error) {
        console.error("Error creating post:", error);
      }
    };
    
    //Update a post
    const updatePost = (postId, updatedTitle, updatedBody) => {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, title: updatedTitle, body: updatedBody } : post
        )
      );
      notify('Post updated successfully!!!');
    };

    if(loading){
        return <h1>Loading...</h1>
    }

    //Handle pagination
    const indexOfLastPost = currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / perPage);

    return (
      <div className="flex flex-col gap-4 items-center mx-4 p-4 w-full">
        <div className="flex flex-col gap-4 w-auto items-center">
          <NewPost addPost={addPost} />
        </div>
        <div className="flex flex-col gap-4 w-full items-center  mx-4 lg:mx-auto">
          {currentPosts.map((post) => (
            <PostItem key={post.id} post={post} updatePost={updatePost} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
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
  