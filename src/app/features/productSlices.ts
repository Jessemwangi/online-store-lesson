import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const endPoint = "https://fakestoreapi.com/products";

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const initialState = {
  products: [] as Product[],
  carts: [] as Product[],
};

export const fetchProducts = createAsyncThunk("products/products", async () => {
  const { data } = await axios.get<Product[]>(endPoint);
  return data;
});
export const fetchProdpooucts = createAsyncThunk("products/products", async () => {
  const { data } = await axios.get<Product[]>(endPoint);
  return data;
});

export const productSlices = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state,action:PayloadAction<Product>) {
      state.carts = [...state.carts, action.payload]
    }
  },
  extraReducers(builder) {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      }
    );
  },
});
export const { addToCart } = productSlices.actions;
export default productSlices.reducer;
