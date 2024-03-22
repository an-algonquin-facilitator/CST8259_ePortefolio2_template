import express from "express";
const app = express();
const port = 3000;

app.use("/", express.static("public"));

app.get("/object", (req, res) => {
  const aJavascriptObject = {
    name: "John",
  };
  res.send(aJavascriptObject);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
