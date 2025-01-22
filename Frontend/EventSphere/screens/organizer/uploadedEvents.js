import React, { useState, useContext, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import UploadCard from "./uploadCard";
import { EventContext } from "../../context/eventContext";

const UploadedEvents = () => {
  const { eventState, fetchEvents } = useContext(EventContext);
  const { events } = eventState;

  const [visibleEvents, setVisibleEvents] = useState([]);
  const img = require("../../assets/events/event2.jpg");

  const handleShowMore = () => {
    const currentLength = visibleEvents.length;
    const newLength = currentLength + 2;
    const nextEvents = events.slice(0, newLength);
    setVisibleEvents(nextEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    setVisibleEvents(events.slice(0, 2));
  }, [events]);

  return (
    <ScrollView>
      <View className="min-h-screen bg-gray-100 p-8">
        <Text className="text-3xl font-bold mb-6 text-primaryPurple text-center">
          Your Events
        </Text>

        {visibleEvents.length === 0 ? (
          <View className="text-gray-500 text-lg text-center">
            <Text>No events uploaded yet.</Text>
          </View>
        ) : (
          <View className="flex flex-wrap justify-center gap-6">
            {visibleEvents.map((event) => (
              <UploadCard key={event._id} {...event} img={img} />
            ))}
          </View>
        )}

        {visibleEvents.length < events.length && (
          <TouchableOpacity
            onPress={handleShowMore}
            className="bg-primaryPurple mt-6 mx-auto py-3 px-6 rounded-lg shadow-md"
          >
            <Text className="text-white font-medium text-center">
              Show More
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default UploadedEvents;
