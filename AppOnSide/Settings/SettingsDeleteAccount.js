import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


function SettingsDeleteAccount() {

    const [isSwitchOn, setIsSwitchOn] = useState(false);
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
        <Text style={styles.header}>Delete Account</Text>

        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
          <Text style={styles.note}>Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted</Text>
        </View>

        <View style={styles.confirmButton}>
          <TouchableOpacity onPress={()=> navigation.navigate('LoginUpdated')}>
            <Text style={{ color: 'black', fontSize: 21, fontWeight: 'bold'}}> Confirm Deletion</Text>
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
        fontWeight: 'bold',
        color: '#808080',
        textAlign: 'left'
      },

      headerSettings: {
        fontWeight: 'bold',
        paddingTop: '7%',
        paddingBottom: '-1%',
        paddingLeft: '5%',
        fontSize: 34,
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

        fontSize: 18,
        color: '#808080',
        marginBottom: 5,
        fontWeight: 'bold',
        paddingRight: '10%',
    },

    note: {

        fontSize: 16,
        textAlign: 'center',
        color: 'red',
        marginBottom: 5,
        fontWeight: 'bold',
    },

    fieldContainer: {

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

export default SettingsDeleteAccount;