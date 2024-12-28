import { Text, TouchableOpacity } from "react-native";

const Filter = ({ filter }) => {
  return (
    <TouchableOpacity className="bg-primaryPurple rounded-full p-2 mr-4">
      <Text className="text-white">{filter}</Text>
    </TouchableOpacity>
  );
};

export default Filter;
