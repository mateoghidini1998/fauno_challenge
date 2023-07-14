import Link from "next/link";

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 10
        }
    })
        .then(res => res.json());
}

export default async function ListOfPosts() {

    const posts = await fetchPosts();
    return posts.slice(0,5).map(post => (
            <Link href={'/posts/[id]'} as={`posts/${post.id}`} key={post.id}>
                <article key={post.id}>
                    <h2 style={{color: '#09f'}}>{post.title}</h2>
                    <p>{post.body}</p>

                </article>
            </Link>
        ))
}