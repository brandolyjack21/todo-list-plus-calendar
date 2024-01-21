import { createSlice } from "@reduxjs/toolkit";

const updateTask = createSlice({
    name: 'updateTasks',
    initialState:{
        value:false
    },
    reducers:{
        loadNewTask: ( state ) => {
          state.value = !state.value
        }
    }
})

export const { loadNewTask } = updateTask.actions

export default updateTask.reducer