import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert } from "react-native";
import { SocialIcon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function Register () {

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

return (
  
    <View style={styles.parentContainer}> 
    
    <Image
    source={require('AppOnSide/Photos/transparent-logo.png')}
    style={{ width: 250, height: 80, alignSelf: 'center', resizeMode: 'stretch', overflow: 'visible', marginTop: 30 }} />

    <View style={styles.topContainer}></View>
    <ScrollView>
      <View style={styles.bottomContainer}>
        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
        {/* {error && <Text style={{ color: '#FF4C68', fontSize: 10, alignSelf: 'center', }}>{error}</Text>} */}
            <Text style={styles.fieldLabel}>Name</Text>
            <TextInput
            placeholder="Name"
            style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
            borderBottomColor={nameBorderColor}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            />
        </View>
        <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Email ID</Text>
            <TextInput
            placeholder="Email ID"
            style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
            borderBottomColor={emailBorderColor}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            // value={email}
            // onChangeText={(value) => handleInputChange('email', value)}
            />
        </View>
        <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Phone Number</Text>
            <TextInput
            placeholder="Phone Number"
            style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
            borderBottomColor={phoneBorderColor}
            onFocus={handlePhoneFocus}
            onBlur={handlePhoneBlur}
            // value={phone}
            // onChangeText={(value) => handleInputChange('phone', value)}
            />
        </View>
        <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Username</Text>
            <TextInput
            placeholder="Username"
            style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
            borderBottomColor={usernameBorderColor}
            onFocus={handleUsernameFocus}
            onBlur={handleUsernameBlur}
            // value={username}
            // onChangeText={(value) => handleInputChange('username', value)}
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
            // value={password}
            // onChangeText={(value) => handleInputChange('phone', value)}
            />
        </View>
        <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}> Confirm Password</Text>
            <TextInput
            placeholder="Confirm Password"
            style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
            borderBottomColor={confPasswordBorderColor}
            onFocus={handleconfPasswordFocus}
            onBlur={handleconfPasswordBlur}  
            secureTextEntry={true}
            />
        </View>

        <TouchableOpacity style={styles.signUpButtonContainer} /*onPress={()=> handleInputChange()}*/  onPress={()=> navigation.navigate('VerifyEmail')}>
            <Text style={{ color: 'white', fontSize: 23, padding: 10, fontFamily: 'fax', textAlign: 'center' }}> SIGN UP </Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 13, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20 }}> or Signup via </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <SocialIcon
          type="google"
          iconSize={34}
          onPress={() => console.log('Sign up with Google')}
          style={{ width: 60, height: 60, shadowColor: '#000', alignSelf: 'center', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.9, shadowRadius: 2, marginTop: 10 }}
        />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20, marginBottom: 30 }}> Already have an account? </Text>
        <Text 
          onPress={()=> navigation.navigate('LoginUpdated')} 
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
        backgroundColor: '#FF4C68'
    },

    topContainer: {

        flex: 67/6
    },

    bottomContainer: {

        flex: 65/6,
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

        fontSize: 12,
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
        borderTopColor: 'rgba(0, 0, 0, 0.1)'
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




    


  



//   return (
//     <View style={styles.parentContainer}>

//       <Image
//         source={require('../Photos/transparent-logo.png')}
//         style={{ width: 250, height: 80, alignSelf: 'center', resizeMode: 'stretch', overflow: 'visible', marginTop: 30 }} />

//       <View style={styles.topContainer}></View>
//       <ScrollView>
//         <View style={styles.bottomContainer}>
//           <View style={[styles.fieldContainer, { marginTop: 30 }]}>
//             {/* {error && <Text style={{ color: '#FF4C68', fontSize: 10, alignSelf: 'center', }}>{error}</Text>} */}
//             <Text style={styles.fieldLabel}>Name</Text>
//             <TextInput
//               // onChangeText={text => handleOnchange(text, 'name')}
//               // onFocus={() => {handleError(null, 'name'); handleNameFocus();}}
//               placeholder="Name"
//               style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
//               borderBottomColor={nameBorderColor}
//               onFocus={handleNameFocus}
//               onBlur={handleNameBlur}
//               // error={errors.borderTopColor}
//               onChangeText={text => setName(text)}
//             />
//           </View>
//           <View style={styles.fieldContainer}>
//             <Text style={styles.fieldLabel}>Email ID</Text>
//             <TextInput
//               placeholder="Email ID"
//               style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
//               borderBottomColor={emailBorderColor}
//               onFocus={handleEmailFocus}
//               onBlur={handleEmailBlur}
//               // value={email}
//               // onChangeText={(value) => handleInputChange('email', value)}
//               onChangeText={text => setEmail(text)}

//             />
//           </View>

//           <View style={styles.fieldContainer}>
//             <Text style={styles.fieldLabel}>Username</Text>
//             <TextInput
//               placeholder="Username"
//               style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
//               borderBottomColor={usernameBorderColor}
//               onFocus={handleUsernameFocus}
//               onBlur={handleUsernameBlur}
//               onChangeText={text => setUsername(text)}
//             // value={username}
//             // onChangeText={(value) => handleInputChange('username', value)}
//             />
//           </View>
//           <View style={styles.fieldContainer}>
//             <Text style={styles.fieldLabel}>Password</Text>
//             <TextInput
//               placeholder="Password"
//               style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
//               borderBottomColor={passwordBorderColor}
//               onFocus={handlePasswordFocus}
//               onBlur={handlePasswordBlur}
//               secureTextEntry={true}
//               onChangeText={text => setPassword(text)}
//             // value={password}
//             // onChangeText={(value) => handleInputChange('phone', value)}
//             />
//           </View>
//           <View style={styles.fieldContainer}>
//             <Text style={styles.fieldLabel}> Confirm Password</Text>
//             <TextInput
//               placeholder="Confirm Password"
//               style={[styles.fieldInput, { fontSize: 10, paddingLeft: 10 }]}
//               borderBottomColor={confPasswordBorderColor}
//               onFocus={handleconfPasswordFocus}
//               onBlur={handleconfPasswordBlur}
//               secureTextEntry={true}
//               onChangeText={text => setConfirmPassword(text)}

//             />
//           </View>

//           <TouchableOpacity style={styles.signUpButtonContainer} onPress={handleSubmit}>
//             <Text style={{ color: 'white', fontSize: 23, padding: 10, textAlign: 'center' }}> SIGN UP </Text>
//           </TouchableOpacity>

//           <Text style={{ fontSize: 13, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20 }}> or Signup via </Text>

//           <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//             <SocialIcon
//               type="google"
//               iconSize={34}
//               onPress={() => console.log('Sign up with Google')}
//               style={{ width: 60, height: 60, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.9, shadowRadius: 2, marginRight: 20, marginTop: 10 }}
//             />
//             <SocialIcon
//               type="facebook"
//               iconSize={34}
//               onPress={() => console.log('Sign up with Facebook')}
//               style={{ width: 60, height: 60, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.9, shadowRadius: 2, marginTop: 10 }}
//             />
//           </View>

//           <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//             <Text style={{ fontSize: 16, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20, marginBottom: 30 }}> Already have an account? </Text>
//             <Text
//               onPress={() => navigation.navigate('LoginUpdated')}
//               style={{ fontSize: 16, fontStyle: 'italic', color: '#FF4C68', textAlign: 'center', marginTop: 20, marginBottom: 30 }}>Sign in.
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </View>

//   );
// }



// const styles = StyleSheet.create({

//   parentContainer: {

//     flex: 1,
//     backgroundColor: '#FF4C68'
//   },

//   topContainer: {

//     flex: 67 / 6
//   },

//   bottomContainer: {

//     flex: 65 / 6,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderTopLeftRadius: 60,
//     borderTopRightRadius: 60,
//     overflow: 'visible',
//   },

//   fieldContainer: {

//     width: '80%',
//     marginVertical: 7,
//     marginHorizontal: 10

//   },

//   fieldLabel: {

//     fontSize: 12,
//     color: '#808080',
//     marginBottom: 5,
//     fontWeight: 'bold',
//     fontFamily: 'Roboto'
//   },

//   fieldInput: {

//     borderWidth: 1,
//     borderBottomWidth: 2,
//     fontSize: 10,
//     paddingLeft: 10,
//     fontFamily: 'Roboto',
//     borderColor: '#cccccc',
//     padding: 0.5,
//     fontSize: 16,
//     borderLeftColor: 'rgba(0, 0, 0, 0.1)',
//     borderRightColor: 'rgba(0, 0, 0, 0.1)',
//     borderTopColor: 'rgba(0, 0, 0, 0.1)'
//   },

//   signUpButtonContainer: {

//     backgroundColor: '#FF4C68',
//     borderRadius: 30,
//     marginTop: 20,
//     marginBottom: 10,
//     width: '80%',
//     height: 50,
//     alignSelf: 'center',
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.9,
//     shadowRadius: 2,
//     elevation: 2

//   }
// });