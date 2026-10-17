import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { HomePageState } from "../../../lib/types/screen";
import type { Product } from "../../../lib/types/product";
import type { Member } from "../../../lib/types/member";

const initialState: HomePageState = {
  popularBooks: [],
  newBooks: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularBooks: (state, action: PayloadAction<Product[]>) => {
      state.popularBooks = action.payload;
    },

    setNewBooks: (state, action: PayloadAction<Product[]>) => {
      state.newBooks = action.payload;
    },

    setTopUsers: (state, action: PayloadAction<Member[]>) => {
      state.topUsers = action.payload;
    },
  },
});

export const { setPopularBooks, setNewBooks, setTopUsers } = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
