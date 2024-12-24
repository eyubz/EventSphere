import { View, Text, ScrollView } from "react-native";
import SearchBar from "../../components/searchbar";
import PopularEvent from "../../components/popularEvent";
const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View className="bg-white">
        <View className="bg-white flex justify-center items-center align-middle p-4 mt-6">
          <SearchBar />
        </View>
        <View className="bg-white p-2">
          <PopularEvent />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
