// let btns=document.querySelectorAll('button');
// console.dir(btns);
// for(btn of btns){
// btn.onclick=func;
// btn.onmouseenter=function(){
//     console.log("you enter the button ");
// }

// btn.addEventListener("click",sayHello);
// btn.addEventListener("click",sayName);
// btn.addEventListener("dblclick",function(){
//     alert("You double clicked on me")
// });
// }

// function func(){
//     // console.log("button was clicked");
//     alert("Button Was Clicked");
// }


// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     alert("Apna College");
// }


// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
// // console.log("generate random color")
// let h3=document.querySelector("h3");
// let randcolor=getRandomColor();
// h3.innerText=randcolor;

// let div=document.querySelector('div');
// div.style.backgroundColor=randcolor;

// });

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }
// let para=document.querySelector("p");
// para.addEventListener("click",function(){
//     alert("Paragraph Was Clicked")
// })
// let box=document.querySelector(".box");
// box.addEventListener('mouseenter',function(){
//    alert("mouse inside box")
// })

// let inp=document.querySelector("input");
// inp.addEventListener('keydown',function(){
//     alert("key was pressed")
// })

// inp.addEventListener('keyup',function(){
//     alert("key was released")
// })

// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     // alert("form submitted")
//     let inp=document.querySelector('input');
//     alert(inp.value);
// })

let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelector("li");


div.addEventListener("click",function(event){
    event.stopPropagation();
    alert("Div was clicked");
})
ul.addEventListener("click",function(event){
    event.stopPropagation();
    alert("ul was clicked");
})

for(li in lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
    alert("li was clicked");
    console.log(hey)
})
 }