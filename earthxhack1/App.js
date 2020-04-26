//****************Im APP.JS************************


//import React from 'react';
//import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import logo from './assets/Full_Fill_Logo.png';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HOME</Text>
      <Button
          title="Go To LogIn"
          onPress={() => navigation.navigate('Details')}
    />
    </View>
  );
}
function LogIn() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FULL->FILL" component={HomeScreen} />
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
*/
