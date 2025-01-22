import React, { createContext, useState } from "react";
import useApi from "../api/api";

const API_URL = "http://192.168.43.168:5000/api/v1";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const api = useApi();
  const [eventState, setEventState] = useState({
    events: [],
    loading: false,
    error: null,
    success: false,
    message: "",
  });

  const fetchEvents = async () => {
    setEventState({ ...eventState, loading: true, error: null });
    try {
      const response = await api.get(`${API_URL}/events`);
      setEventState({
        ...eventState,
        loading: false,
        events: response.data.events,
        message: response.data.message,
      });
    } catch (error) {
      console.log(error);
      setEventState({
        ...eventState,
        loading: false,
        error: error.response?.data?.message || "An error occurred",
      });
    }
  };

  const uploadEvent = async (eventData) => {
    setEventState({ ...eventState, loading: true, error: null });
    try {
      const response = await api.post(`${API_URL}/events`, eventData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setEventState((prevState) => ({
        ...prevState,
        loading: false,
        success: true,
        message: "Event uploaded successfully",
      }));
    } catch (error) {
      setEventState({
        ...eventState,
        loading: false,
        success: false,
        error: error.response?.data?.message || "An error occurred",
      });
    }
  };

  const updateEvent = async (eventId, eventData) => {
    setEventState({ ...eventState, loading: true, error: null });
    try {
      const response = await api.put(
        `${API_URL}/events/${eventId}`,
        eventData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEventState((prevState) => ({
        ...prevState,
        loading: false,
        success: true,
        events: prevState.events.map((event) =>
          event._id === eventId ? response.data : event
        ),
      }));
    } catch (error) {
      setEventState({
        ...eventState,
        loading: false,
        error: error.response?.data?.message || "An error occurred",
      });
    }
  };

  const deleteEvent = async (eventId) => {
    setEventState({ ...eventState, loading: true, error: null });
    try {
      await api.delete(`${API_URL}/events/${eventId}`);
      setEventState((prevState) => ({
        ...prevState,
        loading: false,
        success: true,
        events: prevState.events.filter((event) => event._id !== eventId),
      }));
    } catch (error) {
      setEventState({
        ...eventState,
        loading: false,
        error: error.response?.data?.message || "An error occurred",
      });
    }
  };

  const resetEventState = () => {
    setEventState({
      events: [],
      loading: false,
      error: null,
      success: false,
    });
  };

  return (
    <EventContext.Provider
      value={{
        eventState,
        fetchEvents,
        uploadEvent,
        updateEvent,
        deleteEvent,
        resetEventState,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
