import { createSlice } from "@reduxjs/toolkit";

const deleteTask = createSlice({
    name: 'deleteTask',
    initialState:{
        value:false
    },
    reducers:{
        deleteNewTask: ( state ) => {
          state.value = !state.value
        }
    }
})

export const { deleteNewTask } = deleteTask.actions

export default deleteTask.reducer