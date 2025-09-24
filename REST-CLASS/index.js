const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method")); 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: uuidv4(), username: "apnacollege", content: "I love coding!" },
  { id: uuidv4(), username: "Dsr", content: "Do Hard Work" },
  { id: uuidv4(), username: "Dikshit", content: "I got selected for first internship !" }
];


app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});


app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  const id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("show", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("edit", { post });
});

app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const newContent = req.body.content;
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  if (newContent) {
    post.content = newContent;
  }

  res.redirect(`/posts/${id}`);
});


app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter(p => p.id !== id);
  res.redirect("/posts");
});


app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
