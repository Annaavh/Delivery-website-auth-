import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

function Home() {
  const { products, filteredProducts } = useSelector(
    (state) => state.productReducer
  );
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    // getData();
    dispatch(fetchProducts());
  }, []);
  // useEffect(()=>{
  //   (
  //     async () =>{
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users",{
  //     headers:{"Content-Type":"application/json"},
  //     credentials: "include",
  //   })
  //   const content = await response.json()
  //   console.log(content,"from home content")
  //   setName(content.name)
  //     }
  //   )()
  // })
  // console.log(name,"name")
  // async function getData() {
  //   const result = await fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setProducts(json));
  // }
  useEffect(() => {
    //pahum enk local storage um vor refresh anelis chpoxi
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAdd = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div
      className="products"
      style={{ display: "flex", flexWrap: "wrap", marginTop: "70px" }}
    >
      {filteredProducts.map((product) => {
        return (
          <div key={product.id} className="col-md-4 ">
            <div className="m-2 p-1 product position-relative ">
              <div className="product-content">
                {/* <h3>{product.title}</h3> */}
                <div>
                  <img
                    width="200"
                    className="product-img"
                    src={product.image}
                  />
                </div>
              </div>

              <div className="product-actions">
                <h3 style={{ width: "382px" }}>{product.title}</h3>
                <h3>{product.price}$</h3>
                <button onClick={() => handleAdd(product)} className="ms-2">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
