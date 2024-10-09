const express = require("express");
const { randomBytes } = require("crypto"); // random id generation pakcgae
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// saving thre posts here
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async(req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  await axios.post("http://localhost:4005/event", {
    type: "PostCreated",
    data: {
      id,
      title
    }
  });

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Port is running at 4000");
});
