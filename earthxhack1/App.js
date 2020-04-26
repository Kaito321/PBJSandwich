//****************Im APP.JS************************


//import React from 'react';
//import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { Image, StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from './assets/Full_Fill_Logo.png';
import LogIn from './LogIn.js'
import Home from './JadasApp.js'

function Start({navigation}) {
  return (
          <View style={styles.container}>
          <Image source={logo} style={styles.logo}/>
         <Button
          title="Begin"
          onPress={() => navigation.navigate(Home)} style={styles.button}>
          <Text style={styles.buttonText}> LogIn </Text>
        </Button>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartPage" component={Start} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


//ORGINAL APP DESIGN
/*
export default function App() {
  return (
        <View style={styles.container}>
      
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.instructions}>
            Username</Text>
        <Text style={styles.instructions} >
            Password
        </Text>
    
        <TouchableOpacity
            onPress={() => alert('this is a button!')} style={styles.button}>
            <Text style={styles.buttonText}> LogIn </Text>
        </TouchableOpacity>
      
        </View>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  backgroundColor: '#FFFDD4'
  },
logo: {
    //alignItems: 'Top',
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

