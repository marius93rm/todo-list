
const stile = {
    listStyle: 'none',
}


export default function Todo({ todo, toggleTodo, removeTodo }) {

    return (
        <li style={stile}>
            <p>{todo.title} - {todo.completed ? 'completato':'non completato'} - {todo.id}</p>
            <button onClick={() => toggleTodo(todo.id)}>Complete</button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <hr/>
        </li>
    )
}
