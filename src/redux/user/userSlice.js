// Slice - Used to build and define initial state 
// and functions(reducer functions) to update state

import { createSlice } from "@reduxjs/toolkit"

// 1. Define Initial State
// 2. Define Reducer Functions | Create a slice

const initialState = {
  currentUser: {},
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action
      state.currentUser = payload
    }
  }
})

// These are all build and given by createSlice function
// get reducer and rename it to userReducer
const { reducer: userReducer, actions } = userSlice

export const { setUser } =  actions

export default userReducer