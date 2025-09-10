const express=require("express");
const path=require("path");

const app=express();
app.set("views",path.join(__dirname,"/views"))
const port=8080;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js/app.js")))
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username",(req,res)=>{
    // const follower=["bob","neha","jyoti","prachi","adwita","ashish"]
    // let {username}=req.params;
//    console.log(username);
// res.render("instagram.ejs",{username,follower});


let { username }=req.params;
const instaData=require("./data.json")
const data=instaData[username];
// console.log(data)
if(data){
res.render("instagram.ejs",{data});
}else{
    res.render("error.ejs")
}
})

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6 +1);
    res.render("rolldice.ejs",{diceVal});
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});