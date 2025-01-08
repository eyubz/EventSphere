import { View, Text, Image, TouchableOpacity } from "react-native";

const upcomingEvents = [
  {
    id: "1",
    name: "Tech Conference 2025",
    date: "2025-02-15",
    image: require("../../assets/events/event1.jpg"),
  },
  {
    id: "2",
    name: "Music Festival",
    date: "2025-03-20",
    image: require("../../assets/events/event2.jpg"),
  },
];

const UpcomingEvents = ({ navigation }) => {
  return (
    <View className="bg-primaryPurple p-4 rounded-lg">
      <Text className="text-2xl font-bold mb-4 text-white">
        Upcoming Events
      </Text>
      {upcomingEvents.map((event) => (
        <TouchableOpacity
          key={event.id}
          onPress={() =>
            navigation.navigate("EventDetail", { eventId: event.id })
          }
        >
          <View className="flex-row items-center mb-4">
            <Image source={event.image} className="w-20 h-20 rounded-lg mr-4" />
            <View>
              <Text className="text-lg font-semibold text-white">
                {event.name}
              </Text>
              <Text className="text-white">{event.date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default UpcomingEvents;
