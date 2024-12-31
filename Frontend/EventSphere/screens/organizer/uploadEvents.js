import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import { launchImageLibrary } from "react-native-image-picker";

const UploadEvents = () => {
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

  const handleImageUpload = () => {
    console.log("uploading image");
    launchImageLibrary(
      {
        mediaType: "photo",
        quality: 0.5,
        includeBase64: false,
      },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          const source = response.assets[0].uri;
          setEvent((prev) => ({
            ...prev,
            image: source,
          }));
        }
      }
    );
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
      <TouchableOpacity onPress={handleImageUpload} className="mb-4">
        <View className="p-4 bg-white rounded-lg border border-gray-300 flex-row items-center justify-between">
          <Text className="text-base text-gray-400">Upload Event Image</Text>
          <Icon name="camera" size={24} color="#7E57C2" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log()}
        className="bg-primaryPurple p-4 rounded-lg mt-6 flex-row items-center justify-center mb-10"
      >
        <Icon name="cloud-upload" size={24} color="#FFFFFF" className="mr-2" />
        <Text className="text-white text-xl">Submit Event</Text>
      </TouchableOpacity>

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
