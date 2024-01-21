import { configureStore } from '@reduxjs/toolkit'
import updateTasks from '../features/date/updateTasks'

export default configureStore({
  reducer: {
    updateTasks
  }
})