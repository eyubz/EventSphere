import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const NormalFields = ({ profile, isEditing, setIsEditing }) => {
  return (
    <View className="flex-1 bg-gray-100 p-6">
      <View className="flex-row items-center mb-6">
        <Image
          source={profile.image}
          className="w-32 h-32 rounded-full border-4 border-primaryPurple mr-6"
        />
        <View>
          <Text className="text-3xl font-bold text-gray-900">
            {profile.name}
          </Text>
          <Text className="text-lg text-gray-600 italic">{profile.title}</Text>
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-semibold text-primaryPurple mb-2">
          Bio
        </Text>
        <Text className="text-base text-gray-700 italic">{profile.bio}</Text>
      </View>

      <View className="flex-row items-center mb-6">
        <Icon name="location-outline" size={20} color="#7E57C2" />
        <Text className="text-base text-gray-700 ml-2">{profile.location}</Text>
      </View>

      <View className="flex-row space-x-6 gap-2">
        <TouchableOpacity>
          <Icon name="logo-linkedin" size={24} color="#7E57C2" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="logo-twitter" size={24} color="#7E57C2" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-primaryPurple p-3 rounded-full mt-8 flex-row items-center justify-center"
        onPress={() => setIsEditing(!isEditing)}
      >
        <Icon name="pencil" size={20} color="#fff" />
        <Text className="text-white ml-2">Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NormalFields;
