import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setConnet] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    });
    console.log(content);
    setConnet("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label> New Comment </label>
            <input
              type="text"
              value={content}
              onChange={(e) => setConnet(e.target.value)}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary"> Submit</button>
        </form>
      </div>
    </>
  );
};

export default CommentCreate;
