import { configureStore } from "@reduxjs/toolkit";
import todoSlices from "./todoSlices";


const todoStore = configureStore({
    reducer: {
        todo: todoSlices
    }
});

export type RootState = ReturnType<typeof todoStore.getState>;
export type AppDispatch = typeof todoStore.dispatch;
export default todoStore;