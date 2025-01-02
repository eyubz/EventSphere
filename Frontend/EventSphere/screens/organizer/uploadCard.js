import { View, Text, Image, TouchableOpacity } from "react-native";

const UploadCard = ({ id, name, date, image, rsvpCount }) => {
  return (
    <View key={id} className="bg-white shadow-lg rounded-xl p-4 flex flex-col">
      <Image
        source={require("../../assets/events/event1.jpg")}
        style={{ width: "100%", height: 150, borderRadius: 12 }}
        className="mb-4"
      />

      <Text className="text-2xl font-semibold text-primaryPurple mb-2">
        {name}
      </Text>

      <Text className="text-gray-600 text-sm mb-1">📅 Date: {date}</Text>

      <Text className="text-gray-600 text-sm mb-4">
        👥 RSVP Count: {rsvpCount}
      </Text>

      <View className="flex flex-row justify-between mt-auto">
        <TouchableOpacity
          className="bg-primaryPurple py-2 px-4 rounded-lg"
          style={{ flex: 1, marginRight: 8 }}
        >
          <Text className="text-white text-center text-sm font-medium">
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-primary py-2 px-4 rounded-lg"
          style={{ flex: 1 }}
        >
          <Text className="text-white text-center text-sm font-medium">
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadCard;
