import { View, Text, ScrollView } from "react-native";
import SearchBar from "../../components/searchbar";
import PopularEvent from "../../components/popularEvent";
const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <SearchBar />
        <PopularEvent />
      </View>
    </ScrollView>
  );
};

export default Home;
