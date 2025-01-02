import React, { useState, useContext, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import UploadCard from "./uploadCard";
import { EventContext } from "../../context/eventContext";

const UploadedEvents = () => {
  const { eventState, fetchEvents } = useContext(EventContext);
  const { events } = eventState;
  const allEvents = [
    {
      id: "1",
      name: "Tech Conference 2024",
      date: "2024-12-31",
      image: require("../../assets/events/event1.jpg"),
      rsvpCount: 100,
    },
    {
      id: "2",
      name: "Music Festival",
      date: "2024-11-15",
      image: require("../../assets/events/event2.jpg"),
      rsvpCount: 200,
    },
    {
      id: "3",
      name: "Art Exhibition",
      date: "2024-10-10",
      image: require("../../assets/events/event2.jpg"),
      rsvpCount: 50,
    },
    {
      id: "4",
      name: "Startup Meetup",
      date: "2024-09-01",
      image: require("../../assets/events/event1.jpg"),
      rsvpCount: 75,
    },
    {
      id: "5",
      name: "Charity Gala",
      date: "2024-08-15",
      image: require("../../assets/events/event2.jpg"),
      rsvpCount: 120,
    },
  ];

  const [visibleEvents, setVisibleEvents] = useState(allEvents.slice(0, 2));

  const handleShowMore = () => {
    const currentLength = visibleEvents.length;
    const newLength = currentLength + 2;
    const nextEvents = allEvents.slice(0, newLength);
    setVisibleEvents(nextEvents);
  };

  // useEffect(() => {
  //   fetchEvents();
  // }, []);

  return (
    <ScrollView>
      <View className="min-h-screen bg-gray-100 p-8">
        <Text className="text-3xl font-bold mb-6 text-primaryPurple text-center">
          Your Events
        </Text>

        {visibleEvents.length === 0 ? (
          <View className="text-gray-500 text-lg text-center">
            No events uploaded yet.
          </View>
        ) : (
          <View className="flex flex-wrap justify-center gap-6">
            {visibleEvents.map((event) => (
              <UploadCard key={event.id} {...event} />
            ))}
          </View>
        )}

        {visibleEvents.length < allEvents.length && (
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
