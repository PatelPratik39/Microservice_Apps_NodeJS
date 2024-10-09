const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// app.post("/events", (req, res) => {
//   const event = req.body;

//   axios.post("http://localhost:4000/events", event);
//   axios.post("http://localhost:4001/events", event);
// //   axios.post("http://localhost:4002/events", event);

//   res.send({ status: "OK" });
// });

app.post("/events", (req, res) => {
  const event = req.body;

  axios
    .post("http://localhost:4000/events", event)
    .then(() => console.log("Event sent to post service"))
    .catch((err) =>
      console.error("Error sending to post service:", err.message)
    );

  axios
    .post("http://localhost:4001/events", event)
    .then(() => console.log("Event sent to comments service"))
    .catch((err) =>
      console.error("Error sending to comments service:", err.message)
    );

  axios
    .post("http://localhost:4002/events", event)
    .then(() => console.log("Event sent to service on port 4002"))
    .catch((err) =>
      console.error("Error sending to service on port 4002:", err.message)
    );

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("app is listening at PORT = 4005");
});
