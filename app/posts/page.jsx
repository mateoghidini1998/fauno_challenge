'use client'
import { useEffect, useState } from "react";
import ListOfPosts from "./ListOfPosts";
import axios from "axios";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
        // Handle the error here (display error message, retry, etc.)
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <section>
        <ListOfPosts posts={posts} />
      </section>
    </>
  );
}
