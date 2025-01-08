import { View, Text, Image } from "react-native";

const EventCard = ({ image, name, date, location, time }) => {
  return (
    <View className="bg-white rounded-xl shadow-lg border border-gray-200 m-2 overflow-hidden mr-2 mb-2">
      <Image
        source={image}
        style={{ width: "100%", height: 180 }}
        className="object-cover"
      />

      <View className="p-4 space-y-3">
        <Text className="text-xl font-bold text-primaryPurple truncate">
          {name}
        </Text>

        <View className="flex-row justify-between items-center">
          <Text className="text-sm text-gray-600">📅 {date}</Text>
          <Text className="text-sm text-gray-600 ml-2">⏰ {time}</Text>
        </View>

        <View className="flex-row items-start">
          <Text className="text-sm text-gray-700 ml-1 flex-1">
            📍 {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
