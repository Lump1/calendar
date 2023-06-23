import {createSlice} from "@reduxjs/toolkit";

export const dayReducer = createSlice({
  name: 'data',
  initialState: {
    value: 1
  },
  reducers: {
    changeDate: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {changeDate} = dayReducer.actions;

export default dayReducer.reducer;