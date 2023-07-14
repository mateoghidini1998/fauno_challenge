export default function Post({ params }){
    const { id } = params;

    return <>
        <h1>This is a Post {id}</h1>
    </>
}