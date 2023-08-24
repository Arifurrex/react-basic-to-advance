import { useState } from 'react'
import './index.css'
import Header from './components/header';
import ToDoListt from './components/ToDoList';
import data from './Data/data.json'
import ToDoForm from './components/ToDoForm';


function App() {

  // all data will show in ToDoList
  const [ToDoList,setToDoList]=useState(data);

  // what handleToggle function will do here? 
  /* 
  we will ToDoList iteration with array map method and it will return 
  if todolist id equal handleToggle parameter id is same
  meaning the task's id matches the provided id
  than 
  complete: !task.complete: This part adds or updates the complete property in the newly created object. The complete property is set to the opposite value of the original task object's complete property. If the original task was marked as complete (true), the new object will have it marked as incomplete (false), and vice versa.
  */
   const handleToggle = (id)=>{
    let mapped = ToDoList.map(task=>{
      return task.id == Number(id) ? {...task,complete:!task.complete}:{...task}; //
    });
    setToDoList(mapped); // mapped is call back function
   }
   

   // what handleFilter will do
   /* 
   it will filter list of task . 
   */
   const handleFilter = () => {
    let filtered = ToDoList.filter(
      task => {
      // return task.complete; // it will return only true
      return !task.complete // it will return only false

    });
    setToDoList(filtered);
  }


  const addTask = (userInput ) => {
    let copy = [...ToDoList];
    copy = [...copy, { id: ToDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  
  // ====this will be display ====
  return (
    <>
      <div className='w-[90%] mx-auto px-4 py-6'>
        <Header />
        <ToDoForm addTask={addTask}/>
        <ToDoListt ToDoListo={ToDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      </div>
      
      
    </>
  )
}

export default App
