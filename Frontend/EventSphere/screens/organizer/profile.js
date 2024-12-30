import { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import NormalFields from "./displayProfile";
import Icon from "react-native-vector-icons/Ionicons";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    title: "Software Engineer",
    bio: "Passionate about coding, problem-solving, and building impactful projects. I love exploring new technologies and collaborating with diverse teams.",
    location: "San Francisco, CA",
    image: require("../../assets/person/person.jpg"),
  });

  const [isEditing, setIsEditing] = useState(false);
  const EditableFields = () => {
    return (
      <View className="flex-1 bg-gray-100 p-6">
        {/* Profile Header */}
        <View className="flex-row items-center mb-6">
          {/* Profile Image */}
          <Image
            source={{ uri: "https://placekitten.com/200/200" }} // Example image
            className="w-32 h-32 rounded-full border-4 border-primaryPurple mr-6"
          />
          {/* Name and Title */}
          <View>
            <TextInput
              value={name}
              onChangeText={setName}
              className="text-3xl font-bold text-gray-900 mb-2"
              placeholder="Enter your name"
              placeholderTextColor="#B3B3B3"
            />
            <TextInput
              value={title}
              onChangeText={setTitle}
              className="text-lg text-gray-600"
              placeholder="Enter your title"
              placeholderTextColor="#B3B3B3"
            />
          </View>
        </View>

        {/* Bio Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-2">Bio</Text>
          <TextInput
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={4}
            className="text-base text-gray-700 border p-3 rounded-md"
            placeholder="Write your bio..."
            placeholderTextColor="#B3B3B3"
          />
        </View>

        {/* Location */}
        <View className="flex-row items-center mb-6">
          <Icon name="location-outline" size={20} color="#4B4B4B" />
          <TextInput
            value={location}
            onChangeText={setLocation}
            className="text-base text-gray-700 ml-2"
            placeholder="Enter your location"
            placeholderTextColor="#B3B3B3"
          />
        </View>

        {/* Social Links */}
        <View className="flex-row space-x-6 mb-6">
          <TouchableOpacity>
            <Icon name="logo-github" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="logo-linkedin" size={24} color="#0077B5" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="logo-twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
        </View>

        {/* Edit Button */}
        <TouchableOpacity
          className="bg-primaryPurple p-3 rounded-full mt-6 flex-row items-center justify-center"
          onPress={() => console.log("Profile updated")}
        >
          <Icon name="checkmark" size={20} color="#fff" />
          <Text className="text-white ml-2">Save Changes</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {isEditing ? (
        <EditableFields />
      ) : (
        <NormalFields
          profile={profile}
          isEditing={isEditing}
          setProfile={setIsEditing}
        />
      )}
    </>
  );
};

export default Profile;
