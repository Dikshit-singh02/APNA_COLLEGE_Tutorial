// let pencilPrice=10;
// let eraserPrice=10;
// console.log("Total Price is :",pencilPrice+eraserPrice,"Rupees");

// let color="yellow";
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("Speed slow");
//         break;
//     case "Green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Light not working")    
// }

// alert("Something wrong")
// console.error("This is an error");
// console.warn("this is a warning");
// let name= prompt("Enter Your Name");
// let msg="Hello "+ name;
// // console.log(name);
// alert(msg);


// let msg="     Hello  12 ";
// console.log(msg);
// console.log(msg.trim());
// console.log(msg.toLowerCase());
// console.log(msg.toUpperCase());
// let name="Dikshit";
// console.log(name.indexOf("ksh"));
// console.log(name.indexOf("mksh"));
// let mSG=msg.trim();
// // console.log(mSG);
// // console.log(mSG.toUpperCase());
// console.log(mSG.trim().toLocaleUpperCase());
// console.log(name.slice(2));
// console.log(name.replace("ksh","xxx"));
// console.log(name.repeat(2));
// let students=["dsr","aman","nandan"];
// console.log(students);
// console.log(students);
// let info=["shardha",23,23.32]
// console.log(info);
// info[2]="dsr";
// console.log(info);
// let nums=[[1,2],[3,4],[6,1],[12,1]];
// console.log(nums);
// console.log(nums[0][0]);


// loops in js

// for(let i=1;i<=15;i=i+2){
//     // if(i%2==1){
//     // console.log(i);
//     // }
//     console.log(i);
// }
// let n=prompt("Enter Number in for loop");
// for(let i=1;i<=10;i++){
//     console.log(`${n} X ${i}  = ${i*n}`);
// }
// let m=prompt("Enter Number for while loop");
// let i=1;
// while(i<=10){
//      console.log(`${m} X ${i}  = ${i*m}`);
//      i++;
// }



// let heroes=[
//     ["ironman","spiderman","thor"],
//     ["superman","wonder women","flash"]
// ];
// for(i=0;i<heroes.length;i++){
//     console.log(i,heroes[i],heroes[i].length);
//    for(j=0;j<heroes[i].length;j++){
//     console.log(`j=${j}, ${heroes[i][j]}`)
//    }
// }



// let fruits=["mango","apple","banana","litchi","orange"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// object literals
// let student={
//     name:"dsr",
//     age:23,
//     marks:99
// };


// const post={
//     username:"Dikshit Singh",
//     content:"This is #firstpost",
//     like:"150",
//     repost:10,
//     tags:["@dikshit","@apnacollege"]
// };
// console.log(post.username,post["like"]);

// const classInfo={
//     aman:{
//         grade:"A+",
//         city:"delhi"
//     },
//     dsr:{
//         grade:"A+",
//         city:"Saharsa",
//         scholarship:"100%"
//     },
//     prachi:{
//         grade:"A+",
//         city:"himachal",
//         scholarship:"70%",
//         college:"cu"
//     }
// };
// console.log(classInfo);


// const student={
//     name:"dikshit",
//     age:23,
//     eng:95,
//     math:93,
//     phy:97,
//     getAvg(){
//         console.log(this);
//     let avg=(this.eng+this.math+this.phy)/3;
//     console.log(`${this.name} got average marks=${avg}`);
//     }
// };



//try and catch
// console.log("hello");
// console.log("hello");
// let a=6;
// try{
// console.log(a);
// }catch(err){
//     console.log("caught an error .. a is not defined");
// }

// console.log("hello");
// console.log("hello");
// console.log("hello");

//Arrow Function
// const sum=(a,b)=>{console.log(a+b);};
// //arrow function implicit retun
// const func=(a,b)=>(a*b);


//set timeout  fxn
// console.log("hi there");
// setTimeout(()=>{
//     console.log("Dikshit Channel")
// },4000);
// console.log("Welcome to");


//setInterval fxn

// let id=setInterval(()=>{
//     console.log("hello");
// },2000);


// for each
let arr=[1,2,3,44,5];
let print=function(el){
    console.log(el);
}
arr.forEach(print);
let double=arr.map((el)=>{
    return el*2;
})
console.log(double);
let ans=arr.filter((el)=>{
    return el%2==0;
})
console.log(ans);
console.log(arr.every((el)=>(el%2==0)));