import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://192.168.43.168:5000/api/v1";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    email: "",
    verificationSuccess: false,
    signLoading: false,
    loginLoading: false,
    verifyLoading: false,
    error: null,
    loginSuccess: false,
    accessToken: null,
    refreshToken: null,
    success: false,
    isOrganizer: false,
    userData: null,
  });

  const signUp = async (data) => {
    setAuthState({ ...authState, signLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAuthState({
        ...authState,
        signLoading: false,
        success: true,
        email: data.email,
      });
    } catch (error) {
      setAuthState({
        ...authState,
        signLoading: false,
        error: error.response.data.message,
      });
    }
  };

  const loginUser = async (userData) => {
    setAuthState({ ...authState, loginLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/auth/login`, userData);
      const { accessToken, refreshToken } = response.data;
      setAuthState({
        ...authState,
        loginLoading: false,
        loginSuccess: true,
        accessToken,
        refreshToken,
        isOrganizer: response.data.isOrganizer,
      });
      // await SecureStorage.setItem("accessToken", accessToken);
      // await SecureStorage.setItem("refreshToken", refreshToken);
    } catch (error) {
      setAuthState({
        ...authState,
        loginLoading: false,
        error: error.response.data.message,
      });
    }
  };

  const verifyEmail = async (verificationData) => {
    setAuthState({ ...authState, verifyLoading: true, error: null });
    try {
      const response = await axios.post(
        `${API_URL}/auth/verify`,
        verificationData
      );
      setAuthState({
        ...authState,
        verifyLoading: false,
        verificationSuccess: true,
      });
    } catch (error) {
      setAuthState({
        ...authState,
        verifyLoading: false,
        error: error.response.data.message,
      });
    }
  };

  const getProfile = async () => {
    setAuthState({ ...authState, loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${authState.accessToken}`,
        },
      });
      setAuthState({
        ...authState,
        loading: false,
        userData: response.data.user,
      });
    } catch (error) {
      setAuthState({
        ...authState,
        loading: false,
        error: error.response.data.message,
      });
    }
  };

  const setProfile = async (data) => {
    setAuthState({ ...authState, loading: true, error: null });
    try {
      console.log("The data", data);
      const response = await axios.post(`${API_URL}/user/profile`, data, {
        headers: {
          Authorization: `Bearer ${authState.accessToken}`,
        },
      });
      setAuthState({
        ...authState,
        loading: false,
        userData: response.data,
      });
    } catch (error) {
      setAuthState({
        ...authState,
        loading: false,
        error: error.response.data.message,
      });
    }
  };

  const logout = async () => {
    setAuthState({
      email: "",
      verificationSuccess: false,
      loading: false,
      error: null,
      loginSuccess: false,
      accessToken: null,
      refreshToken: null,
      success: false,
    });
  };

  const resetInitialState = () => {
    setAuthState({
      email: "",
      verificationSuccess: false,
      loading: false,
      error: null,
      loginSuccess: false,
      accessToken: null,
      refreshToken: null,
      success: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signUp,
        loginUser,
        verifyEmail,
        resetInitialState,
        getProfile,
        setProfile,
        logout,
        setEmail: (email) => setAuthState({ ...authState, email }),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
