// let game=[['X',null,'O'],[null,'X',null],['O',null,'X']];
// console.log(game);
// let str="ApNaCoLlEgE";
// let idx=3;
// if(str[idx]==str[idx].toLowerCase()){
//     console.log("characterislowercase");}
//     else{
//         console.log("characterisnotlowercase");
//     }


// Guessing Game

// let favMovie=prompt("Enter your favorate movie name");
// let guess=prompt("Enter your guess movie name");
// while(guess!=favMovie&&guess!='quit'){
// console.log("Wrong");
//     guess=prompt("wrong guess. Please try again");
// }

// if(guess==favMovie){
//     console.log("congrats Your win");
// }



// const arrow=(n)=>(n*n);

// let id=setInterval(()=>{
//   console.log("Hello");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },10000);

// let arr9=[10,20,30,50,901];
// ans=arr9.every((el)=>(el%10==0));
// console.log(ans);

function sum(a,b=9){
    return a+b;
}
sum(9);
let arrrr=[1,3,9,45,-9,6,23,54,-1,3]
console.log(Math.min(...arrrr));
const data={
    email:"hjk@gmail.com",
    password:"asdf"
};

const datacpy={...data,id:"123"};
console.log(datacpy);

function func(...args){
    // for(let i=0;i<args.length;i++){
    //     console.log("you gave us",args[i]);
    // }
    return args.reduce((add,el)=>add+el);
}
let names=["tonu","nanj","ranu"];
let [winner,runner]=names;
console.log(winner);