import { View, Text, Image, TouchableOpacity } from "react-native";

const featuredOrganizers = [
  {
    id: "1",
    name: "John Doe",
    image: require("../../assets/person/person.jpg"),
  },
  {
    id: "2",
    name: "Jane Smith",
    image: require("../../assets/person/person.jpg"),
  },
];

const FeaturedOrganizers = ({ navigation }) => {
  return (
    <View>
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        Featured Organizers
      </Text>
      {featuredOrganizers.map((organizer) => (
        <TouchableOpacity
          key={organizer.id}
          onPress={() =>
            navigation.navigate("OrganizerProfile", {
              organizerId: organizer.id,
            })
          }
        >
          <View className="flex-row items-center mb-4">
            <Image
              source={organizer.image}
              className="w-20 h-20 rounded-full mr-4"
            />
            <View>
              <Text className="text-lg font-semibold">{organizer.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FeaturedOrganizers;
