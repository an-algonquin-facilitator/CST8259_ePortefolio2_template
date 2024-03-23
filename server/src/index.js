import express from "express";
import cors from "cors";

const port = 4000;

const app = express();

// cors is important for security reasons
app.use(cors());

// Create an endpoint called /ping that responds with "pong"
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () =>
  console.log("Server is running on port 4000 and ready to accept requests!")
);
