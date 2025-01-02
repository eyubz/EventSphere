import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { EventContext } from "../../context/eventContext";

const UploadEvents = () => {
  const { uploadEvent, eventState, resetEventState } = useContext(EventContext);
  const { message, loading, success, error } = eventState;
  const [event, setEvent] = useState({
    organizer: "",
    name: "",
    description: "",
    date: null,
    time: null,
    location: "",
    image: null,
    type: "",
    maxAttendees: "",
    ticketPrice: "",
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  useEffect(() => {
    if (success) {
      Alert.alert(message);
      resetForm();
      resetEventState();
    }
    if (error) {
      Alert.alert("Error", error);
    }
  }, [success, error, message, resetEventState]);

  const resetForm = () => {
    setEvent({
      organizer: "",
      name: "",
      description: "",
      date: null,
      time: null,
      location: "",
      image: null,
      type: "",
      maxAttendees: "",
      ticketPrice: "",
    });
  };

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);

  const handleDateConfirm = (date) => {
    setEvent((prev) => ({ ...prev, date }));
    hideDatePicker();
  };

  const handleTimeConfirm = (time) => {
    setEvent((prev) => ({ ...prev, time }));
    hideTimePicker();
  };

  const handleChange = (field, value) => {
    setEvent((prevEvent) => ({
      ...prevEvent,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    uploadEvent(event);
  };

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.canceled) {
      setEvent((prev) => ({
        ...prev,
        image: result.assets[0].uri,
      }));
    }
  };

  return (
    <ScrollView className="p-6 bg-gray-50 flex-1">
      <Text className="text-2xl font-bold text-primaryPurple mb-4 text-center">
        Upload Event
      </Text>

      <View className="p-2 mb-4 bg-white rounded-lg border border-gray-300 flex-row items-center">
        <Icon name="pricetag" size={24} color="#7E57C2" className="mr-4" />
        <TextInput
          value={event.name}
          onChangeText={(value) => handleChange("name", value)}
          placeholder="Event Name"
          className="flex-1 text-base"
        />
      </View>

      <View className="p-2 mb-4 bg-white rounded-lg border border-gray-300 flex-row items-center">
        <Icon name="document-text" size={24} color="#7E57C2" className="mr-4" />
        <TextInput
          value={event.description}
          onChangeText={(value) => handleChange("description", value)}
          placeholder="Event Description"
          multiline
          numberOfLines={4}
          className="flex-1 text-base"
        />
      </View>

      <TouchableOpacity onPress={showDatePicker} className="mb-4">
        <View className="p-4 bg-white rounded-lg border border-gray-300 flex-row items-center">
          <Icon name="calendar" size={24} color="#7E57C2" className="mr-4" />
          <Text className="text-base text-gray-400">
            {event.date ? event.date.toDateString() : "Select Event Date"}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={showTimePicker} className="mb-4">
        <View className="p-4 bg-white rounded-lg border border-gray-300 flex-row items-center">
          <Icon name="time" size={24} color="#7E57C2" className="mr-4" />
          <Text className="text-base text-gray-400">
            {event.time ? event.time.toLocaleTimeString() : "Select Event Time"}
          </Text>
        </View>
      </TouchableOpacity>

      <View className="p-2 mb-4 bg-white rounded-lg border border-gray-300 flex-row items-center">
        <Icon name="location" size={24} color="#7E57C2" className="mr-4" />
        <TextInput
          value={event.location}
          onChangeText={(value) => handleChange("location", value)}
          placeholder="Event Location"
          className="flex-1 text-base"
        />
      </View>
      <View className="p-2 mb-4 bg-white rounded-lg border border-gray-300 flex-row items-center">
        <Icon name="people" size={24} color="#7E57C2" className="mr-4" />
        <TextInput
          value={event.maxAttendees}
          onChangeText={(value) => handleChange("maxAttendees", value)}
          placeholder="Max Attendees"
          keyboardType="numeric"
          className="flex-1 text-base"
        />
      </View>

      <View className="p-2 mb-4 bg-white rounded-lg border border-gray-300 flex-row items-center">
        <Icon name="pricetag" size={24} color="#7E57C2" className="mr-4" />
        <TextInput
          value={event.ticketPrice}
          onChangeText={(value) => handleChange("ticketPrice", value)}
          placeholder="Ticket Price (if any)"
          keyboardType="numeric"
          className="flex-1 text-"
        />
      </View>
      <View className="p-2 mb-4 bg-white rounded-lg border border-gray-300 flex-row items-center">
        <Icon name="document" size={24} color="#7E57C2" className="mr-4" />
        <TextInput
          value={event.type}
          onChangeText={(value) => handleChange("type", value)}
          placeholder="Event Type"
          className="flex-1 text-base"
        />
      </View>
      <View className="p-2 mb-4 bg-white rounded-lg border border-gray-300 flex-row items-center">
        <Icon name="person" size={24} color="#7E57C2" className="mr-4" />
        <TextInput
          value={event.organizer}
          onChangeText={(value) => handleChange("organizer", value)}
          placeholder="Organizer"
          className="flex-1 text-base"
        />
      </View>
      <TouchableOpacity onPress={handleImageUpload} className="mb-4">
        <View className="p-4 bg-white rounded-lg border border-gray-300 flex-row items-center justify-between">
          <Text className="text-base text-gray-400">Upload Event Image</Text>
          <Icon name="camera" size={24} color="#7E57C2" />
        </View>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#7E57C2" />
      ) : (
        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-primaryPurple p-4 rounded-lg mt-6 flex-row items-center justify-center mb-10"
        >
          <Icon
            name="cloud-upload"
            size={24}
            color="#FFFFFF"
            className="mr-2"
          />
          <Text className="text-white text-xl">Submit Event</Text>
        </TouchableOpacity>
      )}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </ScrollView>
  );
};

export default UploadEvents;
