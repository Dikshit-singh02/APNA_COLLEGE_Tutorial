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



// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//  let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//        resolve("sucess :Data save"); 
//     }else{
//         reject("failure: Data not saved");
//     }
//     });
// }




// savetoDb("Apna college")
// .then(()=>{
//     console.log("promised was ressolved");
   
// })
// .catch(()=>{
//     console.log("promise was rejected");
// });


// async function greet(){
    // jkk   promish give rejected
    // throw "weak connection"
    //   return "hello World!";
//     setTimeout(() => {
//     console.log("Hello after 3 seconds");
// }, 3000);
// }
// greet()
// .then((result)=>{
//     console.log("promish was ressolved");
//      console.log("Result was:",result);
// })
// .catch((err)=>{
//      console.log("promish was rejected due to error ",err);
// })

// let demo=async()=>{return 5};




// function getNum(){
//     return new Promise((ressolve,reject)=>{
//         setTimeout(()=>{
//              let num=Math.floor(Math.random()*10)+1;
//              if(num>3){
//                 reject("Promish rejected");
//              }
//         console.log(num);
//         ressolve();
//     },1000);
//         })
       
// }
// async function demo() {
//     await  getNum();
//     await getNum();

    
//     await getNum();
//     await getNum();
// }


function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            if (num > 3) {
                reject("Promise rejected because number > 3");
            } else {
                resolve(num);
            }
        }, 1000);
    });
}

async function demo() {
    try {
        await getNum();
        await getNum();
        // await getNum();
        // await getNum();
        console.log("All numbers generated successfully!");
    } catch (err) {
        console.log("Error caught:", err);
    }
}

demo();
