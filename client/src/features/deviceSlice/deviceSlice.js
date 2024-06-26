import { createSlice } from '@reduxjs/toolkit';

export const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    _types: [],
    _brands: [],
    _devices: [],
    _selectedTypes: {},
    _selectedBrands: {},
    _page: 1,
    _totalCount: 0,
    _limit: 3,
  },
  reducers: {
    setTypes: (state, action) => {
      state._types = action.payload;
    },
    setPage: (state, action) => {
      state._page = action.payload;
    },
    setTotalCount: (state, action) => {
      state._totalCount = action.payload;
    },
    setLimit: (state, action) => {
      state._limit = action.payload;
    },
    setBrands: (state, action) => {
      state._brands = action.payload;
    },
    setDevices: (state, action) => {
      state._devices = action.payload;
    },
    selectType: (state, action) => {
      setPage(1);
      state._selectedTypes.name = action.payload.name;
      state._selectedTypes.id = action.payload.id;
    },
    selectBrad: (state, action) => {
      setPage(1);
      state._selectedBrands.name = action.payload.name;
      state._selectedBrands.id = action.payload.id;
    },
  },
});

export const { setTypes, setBrands, setDevices, selectType, selectBrad, setPage, setLimit, setTotalCount } = deviceSlice.actions;

export default deviceSlice.reducer;
