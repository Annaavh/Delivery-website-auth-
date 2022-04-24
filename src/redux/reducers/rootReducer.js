import { combineReducers } from "redux";
import authReducer from "./authReducer";
import {cartReducer, productReducer} from "./cartReducer";


const rootReducer = combineReducers({
    cartReducer:cartReducer,
    productReducer:productReducer,
    auth:authReducer
})

export default rootReducer;