import React, { useRef } from 'react'

export default function TodoForm({addTodo, clearTodos}) {
    
    const aggiungi = useRef();

    return (
        <div>
            <input type="text" ref={aggiungi} />
            <button onClick={()=>{addTodo(aggiungi.current.value)}}>Add Todo</button>
            <button onClick={()=>{clearTodos()}}>Clear Completed</button>
        </div>
    )
}