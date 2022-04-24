import React, { useState } from "react";
import axios from "../api/axios"
import { ResetTv, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  TextField,
  FormHelperText,
  Box,
  InputLabel,
  Container,
  OutlinedInput,
  Typography,
  InputAdornment,
  Checkbox,
  Button,
  Link,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../redux/actions/authActions";

function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(signIn({email:data.email,password:data.password}))
    // console.log(data);
    // try{
    //   const response = await axios.post('/login', data);
    //   console.log(response.data,"response.data")
    //   localStorage.setItem("token",response.data.token)
    //   return response.data; 
    // }catch(err){
    //   console.log(err.data,"err")
    // }
    
    //  reset()
    // const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   credentials: "include",
    //   body: JSON.stringify({ ...data }),
    // });

    // const content = await response.json();
    // localStorage.setItem("login", JSON.stringify(content));
    // navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Typography mt={5} mb={3} align="center" variant="h4">
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={3}>
          <TextField
            helperText={errors?.email ? errors?.email.message : null}
            error={!!errors?.email}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Box>

        <TextField
          helperText={errors?.password ? errors?.password.message : null}
          error={!!errors?.password}
          {...register("password", {
            required: "This field is required",
            // minLength: { value: 8, message: "Minimum required length is 8" },
            // pattern: {
            //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            //   message:
            //     "Should contain at least one digit,one lower case,one upper case",
            // },
          })}
          id="outlined-basic-password"
          label="Password"
          variant="outlined"
          fullWidth
        />

        <Box mb={5} mt={3}>
          <FormControlLabel
            control={
              <Checkbox
                name="checkbox"
                {...register("checkbox", {
                  required: "Please agree our terms and condtions",
                })}
              />
            }
            label="I accept Terms & Conditions, Privacy policy"
          />
          <FormHelperText style={{ color: "#d32f2f" }}>
            {errors.checkbox?.message}
          </FormHelperText>
        </Box>

        <Link href="#" color="inherit" underline="none">
          {"Forgot password ?"}
        </Link>

        <Box mb={5} mt={3}>
          <Link href="/register" color="inherit" underline="none">
            {"Not registered yet ?"}
          </Link>
        </Box>

        <Box mb={3} mt={3}>
          <Button type="submit" fullWidth variant="contained" size="medium">
            Login
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default Login;
