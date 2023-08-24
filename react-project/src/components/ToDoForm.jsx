import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit} className='flex justify-between mt-2 mb-2'>
            <input className='border px-4 py-2 w-full' value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button className='mr-4 bg-red-200 px-8 shadow-md rounded-r-md text-slate-600 tracking-widest font-semibold uppercase inline-block'>Submit</button>
        </form>
    );
};

export default ToDoForm;