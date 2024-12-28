import { View, Text } from "react-native";
import SearchBar from "../../components/searchbar";
import FilterSection from "../../components/filterSection";

const AllEvents = ({ navigation }) => {
  return (
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
    </View>
  );
};

export default AllEvents;
