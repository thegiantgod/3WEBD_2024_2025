import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TodoInterface } from "../types/TodoInterface";

export interface TodoState {
  value: TodoInterface[];
}

const initialState: TodoState = {
  value: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoInterface>) => {
            state.value.push(action.payload);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.value[action.payload];
            if (todo) {
                todo.done = !todo.done;
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
        removeTodoByTitle: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(element => element.title !== action.payload)
        },
        clearTodos: (state) => {
            state.value = [];
        },
    }
})

export const { addTodo, toggleTodo, removeTodo, removeTodoByTitle, clearTodos } = todoSlice.actions;
export default todoSlice.reducer;