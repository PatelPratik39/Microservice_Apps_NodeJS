

// import "./App.css";
import PostCreate from "./PostCreate";
import PostLists from "../../posts/PostLists";

function App() {
  return (
    <>
      <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <h2>Posts</h2>
        <PostLists />
      </div>
    </>
  );
}

export default App;
