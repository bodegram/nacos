import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const duePaymentAsync = createAsyncThunk(
  "payment/duePaymentAsync",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      dispatch(paymentRequest());
      const { data } = await axios.post("/pay-due", credentials);
      if(data.status === 'success'){
        dispatch(paymentSuccess({"status": "200"}))
    }
    else{
      dispatch(paymentFailed())
    }
    } catch (error) {
      dispatch(paymentFailed());
      rejectWithValue("An error occurred");
    }
  }
);

export const verifyPaymentAsync = createAsyncThunk('payment/verifyPaymentAsync', async(credentials, { dispatch, rejectWithValue})=>{
  try {
    dispatch(verificationRequest());
    const { data } = await axios.post("/verify-payment", credentials);
    console.log(data)
    if(data.status === 'success'){
      dispatch(verificationSuccess({"status": "200"}))
  }
  else{
    dispatch(verificationFailed())
  }
  } catch (error) {
    dispatch(verificationFailed());
    rejectWithValue("An error occurred");
  }
})

const initialState = {
  details: {
    level: "",
    matricno: "",
    name: "",
    phoneno: "",
    department: "",
    email: "",
    ref: "",
  },
  loading: false,
  error: false,
  isVerified: false
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    paymentRequest: (state) => {
      state.loading = true;
    },
    paymentSuccess: (state) => {
      state.loading = false;
    },
    paymentFailed: (state) => {
      state.error = true;
    },
    clearLogs: (state) => {
      state.error = false;
      state.loading = false;
      state.details.level = "";
      state.details.matricno = "";
      state.details.name = "";
      state.details.phoneno = "";
      state.details.department = "";
      state.details.email = "";
      state.details.ref = "";
    },
    verificationRequest: (state)=>{
      state.loading = true
    },
    verificationSuccess: (state)=>{
      state.loading = false
      state.isVerified = true
    },
    verificationFailed: (state)=>{
      state.error = true
    }
  },
});

export const { paymentRequest, paymentSuccess, paymentFailed, clearLogs, verificationRequest, verificationSuccess, verificationFailed } =
  paymentSlice.actions;

export default paymentSlice;
