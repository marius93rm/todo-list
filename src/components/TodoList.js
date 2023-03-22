
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo }){
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}