import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import queries1 from "../Screens/appConnection/register.js"  
import queries2 from "../Screens/appConnection/settings.js"  

function SettingsChangeUsername(props) {

  const mainUserId = props.route.params.mainUserId

    // Initialize state variables for each text input field's border color
const [nameBorderColor, setNameBorderColor] = useState('#000000');
const [passwordBorderColor, setPasswordBorderColor] = useState('#000000');
const [newUsername, setNewUsername] = useState('');

const handleOnChangeText = (text) => {
    setNewUsername(text);
    console.log(text)
  };

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

  const navigation = useNavigation();

  const onClick = async () => {
    if (newUsername.length < 6) {
      alert("Username should be 6 or more characters")
      return
    } 
    const usernameCheck = await queries1.checkUsername(newUsername)
    if (usernameCheck===false){
      alert("Username Already in use")
      return
    } else {
      const changeUsername = await queries2.changeUsername(mainUserId, newUsername)
      alert("Username Changed")
      console.log(changeUsername)
      navigation.goBack();
  }
  }

  
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style = {styles.pageHead}>
          <TouchableOpacity onPress={()=> navigation.goBack()} >
            <Icon style={{ color: 'white', paddingTop: 25, paddingLeft: 20}} size={30} name={Platform.OS === 'ios' ? 'ios-caret-back-outline' : 'caret-back'}/>
          </TouchableOpacity>
          <Text style={styles.headerSettings}>Settings</Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={styles.rectangle}>
        <Text style={styles.header}>Change Username</Text>
        
        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            <Text style={styles.fieldLabel}>Please enter your new prefered Username</Text>
            <TextInput
              placeholder="New Username"
              style={[styles.fieldInput, { fontSize: 14, paddingLeft: 10, paddingVertical: 5}]}
              borderBottomColor={nameBorderColor}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              value={newUsername}
              onChangeText={handleOnChangeText}
              autoCapitalize="none"

            />
        </View>

        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            <Text style={styles.note}>Note: Your new username will only be aproved if it is not in use by some other user.</Text>
        </View>

        <View style={styles.confirmButton}>
            <TouchableOpacity onPress={onClick}>
                <Text style={{ color: 'black', fontSize: 21, fontWeight: 'bold'}}> Confirm Change</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

    rectangle: {
      width: 320,
      height: 600,
      borderRadius: 35,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: 'white',
      alignSelf: 'center',
      position: 'absolute',
      top: '12%',
      justifyContent: 'center',
      justifyContent: 'flex-start'
    },

    backButton: {
        width: 220,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#FF4C68',
        alignSelf: 'center',
        position: 'absolute',
        top: '85%',
        alignItems: 'center',
        justifyContent: 'center'
      },

      confirmButton: {
        width: 220,
        height: 50,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#FF4C68',
        alignSelf: 'center',
        position: 'absolute',
        top: '85%',
        alignItems: 'center',
        justifyContent: 'center'
      },

      text: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        paddingTop: '10%',
        
      },

      header: {
        paddingTop: '10%',
        paddingBottom: '-1%',
        paddingLeft: '5%',
        fontSize: 26,
        color: '#808080',
        textAlign: 'left',
        fontWeight: 'bold',
      },

      headerSettings: {
        fontWeight: 'bold',
        paddingTop: '7%',
        paddingBottom: '-1%',
        paddingLeft: '5%',
        fontSize: 32,
        color: '#FFFFFF',
        textAlign: 'left'
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

    },

    fieldLabel: {

        fontSize: 14,
        color: '#808080',
        marginBottom: 5,
        fontWeight: 'bold',
    },

    note: {

        fontSize: 14,
        color: 'red',
        marginBottom: 5,
        fontWeight: 'bold',
    },

    fieldContainer: {

        marginVertical: 7,
        marginHorizontal: 20

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

    pageHead: {
      backgroundColor: 'black',
      paddingLeft: 10,
      paddingTop: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    headerSettings: {
      paddingTop: '7%',
      paddingBottom: '-1%',
      paddingLeft: '5%',
      fontSize: 32,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'left'
    },
  });

export default SettingsChangeUsername;