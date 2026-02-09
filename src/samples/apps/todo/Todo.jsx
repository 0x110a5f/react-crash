import { useState } from "react";
import { todo_items } from "../../../fixtures/todo_items";
import TodoItem from "./TodoItem";

function Todo() {
    const [todos, setTodos] = useState(todo_items);

    function markAsDone(id) {
        console.log(todos);
        const confirmed = confirm("Mark as done?");
        if (!confirmed) return;

        const idx = todos.findIndex(todo => todo.id === id);
        const updated = { ...todos[idx], isDone: true }
        todos[idx] = updated;

        setTodos([...todos]);
        console.log(todos);
    }

    function addTodo(description) {
        const newTodo = {
            description: description,
            isDone: false,
        }
        setTodos([...todos, newTodo]);
    }


    function removeTodo(id) {
        const confirmed = confirm("Delete this todo item?");
        if (!confirmed) return;
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>Todo App</h1>
            {
                todos
                    .map(todo => <TodoItem
                        key={todo.description}
                        description={todo.description}
                        isDone={todo.isDone}
                        onDelete={() => removeTodo(todo.id)}
                        onMarkAsDone={() => markAsDone(todo.id)}
                    >
                    </TodoItem>)
            }
        </>
    );
}

export default Todo;