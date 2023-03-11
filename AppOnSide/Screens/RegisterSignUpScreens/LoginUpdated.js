import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert } from "react-native";
import { SocialIcon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import app from "../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";


export default function LoginUpdated({ navigation }) {

  // Initialize state variables for each text input field's border color
  const [nameBorderColor, setNameBorderColor] = useState('#000000');
  const [passwordBorderColor, setPasswordBorderColor] = useState('#000000');

  // Event handlers for focusing and blurring the name text input field
  const handleNameFocus = () => {
    setNameBorderColor('#00cc00');
  };
  const handleNameBlur = () => {
    setNameBorderColor('#000000');
  };

  // Event handlers for focusing and blurring the password text input field
  const handlePasswordFocus = () => {
    setPasswordBorderColor('#00cc00');
  };
  const handlePasswordBlur = () => {
    setPasswordBorderColor('#000000');
  };

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  function handleSubmit() {
    console.log('submitted')
    console.log("Email : " + email);
    console.log("Password : " + password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('BottomTabNavigator');

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });

  }

  return (
    <View style={styles.parentContainer}>
      <Image
        source={require('../../Photos/transparent-logo.png')}
        style={{ width: '60%', height: '10%', alignSelf: 'center', resizeMode: 'stretch', overflow: 'visible', marginTop: 130 }} />

      <View style={styles.topContainer}></View>
        <View style={styles.bottomContainer}>
          <View style={[styles.fieldContainer, { marginTop: 50 }]}>
            <Text style={styles.fieldLabel}>Email</Text>
            <TextInput
              style={[styles.fieldInput]}
              borderBottomColor={nameBorderColor}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={[styles.fieldLabel, { marginTop: 20 }]}>Password</Text>
            <TextInput
              style={[styles.fieldInput]}
              borderBottomColor={passwordBorderColor}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>

          <TouchableOpacity style={styles.signUpButtonContainer}
            // onPress={() => { console.log(username + password); navigation.navigate('StackNavigator') }}
            onPress={handleSubmit}
          >
            <Text style={{ color: 'white', fontSize: 23, padding: 10, textAlign: 'center' }}> Sign In </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 13, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20 }}> or Sign-in via </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <SocialIcon
              type="google"
              iconSize={34}
              onPress={() => console.log('Sign up with Google')}
              style={{ width: 60, height: 60, shadowColor: 'grey', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.9, shadowRadius: 2, marginRight: 20, marginTop: 10 }}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20, marginBottom: 30 }}> Don't have an account yet? </Text>
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{ fontSize: 16, fontStyle: 'italic', color: '#FF4C68', textAlign: 'center', marginTop: 20, marginBottom: 30 }}> Sign up.
            </Text>
          </View>
        </View>
    </View>

  );
}



const styles = StyleSheet.create({

  parentContainer: {

    flex: 1,
    backgroundColor: '#FF4C68'
  },

  topContainer: {

    flex: 7000 / 6
  },

  bottomContainer: {

    flex: 6000,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: 'visible',
  },

  fieldContainer: {

    width: '80%',
    marginVertical: 7,
    marginHorizontal: 10

  },

  fieldLabel: {
    fontSize: 16,
    color: '#808080',
    fontWeight: 'bold',
  },

  fieldInput: {
    borderBottomWidth: 2,
    fontSize: 20,
    paddingLeft: 10,
    padding: 0.5,
    fontSize: 16,
    height: 40,
  },

  signUpButtonContainer: {

    backgroundColor: '#FF4C68',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 10,
    width: '80%',
    height: 50,
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2

  }
});