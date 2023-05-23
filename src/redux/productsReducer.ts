import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface productsInitialState {
  products: object[];
}
const initialState: productsInitialState = {
  products: []
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<object[]>) => {
      state.products = [...action.payload];
    }
  }
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
