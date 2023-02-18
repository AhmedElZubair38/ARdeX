// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert } from "react-native";
// import { SocialIcon } from 'react-native-elements';
// import { useNavigation } from '@react-navigation/native';


// export default function LoginUpdated () {

// // Initialize state variables for each text input field's border color
// const [nameBorderColor, setNameBorderColor] = useState('#000000');
// const [passwordBorderColor, setPasswordBorderColor] = useState('#000000');

// // Event handlers for focusing and blurring the name text input field
// const handleNameFocus = () => {
//     setNameBorderColor('#00cc00');
//   };
//   const handleNameBlur = () => {
//     setNameBorderColor('#000000');
//   };

//   // Event handlers for focusing and blurring the password text input field
//   const handlePasswordFocus = () => {
//     setPasswordBorderColor('#00cc00');
//   };
//   const handlePasswordBlur = () => {
//     setPasswordBorderColor('#000000');
//   };

//   const navigation = useNavigation();

// return (
//     <View style={styles.parentContainer}> 
    
//     <Image
//     source={require('AppOnSide/Photos/transparent-logo.png')}
//     style={{ width: 250, height: 80, alignSelf: 'center', resizeMode: 'stretch', overflow: 'visible', marginTop: 130 }} />

//     <View style={styles.topContainer}></View>
//     <ScrollView>
//       <View style={styles.bottomContainer}>
//         <View style={[styles.fieldContainer, { marginTop: 30 }]}>
//             <Text style={styles.fieldLabel}>Username</Text>
//             <TextInput
//             placeholder="Username"
//             style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
//             borderBottomColor={nameBorderColor}
//             onFocus={handleNameFocus}
//             onBlur={handleNameBlur}
//             />
//         </View>
//         <View style={styles.fieldContainer}>
//             <Text style={styles.fieldLabel}>Password</Text>
//             <TextInput
//             placeholder="Password"
//             style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
//             borderBottomColor={passwordBorderColor}
//             onFocus={handlePasswordFocus}
//             onBlur={handlePasswordBlur}
//             secureTextEntry={true}
//             />
//         </View>

//         <TouchableOpacity style={styles.signUpButtonContainer} onPress={()=> navigation.navigate('BottomTabNavigator')}>
//             <Text style={{ color: 'white', fontSize: 23, padding: 10, textAlign: 'center' }}> LOG-IN </Text>
//         </TouchableOpacity>

//         <Text style={{ fontSize: 13, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20 }}> or Sign-in via </Text>

//         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//         <SocialIcon
//           type="google"
//           iconSize={34}
//           onPress={() => console.log('Sign up with Google')}
//           style={{ width: 60, height: 60, shadowColor: '#000', alignSelf: 'center', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.9, shadowRadius: 2, marginTop: 10 }}
//         />
//         {/* <SocialIcon
//           type="facebook"
//           iconSize={34}
//           onPress={() => console.log('Sign up with Facebook')}
//           style={{ width: 60, height: 60, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.9, shadowRadius: 2, marginTop: 10 }}
//         /> */}
//         </View>

//         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 16, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20, marginBottom: 30 }}> Don't have an account yet? </Text>
//         <Text 
//           onPress={()=> navigation.navigate('Register')} 
//           style={{ fontSize: 16, fontStyle: 'italic', color: '#FF4C68', textAlign: 'center', marginTop: 20, marginBottom: 30 }}> Sign up.
//         </Text>
//         </View>
//     </View>
//     </ScrollView>
//   </View>
    
// );
// }



// const styles = StyleSheet.create({

//     parentContainer: {

//         flex: 1,
//         backgroundColor: '#FF4C68'
//     },

//     topContainer: {

//         flex: 6000/6
//     },

//     bottomContainer: {

//         flex: 65/6,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         backgroundColor: '#FFFFFF',
//         borderTopLeftRadius: 60,
//         borderTopRightRadius: 60,
//         overflow: 'visible',
//     },

