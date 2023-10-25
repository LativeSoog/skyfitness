import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coursesId: [],
  workoutId: [],
}

export const coursesSlices = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.coursesId = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }))
    },
    setWorkout: (state, action) => {
      state.workoutId = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }))
    },
  },
})

export const { setCourses, setWorkout } = coursesSlices.actions
export default coursesSlices.reducer
