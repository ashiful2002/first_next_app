"use-client";
import Link from "next/link";

const getPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};
const SinglePost = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);

  return (
    <div>
      <div className="border p-3 max-w-md mx-auto my-5 rounded-2xl shadow-xl">
        <p>{post.id}</p>
        <h1 className="text-2xl  capitalize font-semibold">{post.title}</h1>
        <p className="pl-2">{post.body}</p>
        <Link
          href="/posts"
          className="text-sky-500 underline mt-6 inline-block"
        >
          ← Back to Posts
        </Link>{" "}
      </div>
    </div>
  );
};

export default SinglePost;
