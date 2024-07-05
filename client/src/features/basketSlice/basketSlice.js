import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    _basket: {},
    _basketCount: null,
  },
  reducers: {
    setBasket: (state, action) => {
      state._basket[action.payload[0].toString()]
        ? state._basket[action.payload[0].toString()].quantity++
        : (state._basket[action.payload[0].toString()] = { price: action.payload[1], id: action.payload[2], quantity: 1 });
      state._basketCount++;
    },
    decrementBasket: (state, action) => {
      state._basket[action.payload[0].toString()].quantity--;
      state._basketCount--;
      state._basket[action.payload[0].toString()].quantity === 0 ? delete state._basket[action.payload[0].toString()] : null;
      state._basketCount === 0 ? (state._basketCount = null) : null;
    },
    clearBasket: (state, action) => {
      Object.keys(state._basket).forEach((key) => delete state._basket[key]);
      state._basketCount = null;
    },
  },
});

export const { setBasket, decrementBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
