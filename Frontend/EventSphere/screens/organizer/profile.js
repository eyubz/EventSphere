import { useState, useContext, useEffect } from "react";
import NormalFields from "./displayProfile";
import EditableFields from "./editProfile";
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const { getProfile, userData, setProfile } = useContext(AuthContext);
  const [profile, setProfileDetail] = useState(
    userData
    // || {
    //   name: "John Doe",
    //   title: "Software Engineer",
    //   bio: "Passionate about coding, problem-solving, and building impactful projects. I love exploring new technologies and collaborating with diverse teams.",
    //   location: "San Francisco, CA",
    //   image: require("../../assets/person/person.jpg"),
    // }
  );

  useEffect(() => {
    getProfile();
  }, []);

  const handleSubmit = () => {
    setProfile();
    setIsEditing(!isEditing);
  };

  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <EditableFields
          profile={profile}
          setProfile={setProfileDetail}
          isEditing={isEditing}
          handleSubmit={handleSubmit}
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
