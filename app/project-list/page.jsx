import React from 'react'
import Link from 'next/link'
import TodoList from './components/TodoList'


const todo = () => {
  return (
    <div>
        <div className='p-4'>
        <Link className='rounded-lg p-2 shadow-sm shadow-gray-400' href={'/'}>Back</Link>
        </div>
        
        <TodoList/>
    </div>
  )
}

export default todo