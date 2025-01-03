import { useState, useContext, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { AuthContext } from "../../context/authContext";
import Icon from "react-native-vector-icons/Ionicons";

const Verify = ({ navigation }) => {
  const { authState, verifyEmail } = useContext(AuthContext);
  const { email, verificationSuccess, verifyLoading, error } = authState;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const ref = useRef([]);

  useEffect(() => {
    if (verificationSuccess) {
      navigation.navigate("Login");
    }
  }, [verificationSuccess, navigation]);

  const handleChange = (text, index) => {
    if (text.length > 1) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < otp.length - 1) {
      ref.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && otp[index]) {
      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join("");
    // console.log(authState);
    if (otpValue.length === 6) {
      verifyEmail({ email, otp: otpValue });
    } else {
      alert("Please enter the complete OTP");
    }
  };

  return (
    <View className="flex-1 bg-white items-center px-6 justify-center">
      <View className="absolute top-14 left-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#7E57C2" />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../assets/onboarding/logo.png")}
        className="bg-primaryPurple w-20 h-20 rounded-full mb-6 p-2"
      />
      <Text className="text-2xl font-bold text-primaryPurple mb-6">
        Verify Your Email
      </Text>
      <Text className="text-center mb-6">
        We have sent you a verification email to{" "}
        <Text className="text-primaryPurple">{email}</Text>. Please check your
        inbox and enter the code sent here.
      </Text>
      <View className="flex-row items-center justify-center gap-4 mb-6">
        {otp.map((value, index) => (
          <TextInput
            key={index}
            value={value}
            keyboardType="numeric"
            maxLength={1}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onChangeText={(text) => handleChange(text, index)}
            ref={(el) => (ref.current[index] = el)}
            className="bg-primary rounded-lg w-12 text-white text-center text-lg"
          />
        ))}
      </View>

      <TouchableOpacity
        onPress={() => alert("Resend email")}
        className="flex justify-end w-full ml-8"
      >
        <Text className="text-primaryPurple">Resend email ?</Text>
      </TouchableOpacity>
      {error && (
        <View className="mb-2 flex left items-start justify-start">
          <Text className="text-red-500">{error}</Text>
        </View>
      )}
      <TouchableOpacity onPress={handleVerify}>
        <Text className="text-white bg-primaryPurple p-4 rounded-xl mt-2 w-36 text-center">
          {verifyLoading ? "Loading..." : "Verify"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verify;
