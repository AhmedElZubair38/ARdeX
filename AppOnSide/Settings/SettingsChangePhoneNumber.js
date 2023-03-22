import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import queries2 from "../Screens/appConnection/settings.js"  

function SettingsChangePhoneNumber() {

    // Initialize state variables for each text input field's border color
    const [oldpassBorderColor, setoldpassBorderColor] = useState('#000000');
    const [newpassBorderColor, setnewpassBorderColor] = useState('#000000');
    const [secondnewpassBorderColor, setsecondnewpassBorderColor] = useState('#000000');
    const [phone, setPhone] = useState('');
    const [confirmPhone, setConfirmPhone] = useState('');

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

    const onConfirm = async () => {
      if(confirmPhone !== phone){
        alert("Phone Numbers do not match")
        return
      } else {
        const changePhone = await queries2.changePhone(phone)
        alert("Phone Number Changed")
        console.log(changePhone)
        navigation.goBack();
      }
    }

  const navigation = useNavigation();

  
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'black'}}>
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
        <Text style={styles.header}>Change Phone Number</Text>
        
        {/* <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            <Text style={styles.fieldLabel}>Please enter your old Phone Number</Text>
            <TextInput
            placeholder="Old Phone Number"
            style={[styles.fieldInput, {fontSize: 12, paddingLeft: 10, paddingVertical: 5}]}
            borderBottomColor={oldpassBorderColor}
            onFocus={handleoldpassFocus}
            onBlur={handleoldpassBlur}
            />
        </View> */}

        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            <Text style={styles.fieldLabel}>Please enter your new Phone Number</Text>
            <TextInput
            placeholder="New Phone Number"
            style={[styles.fieldInput, { fontSize: 12, paddingLeft: 10, paddingVertical: 5 }]}
            borderBottomColor={newpassBorderColor}
            onFocus={handlenewpassFocus}
            onBlur={handlenewpassBlur}
            value={phone}
            onChangeText={setPhone}
            />
        </View>

        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
            <Text style={styles.fieldLabel}>Please re-enter your new PhoneNumber</Text>
            <TextInput
            placeholder="Re-Enter New Phone Number"
            style={[styles.fieldInput, { fontSize: 12, paddingLeft: 10, paddingVertical: 5}]}
            borderBottomColor={secondnewpassBorderColor}
            onFocus={handlesecondnewpassFocus}
            onBlur={handlesecondnewpassBlur}
            value={confirmPhone}
            onChangeText={setConfirmPhone}
            />
        </View>

        <View style={[styles.fieldContainer, { marginTop: 10 }]}>
            <Text style={styles.note}>Note: Make sure your new Phone Number is written in the format (5XXXXXXXX). We are already considering +971 as default</Text>
        </View>

        <View style={styles.confirmButton}>
            <TouchableOpacity onPress={onConfirm}>
                <Text style={{ color: 'black', fontSize: 21, fontWeight: 'bold'}} onPress={onConfirm}> Confirm Change</Text>
            </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({

    rectangle: {
      width: 320,
      height: 520,
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
        paddingTop: '7%',
        paddingBottom: '-1%',
        paddingLeft: '5%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#808080',
        textAlign: 'left'
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

export default SettingsChangePhoneNumber;