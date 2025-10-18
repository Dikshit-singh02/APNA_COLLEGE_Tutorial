const mongoose=require("mongoose");


main()
.then(()=>{
    console.log("connection sucessful")
})
.catch((err)=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//schema creation
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

//model creation

const User=mongoose.model("User",userSchema);
//const Employee=mongoose.model("Employee",userSchema);

//inseting


// const user2=new User({
//     name:"eve",
//     email:"dikshitsingh9973@gmail.com",
//     age:23
// });

// user2
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// ;


//insertMany

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:42},
//     {name:"Neha",email:"tony@gmail.com",age:32},
//     {name:"Jyoti",email:"tony@gmail.com",age:23},
//     {name:"prachi",email:"tony@gmail.com",age:20},
// ]).then((res)=>{
//     console.log(res);
// })



//find 

// User.find({age:{$gt:30}})
// .then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


//finOne

// User.findOne({age:{$gt:30}})
// .then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


//finById

// User.findById("68f34ab629fcb5923ac8bcd7")
// .then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


//updateOne

// User.updateOne({name:"Tony"},{age:49})
// .then((res)=>{
//     console.log(res);
// });

//updateMany


// User.updateMany({age:{$gt:20}},{age:55})
// .then((res)=>{
//     console.log(res);
// });

//delete

// User.deleteOne({name:"Jyoti"}).then((res)=>{
//     console.log(res);
// })

// User.deleteMany({age:{$gt:50}}).then((res)=>{
//     console.log(res);
// })

// User.findByIdAndDelete('68f34ab629fcb5923ac8bcda').then((res)=>{
//     console.log(res);
// })

