import React from 'react';
import {Image,TextInput,TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import pic from './pic.jpeg'; 

export default function App() {
  const [value, onChangeText] = React.useState(' ');
  return (
    <View style={styles.container}>

        <Text style={{fontSize:32,textAlign:'center'}}>Farmers</Text>


       <Image source={pic} style={{ width: 415, height: 200, alignItems:'center' }} />

          <TouchableOpacity
         style={styles.Ibutton2}>
      </TouchableOpacity>
      <Text style={styles.subText}>Name of farm:</Text>


    <TextInput
    style={styles.textInput}
    onChangeText={text => onChangeText(text)}
    value={value}
  />
        <TouchableOpacity
         style={styles.Ibutton2}>
      </TouchableOpacity>

      <Text style={styles.subText}>Location of farm:</Text>

        <TextInput
    style={styles.textInput}
    onChangeText={text => onChangeText(text)}
    value={value}
  />
      <TouchableOpacity
         style={styles.Ibutton2}>
      </TouchableOpacity>
<Text style={styles.subText}>Resource to give:</Text>

      <TextInput
    style={styles.textInput2}
    onChangeText={text => onChangeText(text)}
    value={value}
  />
        <TouchableOpacity
         style={styles.Ibutton2}>
      </TouchableOpacity>
  <TouchableOpacity
        onPress={() => alert('Sent to nearby non-profits!')} style={styles.button}>
        <Text  style={styles.buttonText}>Send to non-profits</Text>
      </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  subText:{
    fontSize: 14,
    textAlign: 'left',
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
  },
  textInput: {
    height: 40, width: 400, borderColor: 'gray', borderWidth: 1 
  },
  textInput2: {
    height: 200, width: 400, borderColor: 'gray', borderWidth: 1 
  },
  Ibutton2: {
    padding: 10,
    borderRadius: 5,
  },  
  button: {
    width: 250,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    alignSelf:"center",
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  }, 

});
