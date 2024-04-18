import React from 'react'

import ToDoListItems from './TodoListItems'
import TodoListInput from './TodoListInput'

const TodoList = () => {
  return (
    <section className='w-full md:h-screen py-8 p-2 border-t-2 border-gray-400'>
        <div className='max-w-[1240px] mx-auto flex flex-col h-full'>
            <p className='text-xl tracking-widest uppercase text-cyan-200'>Database</p>
            <h2 className='py-4'>My TODO List</h2>
  
            <TodoListInput/>
            <ToDoListItems/>
        </div>
        <div>
            
        </div>
    </section>
  )
}

export default TodoList