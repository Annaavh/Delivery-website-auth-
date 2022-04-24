import {createStore,applyMiddleware,compose} from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk"

const initialStore = {
    cartReducer: {
      cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [], 
    },
  };
export const store = createStore(rootReducer,initialStore,compose(applyMiddleware(thunk)));

// import {configureStore} from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer"

// const preloadedState = {
//   cartReducer: {
//           cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [], 
//         }
// }
// export const store = configureStore({
//   reducer:{
//     cartItems:rootReducer
//   },
//   preloadedState
// })