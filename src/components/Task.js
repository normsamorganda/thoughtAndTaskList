import React from 'react'
import { useEffect, useState, useRef } from 'react';
import TaskDisplay from './TaskDisplay';
import '../assets/Journal.css'
const Task = () => {

    let taskRef = useRef("");
    let dayRef = useRef("");
    let [id,setId] = useState(Date.now())

    // let items = localStorage.getItem("Thoughts") ? JSON.parse(localStorage.getItem("Thoughts")): [];

    let [taskList,setTaskList] = useState([])

    let submitTask = (event) => {
        event.preventDefault(); // prevent from submitting form
        const task = {
            id: id,
            task:taskRef.current.value,
            day:dayRef.current.value,
        };
        setTaskList([...taskList, task]);
        setId(Date.now());
        taskRef.current.value="";
        dayRef.current.value="";
     
    };

    let handleRemove = (e) => {
        let num = parseInt(e.target.id);
        let remove = [...taskList].filter((data) => {
            return data.id !== num;
           
        })
        setTaskList(remove);
        alert(num)
    }

    useEffect(() => {
        localStorage.setItem("Task",JSON.stringify(taskList))
     },[taskList])

   
        

  return (
  
     <div className='container'>
          <hr></hr>
            <form onSubmit={submitTask}>
               <h3>Task List</h3>
               <br></br>
                Date: <input 
                tabIndex={1}
                type="date" 
                id="date" 
                name="date"
                ref={dayRef}> 
                </input>  <br></br>
                <br></br>
                Task
                <input 
                tabIndex={2}
                type='text' 
                name='thought' 
                id='thought'
                ref={taskRef}
                required>
                </input>   
                <button type='submit'>Save</button>
            </form>
            <br></br>
            <TaskDisplay list={taskList} removeData={handleRemove}/>
        </div>

  )
}

export default Task