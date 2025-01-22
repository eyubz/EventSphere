import { useState, useContext, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../context/authContext";
import { launchImageLibrary } from "react-native-image-picker";

const Profile = () => {
  const { getProfile, authState, setProfile } = useContext(AuthContext);

  const [profile, setProfileDetail] = useState({
    id: "",
    name: "",
    title: "",
    bio: "",
    location: "",
    image: require("../../assets/person/person.jpg"),
  });

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (authState && authState.userData) {
      console.log("Auth state", authState);
      setProfileDetail({
        id: authState.userData._id,
        name: authState.userData.name,
        title: authState.userData.title,
        bio: authState.userData.bio,
        location: authState.userData.location,
        image: require("../../assets/person/person.png"),
      });
    }
  }, [authState]);

  const [isEditing, setIsEditing] = useState(false);
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
  const handleSubmit = async () => {
    await setProfile(profile);
    getProfile();
    setIsEditing(!isEditing);
  };

  return (
    <>
      {isEditing ? (
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
      ) : (
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
              <Text className="text-lg text-gray-600 italic">
                {profile.title}
              </Text>
            </View>
          </View>

          <View className="mb-6 border border-primaryPurple rounded-lg p-2">
            <Text className="text-lg font-semibold text-primaryPurple mb-2">
              Bio
            </Text>
            <Text className="text-base text-gray-700 italic">
              &quot; {profile.bio} &quot;
            </Text>
          </View>

          <View className="flex-row items-center mb-6">
            <Icon name="location-outline" size={20} color="#7E57C2" />
            <Text className="text-base text-gray-700 ml-2">
              {profile.location}
            </Text>
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
      )}
    </>
  );
};

export default Profile;
