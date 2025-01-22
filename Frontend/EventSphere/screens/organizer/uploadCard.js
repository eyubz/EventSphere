import { View, Text, Image, TouchableOpacity } from "react-native";

const UploadCard = (prop) => {
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
  console.log(`http://192.168.43.168:5000/api/v1${prop.image}`);

  return (
    <View
      key={prop._id}
      className="bg-white shadow-lg rounded-xl p-4 flex flex-col"
    >
      <Image
        // source={prop.image || require("../../assets/events/event2.jpg")}
        source={{ uri: ` http://192.168.43.168:5000${prop.image}` }}
        // source={typeof img === "string" ? { uri: prop.img } : prop.img}
        style={{ width: "100%", height: 150, borderRadius: 12 }}
        className="mb-4"
      />

      <Text className="text-2xl font-semibold text-primaryPurple mb-2">
        {prop.name}
      </Text>

      <Text className="text-gray-600 text-sm mb-1">
        📅 Date: {formatDate(prop.date)}
      </Text>

      <Text className="text-gray-600 text-sm mb-4">
        👥 RSVP Count: {prop.rsvpCount}
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
