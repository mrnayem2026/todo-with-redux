import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
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
    addTodo: (state, action:PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
