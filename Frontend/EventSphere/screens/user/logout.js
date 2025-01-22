import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-4">
      <Text className="text-4xl font-bold text-gray-800 mb-4">Goodbye!</Text>
      <Text className="text-lg text-gray-600 text-center mb-8">
        We hope to see you back soon.
      </Text>
      <TouchableOpacity
        className="bg-red-500 py-3 px-6 rounded-lg"
        onPress={handleLogout}
      >
        <Text className="text-white text-lg font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
