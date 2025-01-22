import { View, Text, Image } from "react-native";

const EventCard = ({ image, name, date, location, time }) => {
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
  const formatTime = (timeString) => {
    try {
      const time = new Date(timeString);
      return new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(time);
    } catch (error) {
      console.error("Invalid time format:", timeString);
      return timeString;
    }
  };
  return (
    <View className="bg-white rounded-xl shadow-lg border border-gray-200 m-2 overflow-hidden mr-2 mb-2">
      <Image
        source={require("../assets/events/event2.jpg")}
        style={{ width: "100%", height: 180 }}
        className="object-cover"
      />

      <View className="p-4 space-y-3">
        <Text className="text-xl font-bold text-primaryPurple truncate">
          {name}
        </Text>

        <View className="flex-row justify-between items-center p-2">
          <Text className="text-sm text-gray-600">📅 {formatDate(date)}</Text>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
