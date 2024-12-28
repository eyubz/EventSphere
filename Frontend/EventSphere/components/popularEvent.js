import { View, Text, ScrollView, FlatList } from "react-native";
import EventCard from "./eventCard";

const events = [
  {
    image: require("../assets/events/image1_0.jpg"),
    name: "Event 1",
    date: "2021-08-01",
    location: "Location 1",
    time: "10:00PM",
    participant: "Participant 1",
  },
  {
    image: require("../assets/events/event2.jpg"),
    name: "Event 2",
    date: "2021-08-02",
    location: "Location 2",
    time: "11:00PM",
    participant: "Participant 2",
  },
  {
    image: require("../assets/events/event1.jpg"),
    name: "Event 3",
    date: "2021-08-03",
    location: "Location 3",
    time: "12:00PM",
    participant: "Participant 3",
  },
];

const PopularEvent = ({ navigation }) => {
  console.log(navigation);
  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center bg-white">
        <Text className="text-primaryPurple text-lg font-bold p-2">
          Popular Events
        </Text>
        <Text
          className="underline ml-10"
          onPress={() => navigation.navigate("AllEvents")}
        >
          See All
        </Text>
      </View>
      <FlatList
        horizontal
        data={events}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <EventCard key={index} {...item} />}
      />
    </View>
  );
};

export default PopularEvent;
