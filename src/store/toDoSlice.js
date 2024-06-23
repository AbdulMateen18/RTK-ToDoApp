import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    delete: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    }
  }
});

export const { add, delete: deleteTodo } = toDoSlice.actions;

export default toDoSlice.reducer;