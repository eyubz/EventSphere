import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const EventDetail = ({ route }) => {
  const event = route.params;

  return (
    <ScrollView className="bg-gray-100 shadow-2xl">
      <Image
        source={event.image}
        className="w-full h-64 rounded-xl mb-6 border-2 border-gray-300"
        resizeMode="cover"
      />

      <View className="px-6">
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl font-bold text-primaryPurple mb-2">
            {event.name}
          </Text>
          <Icon name="link-outline" size={24} color="#7E57C2" />
        </View>

        <View className="flex-row items-center mb-2 justify-between">
          <View className="flex-row justify-center items-center">
            <Icon name="calendar-outline" size={20} color="#7E57C2" />
            <Text className="text-lg text-gray-600 ml-2">{event.date}</Text>
          </View>
          <View className="flex-row justify-center items-center">
            <Icon name="time-outline" size={20} color="#7E57C2" />
            <Text className="text-lg text-gray-600 ml-2">{event.time}</Text>
          </View>
        </View>

        <View className="flex-row items-center mb-2 justify-between">
          <View className="flex-row justify-center items-center">
            <Text className="text-lg text-primaryPurple">
              🎉 Organized by{event.organizer}
            </Text>
          </View>
          <View className="flex-row justify-center items-center">
            <Icon name="location-outline" size={20} color="#7E57C2" />
            <Text className="text-lg text-gray-600 ml-2">{event.location}</Text>
          </View>
        </View>

        <View className="flex-row items-center mb-4">
          <Icon name="people-outline" size={20} color="#7E57C2" />
          <Text className="text-lg text-gray-600 ml-2">
            {event.participant}
          </Text>
        </View>

        <Text className="text-xl font-semibold text-primaryPurple mb-4">
          About the Event
        </Text>

        <Text className="text-lg text-gray-700 leading-7 italic">
          {event.description}
        </Text>

        <View className="p-4 rounded-xl shadow-md mt-6 mb-8 bg-primaryPurple">
          <Text className="text-lg font-semibold text-white">
            Important Notes:
          </Text>
          <Text className="text-white mt-2">
            Make sure to bring your ticket to the event for entry. Be prepared
            for an amazing experience, and don't forget to share your moments on
            social media using our event hashtag!
          </Text>
        </View>
        <View className="flex-row justify-between p-4 mb-5">
          <TouchableOpacity
            className="bg-primaryPurple p-3 rounded-lg flex-1 mr-2 items-center justify-center flex-row gap-2"
            onPress={() => console.log("RSVP clicked")}
          >
            <Icon name="calendar-outline" size={20} color="#fff" />
            <Text className="text-white text-lg font-bold">RSVP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-primary p-3 rounded-lg flex-1 items-center justify-center flex-row gap-2"
            onPress={() => console.log("Save clicked")}
          >
            <Icon name="save-outline" size={20} color="#fff" />
            <Text className="text-white text-lg font-bold">Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EventDetail;