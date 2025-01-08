import { View, ScrollView } from "react-native";
import PopularEvent from "./popularEvent";
import HeroSection from "./heroSection";
import UpcomingEvents from "./upcoming_events";
import FeaturedOrganizers from "./featured_organizer";
import RecommendedEvent from "./recommended_event";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View className="bg-white">
        <HeroSection />
        <View className="bg-white p-2">
          <RecommendedEvent navigation={navigation} />
        </View>
        <View className="bg-white p-2">
          <PopularEvent navigation={navigation} />
        </View>
        <View className="bg-white p-2">
          <UpcomingEvents navigation={navigation} />
        </View>
        <View className="bg-white p-2">
          <FeaturedOrganizers navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
