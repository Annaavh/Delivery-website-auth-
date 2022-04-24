import React, { useState } from "react";
import {
  FormHelperText,
  TextField,
  Box,
  Container,
  Typography,
  Checkbox,
  Button,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/actions/authActions";

function Register() {
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  console.log(state, "state");

  // console.log(data)
  const onSubmit = (data) => {
    const obj = {
      email: data.email,
      password: data.password,
    };
    // e.preventDefault();
    dispatch(signUp(obj));

    // console.log(data)
    // const response = await fetch('https://jsonplaceholder.typicode.com/users',{
    //   method:"POST",
    //   headers:{"Content-Type":"application/json"},
    //   body:JSON.stringify({...data})
    // })
    // const content = await response.json();
    // localStorage.setItem("register",JSON.stringify(content))
    // console.log(content,"content")
    // console.log(data)
    // reset()
    navigate("/login")
  };
  const password = watch("password");

  return (
    <Container maxWidth="sm">
      <Typography mt={5} align="center" variant="h4">
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={3} mb={3}>
          <TextField
            helperText={errors?.name ? errors?.name.message : null}
            error={!!errors?.name}
            {...register("name", { required: "This field is required" })}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={3}>
          <TextField
            helperText={errors?.surname ? errors?.surname.message : null}
            error={!!errors?.surname}
            {...register("surname", { required: "This field is required" })}
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            fullWidth
          />
        </Box>
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
        <Box mb={3}>
          <TextField
            type="password"
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
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
          />
        </Box>

        <TextField
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          type="password"
          helperText={
            errors?.confirmpassword ? errors?.confirmpassword.message : null
          }
          error={!!errors?.confirmpassword}
          {...register("confirmpassword", {
            required: "Confirm password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
          id="outlined-basic"
          label="Confirm password"
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

        <Box mb={3} mt={3}>
          <Button type="submit" fullWidth variant="contained" size="medium">
            Register
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default Register;
