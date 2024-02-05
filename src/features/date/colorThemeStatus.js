import { createSlice } from "@reduxjs/toolkit";

const colorThemeStatus = createSlice({
    name: 'colorThemeStatus',
    initialState:{
        value:{ colorName:'blue', style:'bg-blue-600' }
    },
    reducers:{
        newColor: ( state, action) => {
          state.value = action.payload
        }
    }
})

export const { newColor } = colorThemeStatus.actions

export default colorThemeStatus.reducer