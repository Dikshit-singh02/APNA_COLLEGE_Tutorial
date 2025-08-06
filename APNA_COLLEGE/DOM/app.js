// let smallImage=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImage.length;i++){
//     console.dir(smallImage[i].src);
// }
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll(".div a"));
// let para=document.querySelector("p");


let p=document.createElement('p');

p.innerText="I am Dsr";

document.querySelector("body").append(p);
p.style.color="red";

let div=document.createElement('div');
let h1=document.createElement('h1');
let p1=document.createElement('p');

h1.innerText="I am inside div "
p1.innerText="Me Too";
div.append(h1);
div.append(p1);
div.classList.add("box")
document.querySelector("body").prepend(div)
