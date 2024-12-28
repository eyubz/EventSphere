import { View, ScrollView } from "react-native";
import PopularEvent from "../../components/popularEvent";
import HeroSection from "../../components/heroSection";
const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View className="bg-white">
        <HeroSection />
        <View className="bg-white p-2">
          <PopularEvent />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
