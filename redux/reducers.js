import { ADD_TODO, DELETE_ALL_TODOS } from "./action";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task } = action.payload
      let newState = {
        ...state,
        todos: [ ...state.todos, { id, task }]
      };
      console.log(newState.todos);
      return newState;
    }
    case DELETE_ALL_TODOS: {
      console.log('delete successfull!!!')
      let newState = {
        ...state,
        todos: []
      };
      return newState;
    }

    default:
      return state;
  }
}

export default todoReducer;