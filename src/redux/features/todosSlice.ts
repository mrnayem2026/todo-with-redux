import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string,
  title: string,
  description: string,
  priority?: string,
  isCompleted?: boolean
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
      state.todos.push({ ...action.payload, isCompleted: false, priority: "Low" });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const withOutRemoveTask = state.todos.filter((todo) => todo.id !== id);
      state.todos = withOutRemoveTask;
    },
    toggleState: (state, action) => {
      const task = state.todos.find((todo) => todo.id === action.payload)
      task!.isCompleted = !task?.isCompleted
    },
    setTaskPriority: (state, action) => {
        const task = state.todos.find((todo)=> todo.id === action.payload.id)
        task!.priority = action.payload.priority
    }
  },
});

export const { addTodo, removeTodo, toggleState,setTaskPriority } = todosSlice.actions;

export default todosSlice.reducer;
