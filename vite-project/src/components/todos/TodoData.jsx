const TodoData = (props) => {
    const { todoList, deleteTodo } = props;
    return (
        <div className="mt-4 d-flex flex-column gap-2">
            {todoList.map((item, index) => {
                return (
                    <div className="p-3 text-start d-flex flex-row justify-content-between align-items-center border rounded bg-light" key={item.id}>
                        <div className="fw-medium text-secondary">
                            {index + 1}. {item.name}
                        </div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteTodo(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData