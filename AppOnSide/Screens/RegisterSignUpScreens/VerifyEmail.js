import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function VerifyEmail () {
  
  const navigation = useNavigation();

  const [otp, setOtp] = useState('');
  const inputs = useRef([]);

  const handleSubmit = () => {
    console.log("OTP:", otp);
  };

return (
    <View style={styles.parentContainer}> 
    
    <Image
    source={require('AppOnSide/Photos/transparent-logo.png')}
    style={{ width: 250, height: 80, alignSelf: 'center', resizeMode: 'stretch', overflow: 'visible', marginTop: 130 }} />

    <View style={styles.topContainer}></View>
    <ScrollView>
      <View style={styles.bottomContainer}>
        
      <Text style={{ fontSize: 23, fontFamily: 'MontserratAlternates-SemiBoldItalic', color: '#000000', textAlign: 'center', paddingTop: 15, marginTop: 20, marginBottom: 10 }}> Verify Your Email </Text>

      <Text style={{ fontSize: 16, fontStyle: 'italic', color: '#808080', textAlign: 'left', marginBottom: 50 }}> We sent an OTP to your E-mail </Text>

      <Text style={{ fontSize: 14, color: '#000000', textAlign: 'center', marginBottom: 10}}> Enter your OTP</Text>

      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpBox}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            if (text.length === 1) {
              setOtp(otp + text);
            } else {
              setOtp(otp.slice(0, -1) + text);
            }
          }}
          value={otp[0]}
          ref={input => {
            inputs.current[0] = input;
          }}
          onSubmitEditing={() => {
            inputs.current[1].focus();
          }}
        />
        <TextInput
          style={styles.otpBox}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            if (text.length === 1) {
              setOtp(otp.slice(0, 1) + text + otp.slice(2));
            } else {
              setOtp(otp.slice(0, 1) + text + otp.slice(3));
            }
          }}
          value={otp[1]}
          ref={input => {
            inputs.current[1] = input;
          }}
          onSubmitEditing={() => {
            inputs.current[2].focus();
          }}
        />
        <TextInput
          style={styles.otpBox}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            if (text.length === 1) {
              setOtp(otp.slice(0, 2) + text + otp.slice(3));
            } else {
              setOtp(otp.slice(0, 2) + text + otp.slice(4));
            }
          }}
          value={otp[2]}
          ref={input => {
            inputs.current[2] = input;
          }}
          onSubmitEditing={() => {
            inputs.current[3].focus();
          }}
        />
        <TextInput
          style={styles.otpBox}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            if (text.length === 1) {
              setOtp(otp.slice(0, 3) + text);
            } else {
              setOtp(otp.slice(0, 3) + text);
            }
          }}
          value={otp[3]}
          ref={input => {
            inputs.current[3] = input;
          }}
          onSubmitEditing={handleSubmit}
        />
      </View>


      <TouchableOpacity style={styles.signUpButtonContainer} onPress={()=> navigation.navigate('LoginUpdated')}>
          <Text style={{ color: 'white', fontSize: 23, fontFamily: 'fax', padding: 10, textAlign: 'center' }}> NEXT </Text>
      </TouchableOpacity>


    {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}> */}
      <Text style={{ fontSize: 14, fontStyle: 'italic', color: '#808080', textAlign: 'center', marginTop: 20}}> user@email.com is not your email?</Text>
      <Text 
        onPress={()=> navigation.navigate('Register')} 
        style={{ fontSize: 14, fontStyle: 'italic', color: '#FF4C68', textAlign: 'center', marginBottom: 30 }}> Change it here.
      </Text>
    {/* </View> */}

    
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

        flex: 6000/6
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
        fontFamily: 'Roboto'
    },

    fieldInput: {

        borderWidth: 1,
        borderBottomWidth: 2,
        fontSize: 10, 
        paddingLeft: 10,
        fontFamily: 'Roboto',
        borderColor: '#cccccc',
        padding: 0.5,
        fontSize: 16,
        borderLeftColor: 'rgba(0, 0, 0, 0.1)',
        borderRightColor: 'rgba(0, 0, 0, 0.1)',
        borderTopColor: 'rgba(0, 0, 0, 0.1)'
    },

    otpContainer: {
      flexDirection: 'row',
    },

    otpBox: {
      width: 50,
      height: 70,
      borderWidth: 1,
      borderColor: '#737373',
      borderRadius: 20,
      margin: 10,
      textAlign: 'center',
      fontSize: 20,
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
