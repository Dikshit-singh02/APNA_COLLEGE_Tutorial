 import { useState } from "react";
 export default function TodoList(){

    let [todos,setTodos]=useState(["Sample Task"]);
    let [newTodo,setNewTodo]=useState([""]);

    let addNewTask=()=>{
       // console.log("we Have to add new task in todlist")
        setTodos([...todos,newTodo]);
        setNewTodo("");
    }


    let updateTodoValue=(event)=>{
        //console.log(event.target.value);
        setNewTodo(event.target.value);
    }
    return(
        <div>
            <h4>Todo List</h4>

            <input type="text" placeholder="Add a task" value={newTodo} onChange={updateTodoValue}/>
            <br /><br />
            
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br /><br />
            <hr />
            <h4>Tasks Todo </h4>
            <ul>
                {
                    todos.map((todo)=>(
                       <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
}