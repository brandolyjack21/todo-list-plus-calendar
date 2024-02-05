import { configureStore } from '@reduxjs/toolkit'
import updateTasks from '../features/date/updateTasks'
import deleteTask from '../features/date/deleteTask'
import colorThemeStatus from '../features/date/colorThemeStatus'

export default configureStore({
  reducer: {
    updateTasks,
    deleteTask,
    colorThemeStatus
  }
})