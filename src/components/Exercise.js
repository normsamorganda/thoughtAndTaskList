import React from 'react'
import { useEffect, useState, useRef } from 'react';
import ThoughtsDisplay from './ThoughtsDisplay';
import '../assets/Journal.css'
const Exercise = () => {

    let thoughtRef = useRef("");
    let dateRef = useRef("");
    let [id,setId] = useState(Date.now())

    // let items = localStorage.getItem("Thoughts") ? JSON.parse(localStorage.getItem("Thoughts")): [];

    let [detailList,setDetailList] = useState([])

    let submitInfo = (event) => {
        event.preventDefault(); // prevent from submitting form
        const detail = {
            id: id,
            thought:thoughtRef.current.value,
            date:dateRef.current.value,
        };
        setDetailList([...detailList, detail]);
        setId(Date.now());
        thoughtRef.current.value="";
        dateRef.current.value="";
     
    };

    let handleRemove = (e) => {
        let num = parseInt(e.target.id);
        let remove = [...detailList].filter((item) => {
            return item.id !== num;
           
        })
        setDetailList(remove);
        alert(num)
    }

    useEffect(() => {
        localStorage.setItem("Thoughts",JSON.stringify(detailList))
     },[detailList])

   
        

  return (
    
     <div className='container'>
            <form onSubmit={submitInfo}>
               <h3>Your thoughts today</h3>
               <br></br>
                Date: <input 
                tabIndex={1}
                type="date" 
                id="date" 
                name="date"
                ref={dateRef}> 
                </input>  <br></br>
                <br></br>
                Your thought:
                <input 
                tabIndex={2}
                type='text' 
                name='thought' 
                id='thought'
                ref={thoughtRef}
                required>
                </input>   
                <button type='submit'>Save</button>
            </form>
            <br></br>
            <ThoughtsDisplay list={detailList} removeData={handleRemove}/>
        </div>

  )
}

export default Exercise