import {useState} from 'react'
function ToDoList(){

    const[tasks,setTasks]=useState(["You are good","It's great to have u on board"]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }

    }
    function removeTask(index){
        const updatedTasks=tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
             setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
            if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
             setTasks(updatedTasks);
        }
 
    }
    


    return(
        <div className="main-container">
            <div className="header">
                <p>To Do List</p>
            </div>
            <input type="text" id="task" placeholder="Enter your task" value={newTask} onChange={handleInputChange}></input>
            <button className="add-button" onClick={addTask}>Add</button>

            <ol>
                   {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=> removeTask(index)}>delete</button>
                  <button className="move-task" onClick={()=>  moveTaskUp(index)}>up</button>  
                    <button className="move-task" onClick={()=>  moveTaskDown(index)}>down</button>  
                    

            </li>
            
            )}
            </ol>


        </div>
       
    )

}
export default ToDoList; 
