# React Native Chat App

## Overview

This is a React Native chat application that leverages Firebase for real-time messaging. Users can send text messages, images, and share their location. The project integrates popular libraries for various functionalities.

## Features

- **Real-time Messaging:** Users can exchange text messages in real-time.
- **Media Sharing:** Supports image uploads with the ability to choose from the device's library or take a new picture.
- **Location Sharing:** Users can share their current location.
- **Offline Mode:** Messages are cached locally when offline and synchronized when the connection is restored.

## Prerequisites

Before you begin, ensure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/alinatelychko/chat-app.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd chat-app
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

   This project uses a variety of dependencies, including:

   - [React Native](https://reactnative.dev/)
   - [Firebase](https://firebase.google.com/): Real-time database and storage services
   - [React Navigation](https://reactnavigation.org/): Navigation library
   - [Expo](https://expo.dev/): Development framework for React Native
   - [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat): Chat UI components
   - [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/): Access to the device's image library
   - [expo-location](https://docs.expo.dev/versions/latest/sdk/location/): Access to the device's location
   - [expo-async-storage](https://docs.expo.dev/versions/latest/sdk/async-storage/): Asynchronous, persistent key-value storage
   - [Firebase Storage](https://firebase.google.com/docs/storage): Storage service for Firebase

4. **Configure Firebase:**

   - Create a Firebase project: [Firebase Console](https://console.firebase.google.com/)
   - Obtain your Firebase configuration (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId) and update it in `Chat.js`.

5. **Run the App:**

   ```bash
   npm start
   ```

   - Follow the instructions to open the app on an emulator or physical device.

## Database Configuration

1. **Firebase Realtime Database:**

   - Set up your Firebase Realtime Database in the Firebase Console.
   - Update the rules to allow read and write access:

     ```json
     {
       "rules": {
         ".read": "auth != null",
         ".write": "auth != null"
       }
     }
     ```

   - Update the Firebase configuration in `Chat.js` with your database credentials.

2. **Firebase Storage:**

   - Set up Firebase Storage in the Firebase Console.
   - Update the Firebase configuration in `Chat.js` with your storage bucket URL.

## Usage

- Launch the app.
- Enter your name and start chatting!
- Use the '+' button to access additional features (choose from the library, take a picture, send location).

## Contributing

Feel free to contribute to the project by creating an issue or submitting a pull request for improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [adelin9999@example.com].

