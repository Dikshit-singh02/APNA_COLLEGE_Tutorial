import { useState } from "react";
export default function Counter(){
    //let [stateVariable,setStateVariable]=useState(10);

    let [count,setCount]=useState(0);
    //console.log(arr);

    let incCount=()=>{
        setCount(count+1);
        
    };
    let decCount=()=>{
        setCount(count-1);
    }
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={incCount}>Increase Count</button>
            <button onClick={decCount}>Decrease Count</button>
        </div>
    )
}