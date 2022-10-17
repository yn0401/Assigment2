export const ADD_TODO = "ADD_TODO";
export const DELETE_ALL_TODOS = "DELETE_ALL_TODOS";

function createId() {
    let temp = Date.now().toString()
    return Number(temp / 1000);
}

export const addTodo = task => ({
    type: ADD_TODO,
    payload: {
        id: createId(),
        task
    }
});

export const deleteAllTodos = task => ({
    type: DELETE_ALL_TODOS,
});