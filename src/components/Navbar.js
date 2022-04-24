import React, { useEffect, useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { fetchProducts, fetchSearchProducts } from "../redux/actions/productActions";
import { useNavigate } from "react-router-dom";
import { signOut } from "../redux/actions/authActions";

function Navbar() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [searchinp, setSearchinp] = useState("");
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // useEffect(() => {
  //   setName(JSON.parse(localStorage.getItem("register")).name);
  // }, []);
  const handleSearch = (e) => {
    setSearchinp(e.target.value);
    if (e.target.value.length) {
      dispatch({
        type: "FILTER_PRODUCTS",
        payload: products.filter((item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
        ),
      });
    } else {
      dispatch({ type: "FILTER_PRODUCTS", payload: products });
    }
  };
  // const handleLogout = () =>{
  //   console.log("4")
  //   if(!name){
  //     navigate("/login")
  //   }else{
  //     localStorage.removeItem("register,login")
  //   }
  // }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            <Link href="/" color="inherit" underline="none">
              OnlineShop
            </Link>
          </Typography>
          <div>
            <input
              style={{
                outline: "none",
                border: "none",
                borderRadius: "10px",
                padding: "3px 5px",
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
              value={searchinp}
              onChange={(e) => handleSearch(e)}
              placeholder="Search…"
            />
          </div>
          <Link
            style={{ marginLeft: "20px" }}
            href="/"
            color="inherit"
            underline="none"
          >
            {name}
          </Link>
          <Link
            style={{ marginLeft: "20px" }}
            href="/login"
            color="inherit"
            underline="none"
          >
            {name ? "Logout" : "Login"}
          </Link>
          <Link
            style={{ marginLeft: "20px" }}
            href="/"
            color="inherit"
            underline="none"
            onClick = {()=>dispatch(signOut())}
          >
            Logout
          </Link>
          <Link
            style={{ marginLeft: "20px" }}
            href="/cart"
            color="inherit"
            underline="none"
          >
            <FaCartPlus />
            {cartItems.length ? cartItems.length : ""}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