//     fieldContainer: {

//         width: '80%',
//         marginVertical: 7,
//         marginHorizontal: 10

//     },

//     fieldLabel: {

//         fontSize: 12,
//         color: '#808080',
//         marginBottom: 5,
//         fontWeight: 'bold',
//     },

//     fieldInput: {

//         borderWidth: 1,
//         borderBottomWidth: 2,
//         fontSize: 10, 
//         paddingLeft: 10,
//         borderColor: '#cccccc',
//         padding: 0.5,
//         fontSize: 16,
//         borderLeftColor: 'rgba(0, 0, 0, 0.1)',
//         borderRightColor: 'rgba(0, 0, 0, 0.1)',
//         borderTopColor: 'rgba(0, 0, 0, 0.1)'
//     },

//     signUpButtonContainer: {

//         backgroundColor: '#FF4C68',
//         borderRadius: 30,
//         marginTop: 20,
//         marginBottom: 10,
//         width: '80%',
//         height: 50,
//         alignSelf: 'center',
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.9,
//         shadowRadius: 2,
//         elevation: 2

//     }
// });


// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert } from "react-native";
// import { SocialIcon } from 'react-native-elements';
// import { useNavigation } from '@react-navigation/native';


// export default function LoginUpdated () {

// // Initialize state variables for each text input field's border color
// const [nameBorderColor, setNameBorderColor] = useState('#000000');
// const [passwordBorderColor, setPasswordBorderColor] = useState('#000000');

// // Event handlers for focusing and blurring the name text input field
// const handleNameFocus = () => {
//     setNameBorderColor('#00cc00');
//   };
//   const handleNameBlur = () => {
//     setNameBorderColor('#000000');
//   };

//   // Event handlers for focusing and blurring the password text input field
//   const handlePasswordFocus = () => {
//     setPasswordBorderColor('#00cc00');
//   };
//   const handlePasswordBlur = () => {
//     setPasswordBorderColor('#000000');
//   };

//   const navigation = useNavigation();

// return (
//     <View style={styles.parentContainer}> 
    
//     <Image
//     source={require('AppOnSide/Photos/transparent-logo.png')}
//     style={{ width: 250, height: 80, alignSelf: 'center', resizeMode: 'stretch', overflow: 'visible', marginTop: 130 }} />

//     <View style={styles.topContainer}></View>
//     <ScrollView>
//       <View style={styles.bottomContainer}>
//         <View style={[styles.fieldContainer, { marginTop: 30 }]}>
//             <Text style={styles.fieldLabel}>Username</Text>
//             <TextInput
//             placeholder="Username"
//             style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
//             borderBottomColor={nameBorderColor}
//             onFocus={handleNameFocus}
//             onBlur={handleNameBlur}
//             />
//         </View>
//         <View style={styles.fieldContainer}>
//             <Text style={styles.fieldLabel}>Password</Text>
//             <TextInput
//             placeholder="Password"
//             style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
//             borderBottomColor={passwordBorderColor}
//             onFocus={handlePasswordFocus}
//             onBlur={handlePasswordBlur}
//             secureTextEntry={true}
//             />
//         </View>

//         <TouchableOpacity style={styles.signUpButtonContainer} onPress={()=> navigation.navigate('BottomTabNavigator')}>
//             <Text style={{ color: 'white', fontSize: 23, fontFamily: 'fax', padding: 10, textAlign: 'center' }}> LOG-IN </Text>
//         </TouchableOpacity>

//         <Text style={{ fontSize: 13, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20 }}> or Sign-in via </Text>

//         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//         <SocialIcon
//           type="google"
//           iconSize={34}
//           onPress={() => console.log('Sign up with Google')}
//           style={{ width: 60, height: 60, shadowColor: '#000', alignSelf: 'center', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.9, shadowRadius: 2, marginTop: 10 }}
//         />
//         {/* <SocialIcon
//           type="facebook"
//           iconSize={34}
//           onPress={() => console.log('Sign up with Facebook')}
//           style={{ width: 60, height: 60, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.9, shadowRadius: 2, marginTop: 10 }}
//         /> */}
//         </View>

