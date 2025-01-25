# Event Management App

A React Native application for managing events, including uploading events, RSVPing to events, and viewing notifications. This app is designed to provide a seamless experience for users to interact with events and track their RSVPs.

## Features

1.  **Uploading Events**

    - Event organizers can upload event by filling out the details.

2.  **View Uploaded Events**

    - Event organizer can view their uploaded events.

3.  **Edit Profile details**

    - Both event organizers and attendees can update their profile detail.

4.  **RSVP Events**

    - Attendees can respond to events.

5.  **View RSVP and saved Events**

    - Attendees can view events they have responded to and also saved events.

6.  **Notifications**

    - Attendees will get notification for their events.

## Tech Stack

- **Frontend**: React Native
- **Backend**: NodeJs
- **Database**: MongoDB
- **State Management**: Context API, Redux
- **Styling**: TailwindCSS (React Native ClassNames)

## **Installation**

To get started with the project locally, follow these steps:

1.  Clone the repository

- git clone https://github.com/eyubz/EventSphere

2.  Navigate to the project directory:

- cd EventSphere

3.  Install the frontend dependencies

- cd frontend
- npm install

4. Install the backend dependencies

- cd backend
- npm install

5.  Set up your environment variables for the backend.
    - Create a .env file in the backend directory. Include the following
        - MongoDB credentials, JWT secret
7.  Run the project
8.  cd frontend/EventSphere
9.  npm start
10. cd backend/src
11. npm start

## How to Use

1.  **Uploaded Events**

    - Navigate to the "Uploaded Events" screen to see your uploaded events.
    - Use the "Show More" button to load additional events.

2.  **RSVP Events**

    - View the "RSVP Events" screen for events you've RSVP’d to.

3.  **Notifications**

    - Access the notification screen to view updates.

## Future Improvements

- Implement backend API integration for real-time data updates.
- Add editing and deleting functionality for uploaded events.
- Introduce push notifications for event updates.
- Enhance RSVP management with cancellation options.

## Contributors

- **Eyerusalem Bezu** – Developer
- Contributions and pull requests are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.
