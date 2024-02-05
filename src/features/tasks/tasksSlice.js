import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload)
        },
        toogleHideDone: state => {
            state.hideDone = !state.hideDone
        }
    },
});

export const { addTask, toogleHideDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;