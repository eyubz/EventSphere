import { Image, Text, View } from "react-native";
const Header = () => {
  return (
    <View className="flex-row justify-start items-center">
      <Image
        source={require("../assets/onboarding/logo.png")}
        style={{
          width: 40,
          height: 40,
          resizeMode: "contain",
        }}
      />
      <Text className="text-white text-xl font-bold" style={{ color: "white" }}>
        Event Sphere
      </Text>
    </View>
  );
};

export default Header;
