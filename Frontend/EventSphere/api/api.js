import axios from "axios";
import { useContext, useEffect } from "react";
import SecureStorage from "react-native-secure-storage";
import { AuthContext } from "../context/authContext";

const API_URL = "http://192.168.43.168:5000/api/v1";

const useApi = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const { accessToken, refreshToken } = authState;

  const api = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  api.interceptors.request.use(
    async (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        if (refreshToken) {
          try {
            const response = await axios.post(`${API_URL}/auth/refresh`, {
              refreshToken,
            });
            await SecureStorage.setItem(
              "accessToken",
              response.data.accessToken
            );
            setAuthState((prevState) => ({
              ...prevState,
              accessToken: response.data.accessToken,
            }));
            error.config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            return axios(error.config);
          } catch (error) {
            return Promise.reject(error);
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export default useApi;
