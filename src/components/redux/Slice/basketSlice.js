import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "BASKETSLICE",
  initialState,
  reducers: {
    addToBasket(state, action) {
      let findBasket = state.basket.find((el) => el.id === action.payload.id);
      if (!findBasket) {
        state.basket = [...state.basket, { ...action.payload, quantity: 1 }];
      } else {
        console.log("bar");
      }
    },
    deleteBasket(state, action) {
      state.basket = state.basket.filter((el) => el.id !== action.payload.id);
    },
    plusQyan(state, action) {
      state.basket = state.basket.map((el) =>
        el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
      );
    },
    minusQyan(state, action) {
      state.basket = state.basket.map((el) =>
        el.id === action.payload.id
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
    },
    remov(state,action){
        state.basket =[]
        
    }
  },
});

export const { addToBasket, deleteBasket, plusQyan,minusQyan,remov } = basketSlice.actions;
export default basketSlice.reducer;
