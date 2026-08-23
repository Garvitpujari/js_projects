import {useState} from 'react';
function ToDoList(){

    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=> index!==i);
        setTasks(updatedTasks);

    }
    function addTask(){
        if(newTask.trim()!==""){
        setTasks(t=> [...t,newTask]);
        setNewTask("");
        }
    

    }
    function moveTaskUp(index){

        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

        
    }

 

    return (
        <div className="main-container">
            <div className="header">
            <p>To Do List</p>
            </div>
           <div className="input">
            <input type="text" id="task" placeholder="Enter your task" value={newTask} onChange={handleInputChange}>
            </input>

            <button className="add-button" onClick={addTask}>Add</button>        
             
           </div>

           <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=> deleteTask(index)}>delete</button>
                  <button className="move-task" onClick={()=>  moveTaskUp(index)}>up</button>  
                    <button className="move-task" onClick={()=>  moveTaskDown(index)}>down</button>  
                    

            </li>
            
            )}
           </ol>

        </div>
    )

}
export default ToDoList;
