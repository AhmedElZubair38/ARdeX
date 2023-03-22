import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


function SettingsChangePassword() {

    // Initialize state variables for each text input field's border color
const [oldpassBorderColor, setoldpassBorderColor] = useState('#000000');
const [newpassBorderColor, setnewpassBorderColor] = useState('#000000');
const [secondnewpassBorderColor, setsecondnewpassBorderColor] = useState('#000000');
const [emailBorderColor, setemailBorderColor] = useState('#000000');

// Event handlers for focusing and blurring the name text input field
const handleoldpassFocus = () => {
    setoldpassBorderColor('#00cc00');
  };
  const handleoldpassBlur = () => {
    setoldpassBorderColor('#000000');
  };

  // Event handlers for focusing and blurring the name text input field
const handlenewpassFocus = () => {
  setnewpassBorderColor('#00cc00');
};
const handlenewpassBlur = () => {
  setnewpassBorderColor('#000000');
};

// Event handlers for focusing and blurring the name text input field
const handlesecondnewpassFocus = () => {
  setsecondnewpassBorderColor('#00cc00');
};
const handlesecondnewpassBlur = () => {
  setsecondnewpassBorderColor('#000000');
};

// Event handlers for focusing and blurring the name text input field
const handleEmailFocus = () => {
  setsecondnewpassBorderColor('#00cc00');
};
const handleEmailBlur = () => {
  setsecondnewpassBorderColor('#000000');
};

  const navigation = useNavigation();

  
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
      <Text style={styles.header}>Enter your e-mail</Text>
        
        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            <Text style={styles.fieldLabel}>Please enter your e-mail</Text>
            <TextInput
            placeholder="e-mail"
            style={[styles.fieldInput, { fontSize: 12, paddingLeft: 10, paddingVertical: 5}]}
            borderBottomColor={oldpassBorderColor}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            />
        </View>

        <Text style={styles.header}>Change Password</Text>
        
        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            <Text style={styles.fieldLabel}>Please enter your old password</Text>
            <TextInput
            placeholder="Old Password"
            style={[styles.fieldInput, { fontSize: 12, paddingLeft: 10, paddingVertical: 5}]}
            borderBottomColor={oldpassBorderColor}
            onFocus={handleoldpassFocus}
            onBlur={handleoldpassBlur}
            />
        </View>

        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            <Text style={styles.fieldLabel}>Please enter your new password</Text>
            <TextInput
            placeholder="New Password"
            style={[styles.fieldInput, { fontSize: 12, paddingLeft: 10, paddingVertical: 5}]}
            borderBottomColor={newpassBorderColor}
            onFocus={handlenewpassFocus}
            onBlur={handlenewpassBlur}
            />
        </View>

        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            <Text style={styles.fieldLabel}>Please re-enter your new password</Text>
            <TextInput
            placeholder="Re-Enter New Password"
            style={[styles.fieldInput, { fontSize: 12, paddingLeft: 10, paddingVertical: 5}]}
            borderBottomColor={secondnewpassBorderColor}
            onFocus={handlesecondnewpassFocus}
            onBlur={handlesecondnewpassBlur}
            />
        </View>

        <View style={[styles.fieldContainer, { marginTop: 10 }]}>
            <Text style={styles.note}>Note: Your new username will only be aproved if the username is not in use by some other user.</Text>
        </View>

        <View style={styles.confirmButton}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold'}}> Confirm Change</Text>
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
        fontSize: 24,
        color: '#808080',
        textAlign: 'left',
        fontWeight: 'bold',
      },

      headerSettings: {
        paddingTop: '7%',
        paddingBottom: '-1%',
        paddingLeft: '5%',
        fontSize: 34,
        fontWeight: 'bold',
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

export default SettingsChangePassword;