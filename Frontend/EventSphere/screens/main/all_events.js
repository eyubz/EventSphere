import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import SearchBar from "../../components/searchbar";
import FilterSection from "../../components/filterSection";
import EventCard from "../../components/eventCard";
import { EventContext } from "../../context/eventContext";
import { useContext, useState, useEffect } from "react";

const ITEM_PER_PAGE = 4;

const AllEvents = ({ navigation }) => {
  const { fetchEvents, eventState } = useContext(EventContext);
  const [events, setEvents] = useState([]);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchEvents();
  }, []);
  useEffect(() => {
    if (eventState && eventState.allEvents) {
      setEvents(eventState.allEvents);
      setData(eventState.allEvents.slice(0, ITEM_PER_PAGE));
      setCurrentIndex(ITEM_PER_PAGE);
    }
  }, [eventState]);

  const handleLoadMore = () => {
    const nextIndex = currentIndex + ITEM_PER_PAGE;
    const moreData = events.slice(currentIndex, nextIndex);
    setData((prevData) => [...prevData, ...moreData]);
    s;
    setCurrentIndex(nextIndex);
  };

  const handleEventDetail = (event) => {
    navigation.navigate("EventDetail", { ...event });
  };

  return (
    <ScrollView>
      <View className="bg-white">
        <View>
          <Text className="text-2xl font-bold text-primary ml-4 mt-4">
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

        <View className="flex flex-row flex-wrap justify-center items-center mb-2">
          {data.map((event, index) => (
            <TouchableOpacity
              onPress={() => handleEventDetail(event)}
              key={index}
            >
              <EventCard {...event} />
            </TouchableOpacity>
          ))}
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
