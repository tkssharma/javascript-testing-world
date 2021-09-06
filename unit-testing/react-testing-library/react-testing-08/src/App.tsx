// src/GifGenerator/GifGenerator.js
import React from "react";
import axios from "axios";

function usePostAPI() {
  const [posts, setPosts] = React.useState(null);
  React.useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);
  return [posts];
}
export default function GifGenerator() {
  const [posts] = usePostAPI();
  return (
    <>
      {posts ? (
        posts &&
        posts.map((post: any, index: number) => {
          return (
            <div>
              <h1>HELLO</h1>
              <p key={index}>{post.title}</p>
            </div>
          );
        })
      ) : (
        <p>…Loading</p>
      )}
    </>
  );
}
