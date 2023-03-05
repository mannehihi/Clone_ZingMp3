import { createSlice } from "@reduxjs/toolkit";

//hàm createSlice tạo ra 1 object có sẳn action và reducer
export const todoSlice = createSlice({
  name: "todo", //đặt tên cho object\

  //giá trị khởi tạo
  initialState: {
    allTodo: [],
  },

  //các hàm reducers
  reducers: {
    getTodo: (state, action) => {
      action.payload.map((e) => {
        return state.allTodo.push(e);
      });
    },
    addTodo: (state, action) => {
      state.allTodo.push(action.payload);
    },
  },
});

//export các hàm( các action tương ứng)
export const { addTodo, allTodo, getTodo } = todoSlice.actions;

// export reducer
export default todoSlice.reducer;
