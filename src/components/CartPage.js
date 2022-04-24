import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function CartPage() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const deleteFromCart = (item) => {
    dispatch({ type: "DELETE_FROM_CART", payload: item });
  };
  console.log(cartItems) 
  // {cartItems.length?

  useEffect(() => {
    //pahum enk local storage um vor refresh anelis chpoxi
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
 
  return  (
    
    <table className="table mt-2">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {cartItems.map((item) => {
          return (
            <tr>
              <td>
                <img src={item.image} height="80" width="80" />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <FaTrash
                  cursor={"pointer"}
                  onClick={() => deleteFromCart(item)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default CartPage;
