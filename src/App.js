import React from "react";
import Login from "./components/Login"
import Register from "./components/Register"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom"
import Home from "./components/Home"
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
      
       <Router>
       <Navbar />
         <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/" element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
           <Route path="/cart" element={<ProtectedRoutes><CartPage/></ProtectedRoutes>} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
