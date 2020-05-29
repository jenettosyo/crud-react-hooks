import { ADD_TODO } from "../actions/index";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const event = { todo: action.todo };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    default:
      return state;
  }
};

export default todos;
