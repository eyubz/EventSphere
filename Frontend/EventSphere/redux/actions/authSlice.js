import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import SecureStorage from "react-native-secure-storage";
const API_URL = "http://localhost:5000/api" || process.env.API_URL;

export const SignUp = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, data);
      return response.data;
    } catch {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const VerifyEmail = createAsyncThunk(
  "auth/verify",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/verify`, data);
      return response.data;
    } catch {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const LoginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, data);
      return response.data;
    } catch {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  success: false,
  error: null,
  loading: false,
  email: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetInitialState: (state) => {
      state.success = false;
      state.error = null;
      state.loading = false;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    storeToken: async (state) => {
      await SecureStorage.setItem("accessToken", state.accessToken);
      await SecureStorage.setItem("refreshToken", state.refreshToken);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SignUp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(SignUp.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(SignUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
    builder.addCase(VerifyEmail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(VerifyEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(VerifyEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
    builder.addCase(LoginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
  },
});

export default authSlice.reducer;
export const { resetInitialState, setEmail, storeToken } = authSlice.actions;
