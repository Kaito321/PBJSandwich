import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './logo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
       <Image source={logo} style={{ width: 308, height: 100.5 }} />
      
       <TouchableOpacity
         style={styles.Ibutton}>
      </TouchableOpacity>
      
      <Text style={styles.regText}>This is the welcome page. Welcome to Full->Fill, the app that connects a farmers surplus of food to non-profits and consumers near you!</Text>
      
      <TouchableOpacity
         style={styles.Ibutton}>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => alert('Consumer Page!') }  style={styles.button}>
        <Text  style={styles.buttonText}>Consumer</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={styles.Ibutton2}>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Farmer Page!')} style={styles.button}>
        <Text  style={styles.buttonText}>Farmer</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={styles.Ibutton2}>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Non-Profit Page!')} style={styles.button}>
        <Text  style={styles.buttonText} >Non-Profit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  }, 
  regText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  }, 
  Ibutton: {
    padding: 20,
    borderRadius: 5,
  },
  Ibutton2: {
    padding: 10,
    borderRadius: 5,
  },

});