//         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 16, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20, marginBottom: 30 }}> Don't have an account yet? </Text>
//         <Text 
//           onPress={()=> navigation.navigate('Register')} 
//           style={{ fontSize: 16, fontStyle: 'italic', color: '#FF4C68', textAlign: 'center', marginTop: 20, marginBottom: 30 }}> Sign up.
//         </Text>
//         </View>
//     </View>
//     </ScrollView>
//   </View>
    
// );
// }



// const styles = StyleSheet.create({

//     parentContainer: {

//         flex: 1,
//         backgroundColor: '#FF4C68'
//     },

//     topContainer: {

//         flex: 6000/6
//     },

//     bottomContainer: {

//         flex: 65/6,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         backgroundColor: '#FFFFFF',
//         borderTopLeftRadius: 60,
//         borderTopRightRadius: 60,
//         overflow: 'visible',
//     },

//     fieldContainer: {

//         width: '80%',
//         marginVertical: 7,
//         marginHorizontal: 10

//     },

//     fieldLabel: {

//         fontSize: 12,
//         color: '#808080',
//         marginBottom: 5,
//         fontWeight: 'bold',
//         fontFamily: 'Roboto',
//     },

//     fieldInput: {

//         borderWidth: 1,
//         borderBottomWidth: 2,
//         fontSize: 10, 
//         paddingLeft: 10,
//         fontFamily: 'Roboto',
//         borderColor: '#cccccc',
//         padding: 0.5,
//         fontSize: 16,
//         borderLeftColor: 'rgba(0, 0, 0, 0.1)',
//         borderRightColor: 'rgba(0, 0, 0, 0.1)',
//         borderTopColor: 'rgba(0, 0, 0, 0.1)'
//     },

//     signUpButtonContainer: {

//         backgroundColor: '#FF4C68',
//         borderRadius: 30,
//         marginTop: 20,
//         marginBottom: 10,
//         width: '80%',
//         height: 50,
//         alignSelf: 'center',
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.9,
//         shadowRadius: 2,
//         elevation: 2

//     }
// });

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert } from "react-native";
import { SocialIcon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import app from "./firebaseConfig";
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
        source={require('../Photos/transparent-logo.png')}
        style={{ width: '60%', height: '10%', alignSelf: 'center', resizeMode: 'stretch', overflow: 'visible', marginTop: 130 }} />

      <View style={styles.topContainer}></View>
      <ScrollView>
        <View style={styles.bottomContainer}>
          <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            <Text style={styles.fieldLabel}>Email</Text>
            <TextInput
              placeholder="Email"
              style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
              borderBottomColor={nameBorderColor}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Password</Text>
            <TextInput
              placeholder="Password"
              style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
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
            <Text style={{ color: 'white', fontSize: 23, padding: 10, fontFamily: 'fax', textAlign: 'center' }}> LOG-IN </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 13, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20 }}> or Sign-in via </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <SocialIcon
              type="google"
              iconSize={34}
              onPress={() => console.log('Sign up with Google')}
              style={{ width: 60, height: 60, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.9, shadowRadius: 2, marginRight: 20, marginTop: 10 }}
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
      </ScrollView>
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

    flex: 65 / 6,
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

    fontSize: 13,
    color: '#808080',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  fieldInput: {

    borderWidth: 1,
    borderBottomWidth: 2,
    fontSize: 10,
    paddingLeft: 10,
    borderColor: '#cccccc',
    padding: 0.5,
    fontSize: 16,
    borderLeftColor: 'rgba(0, 0, 0, 0.1)',
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    height: 30,
  },

  signUpButtonContainer: {

    backgroundColor: '#FF4C68',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 10,
    width: '80%',
    height: 50,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2

  }
});