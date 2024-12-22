import { View, Text } from "react-native";
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
    <View>
      <Text>Popular Event</Text>
      {events.map((event, index) => {
        return <EventCard key={index} {...event} />;
      })}
      <Text>See All</Text>
    </View>
  );
};

export default PopularEvent;
