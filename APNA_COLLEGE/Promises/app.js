// function savetoDb(data,sucess,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//        sucess(); 
//     }else{
//         failure();
//     }
// }


// savetoDb("apna college",()=>{
// console.log("sucess: date saved succesfully");


// savetoDb("hello world",()=>{
// console.log("sucess2: date saved succesfully");

// savetoDb("Dsr",()=>{
// console.log("sucess3: date saved succesfully");
// },()=>{
// console.log("failure3:date not saved! weak connection");
// });


// },()=>{
// console.log("failure2:date not saved! weak connection");
// });

// },()=>{
// console.log("failure:date not saved! weak connection");
// });



function savetoDb(data){
    return new Promise((resolve,reject)=>{
 let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
       resolve("sucess :Data save"); 
    }else{
        reject("failure: Data not saved");
    }
    });
}




savetoDb("Apna college")
.then(()=>{
    console.log("promised was ressolved");
   
})
.catch(()=>{
    console.log("promise was rejected");
});
