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
import AsyncStorage from '@react-native-async-storage/async-storage';
const queries = require("../appConnection/register.js")


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

  // const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("raj@jagasia.com");
  const [password, setPassword] = React.useState("rajjagasia");
//New user email --> a1@e.com and password --> qwerty

  function handleSubmit() {
    console.log('submitted')
    console.log("Email : " + email);
    console.log("Password : " + password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log("User logged in(LoginUpdated.js)");
        // console.log(userCredential);
        // const user = userCredential.user;
        // console.log(user);
        const userId = await queries.getUserIdFromEmail(email);
        console.log(userId);
        navigation.navigate('BottomTabNavigator', { userId: userId, mainUserId: userId });

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
        style={{ width: '65%', height: '10%', alignSelf: 'center', overflow: 'visible', marginTop: 130 }} />

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
              autoCapitalize = "none"
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
              autoCapitalize = "none"
            />
          </View>

          <TouchableOpacity style={styles.signUpButtonContainer}
            onPress={handleSubmit}
          >
            <Text style={{ color: 'white', fontSize: 22, padding: '4.5%', textAlign: 'center', fontWeight: 'bold' }}> Sign In </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text onPress={() => navigation.navigate('Register')}
            style={{ fontSize: 17, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 30, marginBottom: 30 }}> Don't have an account yet? </Text>
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{ fontSize: 17, fontStyle: 'italic', color: '#FF4C68', textAlign: 'center', marginTop: 30, marginBottom: 30 }}> Sign up.
            </Text>
          </View>
        </View>
    </View>

  );
}



const styles = StyleSheet.create({

  parentContainer: {

    flex: 1,
    backgroundColor: '#FF4C68',
    borderBottomWidth: -1
  },

  topContainer: {

    flex: 7000 / 6
  },

  bottomContainer: {

    flex: 4000,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: 'visible',
    borderWidth: 2,
    borderColor: 'black',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },

  fieldContainer: {

    width: '80%',
    marginVertical: 7,
    marginHorizontal: 10

  },

  fieldLabel: {
    fontSize: 18,
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
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 30,
    marginBottom: 10,
    width: '47%',
    height: '12.5%',
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2

  }
});