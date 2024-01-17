import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { disableNetwork, enableNetwork, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";

import { useNetInfo }from '@react-native-community/netinfo';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const App = () => {
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const firebaseConfig = {
    apiKey: "AIzaSyAG5nAuiwMIc2wMQTdrHuIwCy8igmwiqkE",
    authDomain: "messages-7e54b.firebaseapp.com",
    projectId: "messages-7e54b",
    storageBucket: "messages-7e54b.appspot.com",
    messagingSenderId: "83935227241",
    appId: "1:83935227241:web:24557e9edc17fba4d6e1f8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
       <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              db={db}
              isConnected={connectionStatus.isConnected}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;