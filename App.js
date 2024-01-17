import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const Stack = createNativeStackNavigator();

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
import { LogBox } from 'react-native';
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
       <Stack.Screen
  name="Chat"
  options={({ route }) => ({ title: route.params.name })}
>
  {(props) => <Chat {...props}  db={db} />}
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