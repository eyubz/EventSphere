import { View, Image } from "react-native";

const HeroSection = () => {
  return (
    <View className="flex justify-center items-center align-middle mt-1">
      <Image
        source={require("../../assets/banner.jpg")}
        style={{ height: 300, width: "100%" }}
        className="shadow-lg rounded-2xl mt-2"
      />
    </View>
  );
};

export default HeroSection;
