import ListOfPosts from "./ListOfPosts";
import PostsHero from "./PostsHero";


export default function PostsPage() {

  return (
    <>
      <section className="bg-white w-auto flex flex-col items-center">
        <PostsHero/>
        <ListOfPosts  />
      </section>
    </>
  );
}
