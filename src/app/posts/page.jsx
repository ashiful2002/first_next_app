
import Link from "next/link";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
const Posts = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
      {posts.map((SinglePost) => (
        <div className="border p-3 rounded-2xl shadow-xl" key={SinglePost.id}>
          <h1 className="text-2xl  capitalize font-semibold">
            {SinglePost.title}
          </h1>
          <p className="pl-2">{SinglePost.body}</p>
          <Link href={`/posts/${SinglePost.id}`}>
            <button clasd className="btn btn-outline rounded-md mt-3">
              details {SinglePost.id}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
