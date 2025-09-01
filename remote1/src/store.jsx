import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    searchTerm: ""
  },
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { setUsers, setSearchTerm } = userSlice.actions;

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export default store;
