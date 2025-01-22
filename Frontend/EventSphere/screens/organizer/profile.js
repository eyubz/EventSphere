import { useState, useContext, useEffect } from "react";
import NormalFields from "./displayProfile";
import EditableFields from "./editProfile";
import { AuthContext } from "../../context/authContext";

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
    if (authState && authState.userData && authState.userData.user) {
      console.log(authState);
      setProfileDetail({
        id: authState.userData.user._id,
        name: authState.userData.user.name,
        title: authState.userData.user.title,
        bio: authState.userData.user.bio,
        location: authState.userData.user.location,
        image: require("../../assets/person/person.jpg"),
      });
    }
  }, [authState]);

  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <EditableFields
          profile={profile}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setProfile={setProfile}
        />
      ) : (
        <NormalFields
          profile={profile}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setProfile={setProfile}
        />
      )}
    </>
  );
};

export default Profile;
