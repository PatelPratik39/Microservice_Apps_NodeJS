import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "../client/src/CommentCreate";
import CommnetsList from "../client/src/CommentsList";

function PostLists() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommnetsList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderPosts}
      </div>
    </>
  );
}

export default PostLists;
