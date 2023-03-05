import { createSlice } from "@reduxjs/toolkit";

//hàm createSlice tạo ra 1 object có sẳn action và reducer
export const bannerSlice = createSlice({
  name: "banner", //đặt tên cho object\

  //giá trị khởi tạo
  initialState: {
    banner: [],
  },

  //các hàm reducers
  reducers: {
    getBanner: (state,action) => {
        state.banner = action.payload?.find(item => item.sectionType === 'banner')?.items
    },
  },
});

//export các hàm( các action tương ứng)
export const { getBanner } = bannerSlice.actions;

// export reducer
export default bannerSlice.reducer;
