import { createSlice } from '@reduxjs/toolkit';

export const userStateSlice = createSlice({
  name: 'user',
  initialState: {
    _user: {
      _isAuth: false,
    },
  },
  reducers: {
    changeStatus: (state, action) => {
      state._user._isAuth = action.payload;
    },
    setData: (state, action) => {
      state._user._data = action.payload;
    },
  },
});

export const { changeStatus, setData } = userStateSlice.actions;

export default userStateSlice.reducer;
