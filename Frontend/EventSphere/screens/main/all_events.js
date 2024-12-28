import { View, Text, ScrollView } from "react-native";
import SearchBar from "../../components/searchbar";
import FilterSection from "../../components/filterSection";
import EventCard from "../../components/eventCard";
const events = [
  {
    image: require("../../assets/events/image1_0.jpg"),
    name: "Event 1",
    date: "2021-08-01",
    location: "Location 1",
    time: "10:00PM",
    participant: "Participant 1",
  },
  {
    image: require("../../assets/events/event2.jpg"),
    name: "Event 2",
    date: "2021-08-02",
    location: "Location 2",
    time: "11:00PM",
    participant: "Participant 2",
  },
  {
    image: require("../../assets/events/event1.jpg"),
    name: "Event 3",
    date: "2021-08-03",
    location: "Location 3",
    time: "12:00PM",
    participant: "Participant 3",
  },
  {
    image: require("../../assets/events/image1_0.jpg"),
    name: "Event 1",
    date: "2021-08-01",
    location: "Location 1",
    time: "10:00PM",
    participant: "Participant 1",
  },
  {
    image: require("../../assets/events/event2.jpg"),
    name: "Event 2",
    date: "2021-08-02",
    location: "Location 2",
    time: "11:00PM",
    participant: "Participant 2",
  },
  {
    image: require("../../assets/events/event1.jpg"),
    name: "Event 3",
    date: "2021-08-03",
    location: "Location 3",
    time: "12:00PM",
    participant: "Participant 3",
  },
];

const AllEvents = ({ navigation }) => {
  return (
    <ScrollView>
      <View className="bg-white">
        <View>
          <Text className="text-2xl font-bold text-gray-800 ml-4 mt-4">
            All Events
          </Text>
        </View>
        <View className="flex justify-center items-center p-2 mt-2">
          <SearchBar />
        </View>
        <View>
          <Text className="font-bold text-gray-800 ml-4 mt-4">Filters</Text>
          <View className="bg-white p-2">
            <FilterSection />
          </View>
        </View>
        <View className="flex flex-row flex-wrap justify-center items-center p-0.5">
          {events.map((event, index) => {
            return <EventCard key={index} {...event} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default AllEvents;
