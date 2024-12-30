import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";

const UploadEvents = () => {
  const [event, setEvent] = useState({
    organizer: "",
    eventName: "",
    eventDescription: "",
    eventDate: null,
    eventTime: null,
    eventLocation: "",
    eventImage: null,
    eventType: "",
    maxAttendees: "",
    ticketPrice: "",
  });

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleDateConfirm = (date) => {
    setEventDate(date);
    hideDatePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);

  const handleTimeConfirm = (time) => {
    setEventTime(time);
    hideTimePicker();
  };

  // Handle Image upload (this can be improved by adding image picker functionality)
  const handleImageUpload = () => {
    console.log("Image upload triggered");
    // Here you would trigger the image picker and set the eventImage state
  };

  return (
    <View className="p-6 bg-gray-100 flex-1">
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        Upload Event
      </Text>

      {/* Event Name */}
      <TextInput
        value={eventName}
        onChangeText={setEventName}
        placeholder="Event Name"
        className="p-4 mb-4 bg-white rounded-lg border border-gray-300 text-xl"
      />

      {/* Event Description */}
      <TextInput
        value={eventDescription}
        onChangeText={setEventDescription}
        placeholder="Event Description"
        multiline
        numberOfLines={4}
        className="p-4 mb-4 bg-white rounded-lg border border-gray-300 text-base"
      />

      {/* Event Date Picker */}
      <TouchableOpacity onPress={showDatePicker} className="mb-4">
        <View className="bg-white p-4 rounded-lg border border-gray-300">
          <Text className="text-lg text-gray-600">
            {eventDate ? eventDate.toDateString() : "Select Event Date"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Event Time Picker */}
      <TouchableOpacity onPress={showTimePicker} className="mb-4">
        <View className="bg-white p-4 rounded-lg border border-gray-300">
          <Text className="text-lg text-gray-600">
            {eventTime ? eventTime.toLocaleTimeString() : "Select Event Time"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Event Location */}
      <TextInput
        value={eventLocation}
        onChangeText={setEventLocation}
        placeholder="Event Location"
        className="p-4 mb-4 bg-white rounded-lg border border-gray-300 text-xl"
      />

      {/* Event Image Upload */}
      <TouchableOpacity onPress={handleImageUpload} className="mb-4">
        <View className="bg-white p-4 rounded-lg border border-gray-300 flex-row items-center justify-between">
          <Text className="text-lg text-gray-600">Upload Event Image</Text>
          <Icon name="camera" size={24} color="#4B4B4B" />
        </View>
      </TouchableOpacity>

      {/* Event Type */}
      <View className="flex-row mb-4">
        <TouchableOpacity
          onPress={() => setEventType("conference")}
          className={`p-4 bg-white rounded-lg border ${
            eventType === "conference"
              ? "border-primaryPurple"
              : "border-gray-300"
          } mr-4`}
        >
          <Text className="text-lg text-gray-600">Conference</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setEventType("workshop")}
          className={`p-4 bg-white rounded-lg border ${
            eventType === "workshop"
              ? "border-primaryPurple"
              : "border-gray-300"
          }`}
        >
          <Text className="text-lg text-gray-600">Workshop</Text>
        </TouchableOpacity>
      </View>

      {/* Max Attendees */}
      <TextInput
        value={maxAttendees}
        onChangeText={setMaxAttendees}
        placeholder="Max Attendees"
        keyboardType="numeric"
        className="p-4 mb-4 bg-white rounded-lg border border-gray-300 text-xl"
      />

      {/* Ticket Price */}
      <TextInput
        value={ticketPrice}
        onChangeText={setTicketPrice}
        placeholder="Ticket Price (if any)"
        keyboardType="numeric"
        className="p-4 mb-4 bg-white rounded-lg border border-gray-300 text-xl"
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={() => console.log("Event uploaded")}
        className="bg-primaryPurple p-4 rounded-lg mt-6 flex-row items-center justify-center"
      >
        <Text className="text-white text-xl">Submit Event</Text>
      </TouchableOpacity>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      {/* Time Picker Modal */}
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default UploadEvents;
