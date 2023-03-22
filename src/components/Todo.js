
const stile = {
    listStyle: 'none',
}


export default function Todo({ todo, toggleTodo }) {

    return (
        <li style={stile}>
            <p>{todo.title}</p>
            <p>{todo.completed ? 'completato':'non completato'}</p>
            <button onClick={() => toggleTodo(todo.id)}>Complete</button>
            <hr/>
        </li>
    )
}
