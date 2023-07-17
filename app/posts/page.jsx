import ListOfPosts from "./ListOfPosts";
import NewPost from "./NewPost";


export default function PostsPage() {

  return (
    <>
      <section className="bg-white w-auto flex flex-col items-center p-4">
        {/* <NewPost  /> */}
        <ListOfPosts  />
      </section>
    </>
  );
}
