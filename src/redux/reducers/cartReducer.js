const initialState = {
  cartItems: [],
  products: [],
  filteredProducts: [],
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    }
    case "DELETE_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      };
    }
    default:
      return state;
  }
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: payload, filteredProducts: payload };
    case "FILTER_PRODUCTS":
      return { ...state, filteredProducts: payload };
    default:
      return state;
  }
};

// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchAsyncProducts = createAsyncThunk(
//   "products/fetchAsyncProducts",
//   async () => {
//     const response = await axios.get("https://fakestoreapi.com/products")

//     return response.data;
//   }
// );

// const initialState = {
//   cartItems: [],
//   products: [],
//   filteredProducts: [],
// };

// const productSlice = createSlice({
//   name:"cartItems",
//   initialState,
//   reducers:{
//     addToCart:(state,{payload}) =>{
//       return {
//         ...state,
//         cartItems: [...state.cartItems, payload],
//       }
//     },
//     deleteFromCart:(state,{payload})=>{
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== payload.id),
//       }
//     },
//     filterProducts:(state,{payload}) =>{
//       return { ...state, filteredProducts: payload};
//     }
//   },
//   extraReducers:{
//     [fetchAsyncProducts.fulfilled]:(state,{payload})=>{
//       console.log("Fulfilled!");
//       return {...state,cartItems:payload}
//     }
//   }
// })

// export const {addToCart,deleteFromCart,filterProducts} = productSlice.actions;
// export default productSlice.reducer; //rootReducer
