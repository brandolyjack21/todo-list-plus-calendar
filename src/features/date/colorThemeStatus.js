import { createSlice } from "@reduxjs/toolkit";

const colorThemeStatus = createSlice({
    name: 'colorThemeStatus',
    initialState:{
        value:{
            colorName: "blue",
            style: "bg-blue-600",
            border: "border-blue-600",
            text: "text-blue-600",
            text_100: "bg-blue-100",
            shadow: "shadow-blue-500/50"
          }
    },
    reducers:{
        newColor: ( state, action) => {
          state.value = action.payload
        }
    }
})

export const { newColor } = colorThemeStatus.actions

export default colorThemeStatus.reducer