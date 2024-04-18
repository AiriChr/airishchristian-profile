'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'     


const TodoListInput = () => {
    const [ inputTitle, setInputTitle ] = useState('')
    const [ inputDescription, setInputDescription ] = useState('')
    const router = useRouter();

    const submitData = async (e) => {
        e.preventDefault();
        try {
            const body = { inputTitle, inputDescription }
            await fetch('api/create-todo', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),
            })
      
          }  
          catch (error) {
            console.error(error)
          }
          router.refresh()

          setInputTitle('')
          setInputDescription('')
    }

  return (
    <div className='flex m-4 shadow-sm shadow-gray-400 justify-center'>
        <form onSubmit={submitData}>
            <ul className='flex md:flex-col-2 gap-2'>
                <li className='p-4'>
                    <input onChange={(e) => setInputTitle(e.target.value)} value={inputTitle}
                    className='rounded-lg p-2' type="text" id='title' placeholder='Title of Task'/>
                </li>
                <li className='p-4'>
                    <input onChange={(e) => setInputDescription(e.target.value)} value={inputDescription}
                    className='rounded-lg p-2' type='text' id='lastName' placeholder='Description'/>
                </li>
                <li className='p-4'>
                    <input disabled={!inputTitle || !inputDescription} 
                    className='rounded-lg p-2 shadow-sm shadow-gray-400'type="submit" value="Create"/>
                </li>
                
            </ul>
        </form>
    </div>
  )
}

export default TodoListInput