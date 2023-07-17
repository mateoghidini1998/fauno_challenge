import ListOfPosts from "./ListOfPosts";
import NewPost from "./NewPost";


export default function PostsPage() {

  return (
    <>
      <section className="bg-green-950">
        {/* <NewPost  /> */}
        <ListOfPosts  />
      </section>
    </>
  );
}
