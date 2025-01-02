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
}

module.exports = EventRepository;
