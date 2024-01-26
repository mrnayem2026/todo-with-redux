import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const withOutRemoveTask = state.todos.filter((todo) => todo.id !== id);
      state.todos = withOutRemoveTask;
    },
    toggleState: (state, action) => {
      const task = state.todos.find((todo) => todo.id === action.payload)

      task!.isCompleted = !task?.isCompleted
    }
  },
});

export const { addTodo, removeTodo,toggleState } = todosSlice.actions;

export default todosSlice.reducer;
