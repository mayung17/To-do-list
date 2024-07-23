import React ,{useState, useEffect}from 'react'
import "./App.css"
import Todo from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

import { TaskForm } from './comonents/TaskForm'
import { TaskColumn } from './comonents/TaskColumn'
import { SiteName } from './comonents/SiteName'


const oldTasks =localStorage.getItem("tasks")
console.log(oldTasks)

export const App = () => {
  const [tasks,setTasks] = useState(JSON.parse(oldTasks)||[]);
  useEffect(() => {localStorage.setItem("tasks", JSON.stringify(tasks))}, [tasks])
  const handleDelete = (taskIndex) => {
    const newTasks =tasks.filter((task, index) => index!==taskIndex)
    setTasks(newTasks)
  }
  
  return (
    
    <div className='app'>
       <SiteName/>
 
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn taskName="todo" img={Todo} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn taskName="doing" img={doingIcon}tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn taskName="done" img={doneIcon}tasks={tasks} status="completed" handleDelete={handleDelete}/>
      </main>
      
    </div>
  )
}
