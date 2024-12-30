import { useState } from "react";
import NormalFields from "./displayProfile";
import Icon from "react-native-vector-icons/Ionicons";
import EditableFields from "./editProfile";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    title: "Software Engineer",
    bio: "Passionate about coding, problem-solving, and building impactful projects. I love exploring new technologies and collaborating with diverse teams.",
    location: "San Francisco, CA",
    image: require("../../assets/person/person.jpg"),
  });

  const [isEditing, setIsEditing] = useState(true);

  return (
    <>
      {isEditing ? (
        <EditableFields
          profile={profile}
          setProfile={setProfile}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <NormalFields
          profile={profile}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
};

export default Profile;
