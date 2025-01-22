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

  RsvpEvent = async (id) => {
    try {
      const events = await this.eventModel.updateOne(
        { _id: id },
        { $inc: { rsvpCount: 1 } }
      );
      return events;
    } catch (error) {
      throw new Error(error);
    }
  };

  SavedEvent = async (id) => {
    try {
      const events = await this.eventModel.updateOne(
        { _id: id },
        { $inc: { savedCount: 1 } }
      );
      return events;
    } catch (error) {
      throw new Error(error);
    }
  };

  GetRsvpEvents = async (eventIds) => {
    try {
      const events = await this.eventModel.find(
        { _id: { $in: eventIds } },
        "image name date location"
      );
      return events;
    } catch (error) {
      throw error;
    }
  };

  GetSavedEvents = async (eventIds) => {
    try {
      const events = await this.eventModel.find(
        { _id: { $in: eventIds } },
        "image name date location"
      );
      return events;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = EventRepository;
