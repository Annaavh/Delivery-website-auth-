import axios from "axios";

export const fetchProducts = () => async (dispatch, getState) => {
  const response = await axios.get("https://fakestoreapi.com/products");

  console.log(response.data, "response");
  dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
};
