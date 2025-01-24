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

## Folder Structure

`bashCopy
 Editsrc/  ├── components/  │   ├── UploadCard.js       # Component for displaying event cards  │   ├── Notification.js     # Notification screen with a bell icon  │  ├── screens/  │   ├── UploadedEvents.js   # Screen for viewing uploaded events  │   ├── RsvpEvents.js       # Screen for viewing RSVP'd events  │  ├── context/  │   ├── eventContext.js     # Event management state and actions  │  ├── assets/  │   └── events/             # Static assets for events (e.g., images)  │  └── App.js                  # Main entry point for the app`

## Installation and Setup

`bash

1.  bashCopyEditgit clone https://github.com/your-repo-name.gitcd your-repo-name
2.  bashCopyEditnpm install
3.  bashCopyEditnpm start
4.  bashCopyEditnpm run android # For Androidnpm run ios # For iOS (requires macOS)
`

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

- **Your Name** – Developer
- Contributions and pull requests are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.
