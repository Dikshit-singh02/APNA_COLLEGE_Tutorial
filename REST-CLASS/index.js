const express=require("express")
const app=express();
const port=8080;
const path=require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,
    "public")));

    let posts=[{
      id:"1a",
      username:"apnacollege",
      content:"I love coding!"
    },
    {
      id:"2b",
      username:"Dsr",
      content:"Do Hard Work"
    },
    {
      id:"3c",
      username:"Dikshit ",
      content:"I got selected for first internship !"
    }
  ];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});


app.get("/posts/new",(req,res)=>{
  res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
  // console.log(req.body);
  let { username, content } = req.body;
posts.push({ username, content });
  res.redirect("/posts");
  // res.send("post request working")
})


app.get("/posts/:id",(req,res)=>{
  let {id}=req.params;
  let post = posts.find(p => p.id === id);
  res.render("show.ejs",{post})
  // console.log(post);
  // res.send("request working");

})

app.listen(port,()=>{
  console.log(`App is listening at port ${port}`);
    
});