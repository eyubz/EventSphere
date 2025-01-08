import { useState, useContext, useEffect } from "react";
import NormalFields from "./displayProfile";
import EditableFields from "./editProfile";
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const { getProfile, userData } = useContext(AuthContext);
  const [profile, setProfile] = useState(
    userData || {
      name: "John Doe",
      title: "Software Engineer",
      bio: "Passionate about coding, problem-solving, and building impactful projects. I love exploring new technologies and collaborating with diverse teams.",
      location: "San Francisco, CA",
      image: require("../../assets/person/person.jpg"),
    }
  );

  useEffect(() => {
    getProfile();
  }, []);

  const [isEditing, setIsEditing] = useState(false);

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
