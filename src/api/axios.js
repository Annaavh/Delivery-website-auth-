import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";

axios.interceptors.request.use(config =>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}`:"";
    return config;
})

axios.interceptors.response.use(response=>response,(err)=>{
    if(err.response.status === 401){
        localStorage.removeItem("token")
        // navigate("/login")
    }
    return Promise.reject((err))
})

export default axios;