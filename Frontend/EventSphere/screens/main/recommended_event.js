import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const recommendedEvent = {
  id: "1",
  name: "Tech Conference 2025",
  date: "2025-02-15",
  location: "Tech Convention Center",
  image: require("../../assets/events/event1.jpg"),
};

const RecommendedEvent = ({ navigation }) => {
  return (
    <View className="p-6 bg-primaryPurple rounded-xl">
      <Text className="text-2xl text-center font-extrabold mb-6 text-white">
        Recommended Event 🌟
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("EventDetail", { eventId: recommendedEvent.id })
        }
        activeOpacity={0.85}
        className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <Image
          source={recommendedEvent.image}
          className="w-full h-52 object-cover"
        />

        <View className="p-4">
          <Text className="text-xl font-bold text-gray-800 mb-2">
            {recommendedEvent.name}
          </Text>
          <Text className="text-sm text-gray-600 mb-1">
            📅 <Text className="font-medium">{recommendedEvent.date}</Text>
          </Text>
          <Text className="text-sm text-gray-600">
            📍 <Text className="font-medium">{recommendedEvent.location}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecommendedEvent;
