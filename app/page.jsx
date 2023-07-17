'use client'
import ListOfPosts from "./components/Posts/ListOfPosts";
import PostsHero from "./components/Posts/PostsHero";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function PostsPage() {

  //Send notification
  const notify = (message) => {
    toast.success(message);
  };

  return (
    <>
      <section className="bg-white w-auto flex flex-col items-center">
        <ToastContainer />
        <PostsHero/>
        <ListOfPosts notify={notify} />
      </section>
    </>
  );
}
