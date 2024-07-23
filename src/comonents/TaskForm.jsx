import React, {useState} from 'react'
import  "./TaskForm.css"
import { Tag } from './Tag.jsx'
export const TaskForm = ({setTasks}) => {
  const[taskData, setTaskData] =  useState({
    task: "",
    status:"todo",
    tags:[]
  })
  const checkTag=(tag) =>{
return taskData.tags.some(item=>item===tag)
  }
  const selectTag = (tag)=> {
    if(taskData.tags.some(item => item ==tag)) //some will return true or false, for loop each tags and check each item with the tag.
    {
     const filterTags= taskData.tags.filter(item=>item!==tag)
     setTaskData((prev) => {
      return{...prev, tags:filterTags}
     });
    }
    else{
      setTaskData((prev) => {
        return{...prev, tags: [...prev.tags, tag]}
      })
    }
    console.log(tag)

    

  }
  console.log(taskData.tags)
  const handleChange= (e) => {

    // const name = e.target.name
    // const value = e.target.value
    const {name, value} = e.target;
    setTaskData((prev) =>{
      return{...prev, [name]: value}
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(taskData)
    setTasks((prev) => {
      return[...prev, taskData];
    })
    setTaskData({
      task: "",
      status:"todo",
      tags:[]
    })
  }

  

  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text" className='task_input' name='task'
            value={taskData.task}
            placeholder='Enter your task'
            onChange={handleChange}/>
            
            <div className='task_form_bottom_line'>
                <div>
                <Tag tagName="HTML" selected={checkTag("HTML")}selectTag={selectTag}/>
                <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
                <Tag tagName="JAVASCRIPT" selectTag={selectTag} selected={checkTag("JAVASCRIPT")}/>
                <Tag tagName="REACT" selectTag={selectTag} selected={checkTag("REACT")}/>
                
                </div>
                <div>
                <select className="task_status" name='status' value={taskData.status}
                onChange={handleChange}>
                    <option value="todo"> To Do </option>
                    <option value="doing"> Doing</option>
                    <option value="completed">Completed</option>
                </select>

                <button type='submit' className='task_submit'>
                    + Add Task
                </button>
                </div>
                </div>
        </form>
    
    </header>
  )
}
