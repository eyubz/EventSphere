import { useState, useContext, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { EventContext } from "../../context/eventContext";

const RsvpEvents = () => {
  const { eventState, getRsvp } = useContext(EventContext);

  const [rsvpList, setRsvpList] = useState([]);

  useEffect(() => {
    getRsvp();
  }, []);

  useEffect(() => {
    setRsvpList(eventState.rsvp);
  }, [eventState]);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(date);
    } catch (error) {
      console.error("Invalid date format:", dateString);
      return dateString;
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-3xl font-bold text-center text-primaryPurple mb-8">
        RSVP Events
      </Text>
      <View className="space-y-6">
        {rsvpList &&
          rsvpList.map((item) => (
            <View
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                source={require("../../assets/events/event2.jpg")}
                className="w-full h-48 rounded-lg mb-4"
              />
              <Text className="text-xl font-semibold text-primaryPurple mb-2">
                {item.name}
              </Text>
              <Text className="text-sm text-gray-600">
                📅 Date: {formatDate(item.date)}
              </Text>
              <Text className="text-sm text-gray-500 mt-2">
                📍 Location: {item.location}
              </Text>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default RsvpEvents;
