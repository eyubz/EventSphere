import React, { createContext, useState, useEffect } from "react";
import SecureStorage from "react-native-secure-storage";
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
      // await SecureStorage.setItem("accessToken", accessToken);
      // await SecureStorage.setItem("refreshToken", refreshToken);
      setAuthState({
        ...authState,
        loginLoading: false,
        loginSuccess: true,
        accessToken,
        refreshToken,
      });
      console.log(authState);
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
        setEmail: (email) => setAuthState({ ...authState, email }),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
