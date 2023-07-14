import Link from "next/link";

export default function ListOfPosts({ posts }) {
  // Verify if the posts data is not undefined or null
  if (!posts) {
    return null; // or render an appropriate loading/error state
  }
    return posts.slice(0,5).map(post => (
        <Link href={'/posts/[id]'} as={`posts/${post.id}`} key={post.id}>
            <article key={post.id}>
                <h2 style={{color: '#09f'}}>{post.title}</h2>
                <p>{post.body}</p>
            </article>
        </Link>
    ))

}
