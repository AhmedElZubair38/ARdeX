import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert } from "react-native";
import { SocialIcon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { db } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, setDoc, addDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';
import insertUser2 from "../appConnection/register.js";
// const queries = require("../appConnection/register.js")
export default function Register() {

  // Initialize state variables for each text input field's border color
  const [nameBorderColor, setNameBorderColor] = useState('#000000');
  const [emailBorderColor, setEmailBorderColor] = useState('#000000');
  const [phoneBorderColor, setPhoneBorderColor] = useState('#000000');
  const [usernameBorderColor, setUsernameBorderColor] = useState('#000000');
  const [passwordBorderColor, setPasswordBorderColor] = useState('#000000');
  const [confPasswordBorderColor, setconfPasswordBorderColor] = useState('#000000');

  // Event handlers for focusing and blurring the name text input field
  const handleNameFocus = () => {
    setNameBorderColor('#00cc00');
  };
  const handleNameBlur = () => {
    setNameBorderColor('#000000');
  };

  // Event handlers for focusing and blurring the email text input field
  const handleEmailFocus = () => {
    setEmailBorderColor('#00cc00');
  };
  const handleEmailBlur = () => {
    setEmailBorderColor('#000000');
  };

  // Event handlers for focusing and blurring the phone text input field
  const handlePhoneFocus = () => {
    setPhoneBorderColor('#00cc00');
  };
  const handlePhoneBlur = () => {
    setPhoneBorderColor('#000000');
  };

  // Event handlers for focusing and blurring the username text input field
  const handleUsernameFocus = () => {
    setUsernameBorderColor('#00cc00');
  };
  const handleUsernameBlur = () => {
    setUsernameBorderColor('#000000');
  };

  // Event handlers for focusing and blurring the password text input field
  const handlePasswordFocus = () => {
    setPasswordBorderColor('#00cc00');
  };
  const handlePasswordBlur = () => {
    setPasswordBorderColor('#000000');
  };

  // Event handlers for focusing and blurring the password text input field
  const handleconfPasswordFocus = () => {
    setconfPasswordBorderColor('#00cc00');
  };
  const handleconfPasswordBlur = () => {
    setconfPasswordBorderColor('#000000');
  };


  const navigation = useNavigation();


  //Getting the states from the Input Fields 
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const collectionRef = collection(db, "userProfile");
  const auth = getAuth();
  const database = getDatabase();
  const userProfileRef = collection(db, "userProfile");
  function handleSubmit() {

    console.log(name + email + username + password + confirmPassword);

    //Checking if username already exists in the databas

        // doc.data() will be undefined in this case
        console.log("Username not in use!");
        //Main cheking stuff for firebase

        if (password !== confirmPassword) {
          alert("Passwords do not match ! Please try again.")
        } else if (username.length < 6) {
          alert("Username should be 6 or more characters")
        } else if (username.length < 6) {
          alert("Username should be 6 or more characters")
        } else if (name === '') {
          alert("Name cannot be null")
        } else {
          
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              console.log(userCredential);
              const user = userCredential.user;
              console.log(user);
              // addDoc(collectionRef, {
              //   email: email,
              //   username: username,
              //   name: name
              // })
              // setDoc(doc(db, "user", username), {
              //   email: email,
              //   username: username,
              //   name: name
              // })
                // .then((data) => {
                //   alert("Data Added" + data);
                // })
                // .catch((err) => {
                //   alert(err.message);
                // });
              insertUser2(name,email, username);
              navigation.navigate('LoginUpdated')
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage+errorCode);
              // console.log(error);
              // console.log(errorCode);
              // console.log(errorMessage);

              // ..
            });
        }
      
        console.log("hi")
    
    }


  return (
    <View style={styles.parentContainer}>

      <Image
        source={require('../../Photos/transparent-logo.png')}
        style={{ width: '60%', height: '10%', alignSelf: 'center',resizeMode: 'stretch', overflow: 'visible', marginTop: 80 }} />

      <View style={styles.topContainer}></View>
      <ScrollView>
        <View style={styles.bottomContainer}>
          <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            {/* {error && <Text style={{ color: '#FF4C68', fontSize: 10, alignSelf: 'center', }}>{error}</Text>} */}
            <Text style={styles.fieldLabel}>Name</Text>
            <TextInput
              // onChangeText={text => handleOnchange(text, 'name')}
              // onFocus={() => {handleError(null, 'name'); handleNameFocus();}}
              placeholder="Name"
              style={[styles.fieldInput]}
              borderBottomColor={nameBorderColor}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              // error={errors.borderTopColor}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Email ID</Text>
            <TextInput
              placeholder="Email ID"
              style={[styles.fieldInput]}
              borderBottomColor={emailBorderColor}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              // value={email}
              // onChangeText={(value) => handleInputChange('email', value)}
              onChangeText={text => setEmail(text)}

            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Username</Text>
            <TextInput
              placeholder="Username"
              style={[styles.fieldInput]}
              borderBottomColor={usernameBorderColor}
              onFocus={handleUsernameFocus}
              onBlur={handleUsernameBlur}
              onChangeText={text => setUsername(text)}
            // value={username}
            // onChangeText={(value) => handleInputChange('username', value)}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Password</Text>
            <TextInput
              placeholder="Password"
              style={[styles.fieldInput]}
              borderBottomColor={passwordBorderColor}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            // value={password}
            // onChangeText={(value) => handleInputChange('phone', value)}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}> Confirm Password</Text>
            <TextInput
              placeholder="Confirm Password"
              style={[styles.fieldInput]}
              borderBottomColor={confPasswordBorderColor}
              onFocus={handleconfPasswordFocus}
              onBlur={handleconfPasswordBlur}
              secureTextEntry={true}
              onChangeText={text => setConfirmPassword(text)}

            />
          </View>

          <TouchableOpacity style={styles.signUpButtonContainer} onPress={handleSubmit}>
            <Text style={{ color: 'white', fontSize: 23, padding: 10, textAlign: 'center' }}> Sign Up </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 13, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20 }}> or Signup via </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <SocialIcon
              type="google"
              iconSize={34}
              onPress={() => console.log('Sign up with Google')}
              style={{ width: 60, height: 60, shadowColor: 'grey', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.9, shadowRadius: 2, marginRight: 20, marginTop: 10 }}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20, marginBottom: 30 }}> Already have an account? </Text>
            <Text
              onPress={() => navigation.navigate('LoginUpdated')}
              style={{ fontSize: 16, fontStyle: 'italic', color: '#FF4C68', textAlign: 'center', marginTop: 20, marginBottom: 30 }}>Sign in.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>

  );
}



const styles = StyleSheet.create({

  parentContainer: {

    flex: 1,
    backgroundColor: '#FF4C68',
  },

  topContainer: {

    flex: 7000 / 6
  },

  bottomContainer: {

    flex: 65 / 6,
    justifyContent: 'flex-start',
    paddingBottom: 20,
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

    fontSize: 13,
    color: '#808080',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  fieldInput: {

    borderBottomWidth: 2,
    fontSize: 10,
    paddingLeft: 10,
    borderColor: '#cccccc',
    padding: 0.5,
    fontSize: 16,
    borderLeftColor: 'rgba(0, 0, 0, 0.1)',
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    height: 30
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