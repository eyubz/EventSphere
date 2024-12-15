import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Onboarding = () => {
  const carouselRef = useRef(null);
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: "1",
      title: "Discover Events",
      description: "Find exciting events happening around you with ease!",
      image: require("../assets/onboarding/onboarding1.png"),
    },
    {
      id: "2",
      title: "RSVP Effortlessly",
      description: "RSVP to events and never miss a moment!",
      image: require("../assets/onboarding/onboarding2.png"),
    },
    {
      id: "5",
      title: "Upload events",
      description:
        "Register your event as an event organizer and get responses!",
      image: require("../assets/onboarding/onboarding4.png"),
    },
    {
      id: "4",
      title: "Get Started",
      description: "Create an account and start exploring events today!",
      image: require("../assets/onboarding/onboarding3.png"),
    },
  ];

  const renderSlide = ({ item }) => (
    <View className="items-center justify-center">
      <Image source={item.image} className="w-4/5 h-1/2 resize-contain" />
      <Text className="font-bold text-2xl my-5 text-primaryPurple ">
        {item.title}
      </Text>
      <Text className="text-lg px-10 text-center text-primary">
        {item.description}
      </Text>
    </View>
  );
  return (
    <View className="bg-white flex-1 items-center">
      <Carousel
        ref={carouselRef}
        width={width}
        height={height}
        autoPlay={false}
        data={slides}
        renderItem={renderSlide}
        onSnapToItem={(index) => setCurrentIndex(index)}
      />
      <View className="absolute bottom-60 flex-row space-x-2">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-primaryPurple" : "bg-gray-300"
            }`}
          />
        ))}
      </View>

      <View className="absolute bottom-20">
        currentIndex === slides.length - 1 ? (
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text
            className={`text-primaryPurple font-bold text-lg ${
              currentIndex === slides.length - 1
                ? "bg-primaryPurple p-4 text-white text-2xl rounded-lg"
                : ""
            }`}
          >
            {currentIndex === slides.length - 1 ? "Get Started" : "Skip"}
          </Text>
        </TouchableOpacity>
        )
      </View>
    </View>
  );
};

export default Onboarding;
