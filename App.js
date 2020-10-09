import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Constants from 'expo-constants'
import * as Speech from 'expo-speech';

export default function App() {
// Ei tarvitse extends React.Componenttia tai render{ return() } toimiaakseen.
const [tts, setTTS] = useState('');

  const speak = () => {
    var thingToSay = tts;
    Speech.speak(thingToSay);
  }


    return (
    <View style={styles.container}>
      <TextInput style={styles.textinput} placeholder='Kirjoita teksti jonka haluat kuulla'
      onChangeText={tts => setTTS(tts)}
      value={tts}/>
      <Button title="Paina" onPress={speak} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
  marginTop: 40,
  width: 275,
  borderWidth: 1,
},
});
