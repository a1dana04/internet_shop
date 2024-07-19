import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  details: {},
  search: [],
  cate: [],
};
export const productsSlice = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    addToProduct(state, action) {
      state.product = action.payload;
    },
    productDet(state, action) {
      state.details = state.product.find((el) => el.id === action.payload);
    },
    searchProduct(state, action) {
      state.search = state.product.filter((el) => el.title === action.payload);
    },
    categoryProduct(state, action) {
     let filterG = state.product.filter((el)=>el.category === action.payload)
      state.cate = filterG
    },
  },
});

export const { addToProduct, productDet, searchProduct,categoryProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
