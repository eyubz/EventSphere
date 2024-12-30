import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import SearchBar from "../../components/searchbar";
import FilterSection from "../../components/filterSection";
import EventCard from "../../components/eventCard";
const events = [
  {
    image: require("../../assets/events/image1_0.jpg"),
    name: "Meeting",
    date: "2021-08-01",
    location: "Location 1",
    time: "10:00PM",
    participant: "Participant 1",
    organizer: "EBS",
    description:
      "This is a detailed description of the event. It provides more context, background, and information to help participants understand what to expect and why they should attend.",
  },
  {
    image: require("../../assets/events/event2.jpg"),
    name: "Event 2",
    date: "2021-08-02",
    location: "Location 2",
    time: "11:00PM",
    participant: "Participant 2",
    organizer: "EBS",
    description:
      "This is a detailed description of the event. It provides more context, background, and information to help participants understand what to expect and why they should attend.",
  },
  {
    image: require("../../assets/events/event1.jpg"),
    name: "Event 3",
    date: "2021-08-03",
    location: "Location 3",
    time: "12:00PM",
    participant: "Participant 3",
    organizer: "EBS",
    description:
      "This is a detailed description of the event. It provides more context, background, and information to help participants understand what to expect and why they should attend.",
  },
  {
    image: require("../../assets/events/image1_0.jpg"),
    name: "Event 1",
    date: "2021-08-01",
    location: "Location 1",
    time: "10:00PM",
    participant: "Participant 1",
    organizer: "EBS",
    description:
      "This is a detailed description of the event. It provides more context, background, and information to help participants understand what to expect and why they should attend.",
  },
  {
    image: require("../../assets/events/event2.jpg"),
    name: "Event 2",
    date: "2021-08-02",
    location: "Location 2",
    time: "11:00PM",
    participant: "Participant 2",
    organizer: "EBS",
  },
  {
    image: require("../../assets/events/event1.jpg"),
    name: "Event 3",
    date: "2021-08-03",
    location: "Location 3",
    time: "12:00PM",
    participant: "Participant 3",
    organizer: "EBS",
    description:
      "This is a detailed description of the event. It provides more context, background, and information to help participants understand what to expect and why they should attend.",
  },
  {
    image: require("../../assets/events/event2.jpg"),
    name: "Event 2",
    date: "2021-08-02",
    location: "Location 2",
    time: "11:00PM",
    participant: "Participant 2",
    organizer: "EBS",
    description:
      "This is a detailed description of the event. It provides more context, background, and information to help participants understand what to expect and why they should attend.",
  },
  {
    image: require("../../assets/events/event1.jpg"),
    name: "Event 3",
    date: "2021-08-03",
    location: "Location 3",
    time: "12:00PM",
    participant: "Participant 3",
    organizer: "EBS",
    description:
      "This is a detailed description of the event. It provides more context, background, and information to help participants understand what to expect and why they should attend.",
  },
];

const ITEM_PER_PAGE = 4;

const AllEvents = ({ navigation }) => {
  const [data, setData] = useState(events.slice(0, ITEM_PER_PAGE));
  const [currentIndex, setCurrentIndex] = useState(ITEM_PER_PAGE);

  const handleLoadMore = () => {
    const index = currentIndex + ITEM_PER_PAGE;
    setData([...data, ...events.slice(currentIndex, index)]);
    setCurrentIndex(index);
  };

  const handleEventDetail = (event) => {
    navigation.navigate("EventDetail", { ...event });
  };

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
          {data.map((event, index) => {
            return (
              <TouchableOpacity
                onPress={() => handleEventDetail(event)}
                key={index}
              >
                <EventCard key={index} {...event} />
              </TouchableOpacity>
            );
          })}
        </View>
        {currentIndex < events.length && (
          <TouchableOpacity
            onPress={handleLoadMore}
            className="bg-primaryPurple rounded py-3 px-6 mt-4 mx-auto mb-3"
          >
            <Text className="text-white text-center text-base font-medium">
              Load More
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default AllEvents;
