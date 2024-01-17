import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import {Bubble, GiftedChat } from "react-native-gifted-chat";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";

const Chat = ({ route, navigation, db }) => {
  const [messages, setMessages] = useState([]);
  const { name, backgroundColor } = route.params;
 

  useEffect(() => {
    navigation.setOptions({ title: name })
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    const message = onSnapshot(q,
       (documentSnapshot) => {
        let newMessages = [];
        documentSnapshot.forEach(doc => {
           newMessages.push({ id: doc.id, ...doc.data(), createdAt: new Date(doc.data().createdAt.toMillis())})
        });
        setMessages(newMessages);
       })

       return () => {
         if( message ) message();
       };
  }, []);

  const onSend = (newMessages) => {
    // setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
    addDoc(collection(db, "messages"), newMessages[0])
  }

  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={messages => onSend(messages)}
        user={{
          _id: route.params.id,
          name
        }}
      />
      {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
    </View>
  )
}


//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       <Text style={styles.text}>Chat Screen</Text>
//       <Text style={styles.name}>User: {name}</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
  },
});

export default Chat;
