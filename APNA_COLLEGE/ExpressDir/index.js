const express=require("express");
const app=express();

//  console.dir(app);
let port=8080;
app.listen(port,()=>{
console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("Request recieved");
//     res.send({
//         name:"Apple",
//         color:"red",
//     });
// })


// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// });

// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
// });

// app.get("*",(req,res)=>{
//     res.send("This path does not exist.");
// });


// app.post("/",(req,res)=>{
//     res.send("you send a post request")
// })

app.get("/",(req,res)=>{
    res.send("Hello i am root");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    // console.log(req.params);
    let htmlStr=`<h1>Welcome to the page of @${username}</h1>`
    // res.send(`Welcome to the page of @${username}`);
    res.send(htmlStr);
});


app.get("/search",(req,res)=>{
    // console.log(req.query);
    let {q}=req.query;
    res.send(`search results for query :${q}`);
})