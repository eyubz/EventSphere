import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Ensure you have installed @expo/vector-icons

const Notification = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="bell" size={60} color="#6C63FF" style={styles.icon} />
      <Text style={styles.text}>No New Notifications</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  icon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
  },
});

export default Notification;
