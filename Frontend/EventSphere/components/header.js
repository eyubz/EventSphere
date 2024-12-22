import React from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import LinearGradient from "react-native-linear-gradient";

const Header = () => {
  return (
    // <LinearGradient
    //   colors={["#7E57C2", "#4A148C"]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 0 }}
    //   style={{ padding: 16 }}
    // >
    <View className="flex-col">
      <View className="flex-row justify-around items-center p-2 mt-4">
        <Icon name="menu" size={30} color="#fff" className="mr-10" />
        <Icon name="notifications" size={30} color="#fff" />
      </View>
      <View className="flex-row justify-around items-center p-2 mt-2 mb-4">
        <Text className="text-white text-2xl font-bold">
          Lets' find you some events 🎉
        </Text>
      </View>
    </View>
    // </LinearGradient>
  );
};

export default Header;
