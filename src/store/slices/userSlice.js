import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: null,
  password: null,
  email: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.login = action.payload.login
      state.password = action.payload.password
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    removeUser(state) {
      state.login = null
      state.password = null
      state.email = null
      state.token = null
      state.id = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
