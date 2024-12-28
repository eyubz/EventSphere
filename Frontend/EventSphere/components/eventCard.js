import { View, Text, Image } from "react-native";

const EventCard = ({ image, name, date, location, time, participant }) => {
  return (
    <View className="rounded-lg shadow-lg bg-white border border-primaryPurple ml-2 mb-2">
      <Image
        source={image}
        className="rounded-lg mb-4"
        style={{ width: "100%", height: 150 }}
      />

      <View className="space-y-2 p-2">
        <Text className="text-lg font-bold text-primaryPurple">{name}</Text>
        <View className="flex-row justify-around">
          <Text className="text-sm text-gray-500">{date}</Text>
          <Text className="text-sm text-gray-700">{time}</Text>
        </View>

        <Text className="text-sm text-gray-700">
          <Text className="font-semibold">Location: </Text>
          {location}
        </Text>

        <Text className="text-sm text-gray-700">
          <Text className="font-semibold">Participants: </Text>
          {participant}
        </Text>
      </View>
    </View>
  );
};

export default EventCard;
