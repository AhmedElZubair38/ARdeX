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
        <Text style={styles.headerSettings}>Settings</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={styles.rectangle}>
        <Text style={styles.header}>Delete Account</Text>

        <View style={{ marginTop: 30, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.fieldLabel}> Influencer's Account </Text>
          <Switch
          style={{ marginLeft: 'auto' }} 
          value={isSwitchOn} 
          onValueChange={() => setIsSwitchOn(!isSwitchOn)}
          trackColor={{false: '#767577', true: '#808080'}}
          thumbColor={isSwitchOn ? '#FF4C68' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          />
          
        </View>

        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
          <Text style={styles.note}>Note: When switching to an Influencer's account, you'll have the privileges of being an influencer. You'll need to have a minimum of 150 followers to be able to change your Account Type.</Text>
        </View>

        <View style={styles.confirmButton}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Text style={{ color: 'black', fontSize: 21, fontWeight: 'bold'}}> Confirm Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.backButton}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold'}}> <Icon style={{ color: 'black', paddingTop: '5%'}} size={21} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'md-caret-back'}/> Go Back </Text>
        </TouchableOpacity>
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
        fontFamily: 'Roboto',
        paddingRight: '10%',
    },

    note: {

        fontSize: 14,
        color: 'red',
        marginBottom: 5,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    fieldContainer: {

        marginHorizontal: 20

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
  });

export default SettingsDeleteAccount;