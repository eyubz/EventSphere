import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { launchImageLibrary } from "react-native-image-picker";

const EditableFields = ({
  profile,
  isEditing,
  setIsEditing,
  setProfile,
  setProfileDetail,
}) => {
  console.log("Profile", profile);
  const handleChange = (field, value) => {
    setProfileDetail((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };
  const handleImageUpload = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        quality: 0.5,
        includeBase64: false,
      },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          const source = response.assets[0].uri;
          setProfile((prevProfile) => ({
            ...prevProfile,
            image: source,
          }));
        }
      }
    );
  };

  const handleSubmit = () => {
    setIsEditing(!isEditing);
    setProfile(profile);
  };

  return (
    <View className="flex-1 bg-gray-100 p-6">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={handleImageUpload} disabled={!isEditing}>
          <Image
            source={require("../../assets/person/person.jpg")}
            className="w-32 h-32 rounded-full border-4 border-primaryPurple mr-6"
          />
        </TouchableOpacity>

        <View>
          <TextInput
            value={profile.name}
            onChangeText={(value) => handleChange("name", value)}
            editable={isEditing}
            className="text-3xl font-bold text-gray-900 mb-2 border border-primaryPurple rounded-lg"
            placeholder="Enter your name"
            placeholderTextColor="#B3B3B3"
          />
          <TextInput
            value={profile.title}
            onChangeText={(value) => handleChange("title", value)}
            editable={isEditing}
            className="text-lg text-gray-600 border border-primaryPurple rounded-lg"
            placeholder="Enter your title"
            placeholderTextColor="#B3B3B3"
          />
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-semibold text-primaryPurple mb-2">
          Bio
        </Text>
        <TextInput
          value={profile.bio}
          onChangeText={(value) => handleChange("bio", value)}
          editable={isEditing}
          multiline
          numberOfLines={4}
          className="text-base text-gray-700 border border-primaryPurple p-3 rounded-md"
          placeholder="Write your bio..."
          placeholderTextColor="#B3B3B3"
        />
      </View>

      <View className="flex-row items-center mb-6">
        <Icon name="location-outline" size={20} color="#7E57C2" />
        <TextInput
          value={profile.location}
          onChangeText={(value) => handleChange("location", value)}
          editable={isEditing}
          className="text-base text-gray-700 ml-2 border border-primaryPurple rounded-lg"
          placeholder="Enter your location"
          placeholderTextColor="#B3B3B3"
        />
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
        className="bg-primaryPurple p-3 rounded-full mt-6 flex-row items-center justify-center"
        onPress={handleSubmit}
      >
        <Icon name={"checkmark"} size={20} color="#fff" />
        <Text className="text-white ml-2">{"Save Changes"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditableFields;
