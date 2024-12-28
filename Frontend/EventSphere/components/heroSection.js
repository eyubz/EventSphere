import { View, Image } from "react-native";
const HeroSection = () => {
  return (
    <View className="bg-primaryPurple flex justify-center items-center align-middle mt-1">
      <Image
        source={require("../assets/events/event2.jpg")}
        style={{ height: 300, width: "100%" }}
        className="shadow-lg"
      />
    </View>
  );
};

export default HeroSection;
