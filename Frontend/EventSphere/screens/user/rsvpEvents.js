import { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

const events = [
  {
    id: "1",
    name: "Concert by The Beach",
    date: "2025-01-10",
    location: "Beachfront Arena",
    image: require("../../assets/events/event1.jpg"),
  },
  {
    id: "2",
    name: "Tech Conference 2025",
    date: "2025-02-15",
    location: "Tech Convention Center",
    image: require("../../assets/events/event2.jpg"),
  },
  {
    id: "3",
    name: "Outdoor Hiking Trip",
    date: "2025-03-20",
    location: "Mountain View Park",
    image: require("../../assets/events/event1.jpg"),
  },
];

const RsvpEvents = () => {
  const [rsvpList, setRsvpList] = useState(events);

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-3xl font-bold text-center text-primaryPurple mb-8">
        RSVP Events
      </Text>
      <View className="space-y-6">
        {rsvpList.map((item) => (
          <View
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              source={item.image}
              className="w-full h-48 rounded-lg mb-4"
            />
            <Text className="text-xl font-semibold text-primaryPurple mb-2">
              {item.name}
            </Text>
            <Text className="text-sm text-gray-600">📅 Date: {item.date}</Text>
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
