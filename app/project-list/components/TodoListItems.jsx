import { PrismaClient } from '@prisma/client';
import React from 'react'

const prisma = new PrismaClient()

async function getTask() {
    const todos = await prisma.todo.findMany({
        where: {
            published: true,
        }
    });

    return todos;
}

async function ToDoListItems() {
    const todos = await getTask();
    console.log(todos)
    const listTodo = todos.map((todo) => {
        const formattedDate = new Date(todo.createdAt).toLocaleDateString(); // Format the date
        return (
        <li key={todo.id} className='flex flex-col shadow-sm shadow-gray-400 rounded-xl' >
            <div className='p-4 '>
                <h3>{ todo.title }</h3>
                <p>{ todo.description }</p>
                <p>{ formattedDate }</p>
            </div>
        </li>
        )
    })
  return (
    <ul>{listTodo}</ul>
);
}
export default ToDoListItems;