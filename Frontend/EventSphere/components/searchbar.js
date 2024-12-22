import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
  return (
    <View className="bg-gray-200 border border-primaryPurple rounded-full mt-2 flex-row items-center px-4 mx-auto shadow-md w-4/5 ml-4">
      <TouchableOpacity>
        <Icon name="search" size={22} color="#7F57C4" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search for events..."
        placeholderTextColor="#888"
        className="text-base text-gray-900 flex-1 pl-3 bg-transparent"
      />
    </View>
  );
};

export default SearchBar;
