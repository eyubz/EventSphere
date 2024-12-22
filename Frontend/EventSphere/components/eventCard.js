import { View, Text, Image } from "react-native";

const EventCard = ({ image, name, date, location, time, participant }) => {
  return (
    <View className="rounded-lg shadow-lg p-4 mx-4 my-2 w-fit">
      <Image
        source={image}
        className="w-16 h-32 rounded-lg mb-4"
        style={{ width: 200, height: 200 }}
      />
      <Text className="text-xl font-semibold text-gray-800 mb-2">{name}</Text>
      <Text className="text-sm text-gray-600">{date}</Text>
      <Text className="text-sm text-gray-600">{location}</Text>
      <Text className="text-sm text-gray-600">{time}</Text>
      <Text className="text-sm text-gray-600">{participant}</Text>
    </View>
  );
};

export default EventCard;
