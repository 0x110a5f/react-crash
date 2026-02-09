function TodoItem({ description, isDone, onMarkAsDone, onDelete }) {
    return (
        <div className="todo-item">
            <p>{description} {isDone && '✅'}</p>
            <div>
                {!isDone && <button onClick={onMarkAsDone} className="btn-done" type="button">Mark as done</button>}
                <button onClick={onDelete} className="btn-del" type="button">Delete</button>
            </div>
        </div>
    )
}


export default TodoItem;