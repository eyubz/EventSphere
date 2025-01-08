import { View, Text, FlatList } from "react-native";
import EventCard from "../../components/eventCard";

const events = [
  {
    image: require("../../assets/events/image1_0.jpg"),
    name: "Tech Conference 2025",
    date: "2021-08-01",
    location: "Addis Ababa",
    time: "10:00PM",
  },
  {
    image: require("../../assets/events/event2.jpg"),
    name: "Meetup 2025",
    date: "2021-08-02",
    location: "Kigali",
    time: "11:00PM",
  },
  {
    image: require("../../assets/events/event1.jpg"),
    name: "Party 2025",
    date: "2021-08-03",
    location: "Nairobi",
    time: "12:00PM",
  },
];

const PopularEvent = ({ navigation }) => {
  return (
    <View className="flex-1 bg-gray-50 p-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-primaryPurple text-2xl font-extrabold">
          Popular Events 🌟
        </Text>
        <Text
          className="text-primaryPurple underline text-sm font-medium"
          onPress={() => navigation.navigate("AllEvents")}
        >
          See All
        </Text>
      </View>
      <FlatList
        horizontal
        data={events}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <EventCard {...item} />}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularEvent;
