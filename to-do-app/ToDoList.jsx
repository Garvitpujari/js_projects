import {useState} from 'react';
function ToDoList(){

    const[task,addTask]=useState("");
    const[task,removeTask]=useState("");

    const[task,upTask]=useState("");
    const[task,downTask]=useState("");



    
    function addTask(){
        setTask(...task);

    }

    return (
        <div className="main-container">
            <div className="header">
            <p>To Do List</p>
            </div>
           <div className="input">
            <input type="text" id="task" placeholder="Enter your task">
            </input>

            <button id="add" onChange={addTask}>Add</button>

            
          


           </div>

        </div>
    )

}
export default ToDoList;
