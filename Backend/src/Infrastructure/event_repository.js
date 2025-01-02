class EventRepository {
  constructor(eventModel) {
    this.eventModel = eventModel;
  }

  InsertEvent = async (event) => {
    try {
      const newEvent = new this.eventModel(event);
      await newEvent.save();
      return newEvent;
    } catch (error) {
      throw error;
    }
  };

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
}

module.exports = EventRepository;
