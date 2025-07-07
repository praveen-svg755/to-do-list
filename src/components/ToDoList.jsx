import React from 'react'
import { useState,useEffect } from 'react'
import List from './List';

const ToDoList = () => {
    const [task , setTask] = useState("");
    const [toDoList,setToDoList] = useState([]);
    const changeHandler = e =>{
        setTask(e.target.value)
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(task);
        const newTodos = [...toDoList,task]
        setToDoList(newTodos)
        setTask("")
    }
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("toDoList"));
        if (storedTodos) {
            setToDoList(storedTodos);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }, [toDoList]);

    const deleteHandler = (indexValue) => {
      const newTodos = toDoList.filter((toDoList,index)=>index !== indexValue)
      setToDoList(newTodos)

    }

  return (
    <>
      <div className="card">
        <div className="card-body">
            <h5 className='class-title'>To Do List</h5>
            <form onSubmit={submitHandler}>
                <input type="text" name='task' value={task} onChange={changeHandler} placeholder='Add  Task...' />
                <input type="submit" value="add" name='add' />
            </form>
            <List items = {toDoList} deleteHandler = {deleteHandler}/>
        </div>
      </div>
    </>
  )
}

export default ToDoList