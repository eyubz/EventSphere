import { View, Text, TouchableOpacity } from "react-native";
import Filter from "./filter";
const filters = ["Nearby", "Recent", "Free", "Paid"];
const FilterSection = () => {
  return (
    <View className="flex flex-row gap-4 justify-center items-center">
      {filters.map((filter, index) => (
        <TouchableOpacity className="bg-primaryPurple rounded-full p-2 mr-4">
          <Filter filter={filter} key={index} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FilterSection;
