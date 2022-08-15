import React, { useContext } from 'react'
import ToDoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import Todo from './todo.js'
import { userContext } from '../context/UserProvider.js'

export default function Profile(){
    const { user: {username}, addTodo } = useContext(UserContext)
    return (
        <div className="profile">
            <h1>Welcome @{username}!</h1>
            <h3>Add a Todo</h3>
            <TodoForm addTodo={addTodo}/>
            <h3>Your Todos</h3>
        </div>
    )
}