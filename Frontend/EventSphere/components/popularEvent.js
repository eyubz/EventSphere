import { View, Text, ScrollView } from "react-native";
import EventCard from "./eventCard";

const events = [
  {
    image: require("../assets/events/event1.jpg"),
    name: "Event 1",
    date: "2021-08-01",
    location: "Location 1",
    time: "10:00",
    participant: "Participant 1",
  },
  {
    image: require("../assets/events/event1.jpg"),
    name: "Event 2",
    date: "2021-08-02",
    location: "Location 2",
    time: "11:00",
    participant: "Participant 2",
  },
  {
    image: require("../assets/events/event1.jpg"),
    name: "Event 3",
    date: "2021-08-03",
    location: "Location 3",
    time: "12:00",
    participant: "Participant 3",
  },
];

const PopularEvent = ({ navigation }) => {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center bg-white">
        <Text className="text-primaryPurple text-lg font-bold p-2">
          Popular Events
        </Text>
        <Text
          className="underline"
          onPress={() => navigation.navigate("AllEvents")}
        >
          See All
        </Text>
      </View>

      <ScrollView horizontal>
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularEvent;
