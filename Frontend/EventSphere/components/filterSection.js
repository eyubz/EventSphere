import { View, Text, TouchableOpacity } from "react-native";
import Filter from "./filter";
const filters = ["Near", "Now", "Free", "Paid"];
const FilterSection = () => {
  return (
    <View className="flex flex-row gap-4 justify-center items-center">
      {filters.map((filter, index) => (
        <TouchableOpacity className="bg-primaryPurple rounded-full mr-4 flex-1 justify-center items-center p-2 w-fit">
          <Filter filter={filter} key={index} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FilterSection;
