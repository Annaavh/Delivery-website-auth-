// import axios from "axios";
import axiosUrl from "../../api/axios"

export const signUp = (user) =>{
    return (dispatch) =>{
        axiosUrl.post("/register",user)
        .then(token=>{
            localStorage.setItem("tokenRedux",JSON.stringify(token.data))
            localStorage.setItem("user",JSON.stringify(user))
            dispatch({
                type:"SIGN_UP",
                token: token.data
            })
        })
        .catch(error=>console.log(error.response))
    }
}

export const signIn = (user) =>{
    return (dispatch) =>{
        axiosUrl.post("/login",user)
        .then(token=>{
            localStorage.setItem("tokenRedux",JSON.stringify(token.data))
            localStorage.setItem("user",JSON.stringify(user))
            dispatch({
                type:"SIGN_UP",
                token: token.data
            })
        })
        .catch(error=>console.log(error.response))
    }
}

export const signOut = () => {
    return (dispatch) => {
      
      dispatch({
        type: "SIGN_OUT",
      });
  
    };
  };