import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import logo from './assets/Full_Fill_Logo.png';
import LogIn from './LogIn.js';

export default function App() {
  return (
    <Router>
          <Scene
            key="root">
                <Scene>
                    key= "LogIn"
                    component={LogIn}
                    title="LogIn"
                </Scene>
          
          </Scene>
    
    <View style={styles.container}>
          
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.instructions}>
          Username</Text>
          <Text style={styles.instructions} >
            Password
          </Text>
        
          <TouchableOpacity
          onPress={() => Actions.LogIn()}
          style={styles.button}>
          <Text style={styles.buttonText}>Click to Continue</Text>
          </TouchableOpacity>
          
    </View>
          </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  backgroundColor: '#FFFDD4'
  },
logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
    resizeMode: 'contain',
},
instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
},
button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
},
buttonText: {
    fontSize: 20,
    color: '#fff',
}
});
