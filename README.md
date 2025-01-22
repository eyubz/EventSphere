# Event Management App

A React Native application for managing events, including uploading events, RSVPing to events, and viewing notifications. This app is designed to provide a seamless experience for users to interact with events and track their RSVPs.

## Features

1.  **Uploaded Events**

    - Users can view their uploaded events.
    - Show a list of events with pagination and "Show More" functionality.
    - Each event includes details like name, date, and RSVP count.

2.  **RSVP Events**

    - Users can view a list of events they've RSVP’d to.
    - Displays event details, including name, date, and location.

3.  **Notifications**

    - A notification center with a bell icon for aesthetics.
    - Placeholder for future notification features.

4.  **Reusable Components**

    - **UploadCard**: A customizable card for displaying event details.
    - Bell icon for notification aesthetics.

## Tech Stack

- **Frontend**: React Native
- **State Management**: Context API
- **Styling**: TailwindCSS (React Native ClassNames)
- **Icons**: @expo/vector-icons

## Folder Structure

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  bashCopyEditsrc/  ├── components/  │   ├── UploadCard.js       # Component for displaying event cards  │   ├── Notification.js     # Notification screen with a bell icon  │  ├── screens/  │   ├── UploadedEvents.js   # Screen for viewing uploaded events  │   ├── RsvpEvents.js       # Screen for viewing RSVP'd events  │  ├── context/  │   ├── eventContext.js     # Event management state and actions  │  ├── assets/  │   └── events/             # Static assets for events (e.g., images)  │  └── App.js                  # Main entry point for the app  `

## Installation and Setup

1.  bashCopyEditgit clone https://github.com/your-repo-name.gitcd your-repo-name
2.  bashCopyEditnpm install
3.  bashCopyEditnpm start
4.  bashCopyEditnpm run android # For Androidnpm run ios # For iOS (requires macOS)

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
