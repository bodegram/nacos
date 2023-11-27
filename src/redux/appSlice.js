import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers:{
    'Content-Type': 'application/json',
  }
})

export const createContactAsync = createAsyncThunk('app/createContactAsync', async (credential, {rejectWithValue, dispatch})=>{
    try{ 
        dispatch(contactRequest())
        const {data} = await axios.post('contact', credential)
        console.log(data.status)
        if(data.status === 200){
            dispatch(contactSuccess({"status": "200"}))
        }
        else{
          dispatch(contactFailed())
        }
       


    }catch(error){
        dispatch(contactFailed())
        return rejectWithValue('An error occurred')
    }
  
})


const initialState = {
  details: {
    name: "",
    email: "",
    message: "",
  },
  loading: false,
  error: false,
  status: '400'
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    contactRequest: (state) => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.status = action.payload.status
      
    },
    contactFailed: (state) => {
      state.error = true;
    },
    clearLogs: (state) => {
      state.error = false;
      state.loading = false;
      state.details.name = "";
      state.details.email = "";
      state.details.message = "";
      state.status = ''
    },
  },
});

export const { contactRequest, contactSuccess, contactFailed, clearLogs } =
  appSlice.actions;

export default appSlice;
