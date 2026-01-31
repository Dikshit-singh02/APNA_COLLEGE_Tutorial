import { useState } from "react";

// function handleFormSubmit(event){
//     event.preventDefault();
//     console.log("form was submitted");
// }


export default function Form(){
    let [fullName,setFullNmae]=useState("Dsr");
    let handleNameChange=(event)=>{
        console.log(event.target.value);
        setFullNmae(event.target.value)
    }
    return(
        
        <form action="">
            <label htmlFor="username">Full Name</label>
            <input type="text" placeholder="Enter name" value={fullName}onChange={handleNameChange} id="username"/>
            <button >Submit</button>
        </form>
    )
}