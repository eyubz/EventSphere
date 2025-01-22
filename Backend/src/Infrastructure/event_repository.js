class EventRepository {
  constructor(eventModel) {
    this.eventModel = eventModel;
  }

  GetEvents = async (eventIds) => {
    try {
      const events = await this.eventModel.find(
        { _id: { $in: eventIds } },
        "image name date rsvpCount"
      );
      return events;
    } catch (error) {
      throw error;
    }
  };
  UploadEvent = async (eventData) => {
    try {
      const newEvent = new this.eventModel(eventData);
      await newEvent.save();
      return newEvent;
    } catch (error) {
      throw error;
    }
  };
  GetAllEvents = async () => {
    try {
      const events = await this.eventModel.find();
      return events;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = EventRepository;
