import { createSlice } from "@reduxjs/toolkit";

//hàm createSlice tạo ra 1 object có sẳn action và reducer
export const counterSlice = createSlice({
  name: "counter", //đặt tên cho object\

  //giá trị khởi tạo
  initialState: {
    count: 0,
  },

  //các hàm reducers
  reducers: {
    increment: (state) => {
      state.count += 1;
    }
  },

});

//export các hàm( các action tương ứng)
export const { increment } = counterSlice.actions;

// export reducer
export default counterSlice.reducer;
