import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


function SettingsBlockedUsers() {

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const navigation = useNavigation();

    const [isFilled, setIsFilled] = useState(false);
    const [isFilled2, setIsFilled2] = useState(false);

return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Text style={styles.headerSettings}>Settings</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={styles.rectangle}>
        <Text style={styles.header}> Blocked Users </Text>

        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.headerLeft}>
                        <Image
                        style={styles.userImage}
                        source={{uri: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg'
                        }}/>
                        <Text style={styles.userName}> khalido </Text>
                    </View>
                    <View style={styles.headerRight}>
                    <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-ellipsis-horizontal' : 'ellipsis-horizontal'}/>
                    </View >
                </View>
            </View>
        </View>

        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.headerLeft}>
                        <Image
                        style={styles.userImage}
                        source={{uri: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg'
                        }}/>
                        <Text style={styles.userName}> zifto </Text>
                    </View>
                    <View style={styles.headerRight}>
                    <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-ellipsis-horizontal' : 'ellipsis-horizontal'}/>
                    </View >
                </View>
            </View>
        </View>

        <View style={styles.confirmButton}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Text style={{ color: 'black', fontSize: 20, fontFamily: 'fax'}}> Confirm Changes </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.backButton}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Text style={{ color: 'black', fontSize: 20, fontFamily: 'fax'}}> <Icon style={{ color: 'black', paddingTop: '5%'}} size={21} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'md-caret-back'}/> Go Back </Text>
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
        fontFamily: 'fax',
        paddingTop: '10%',
        paddingBottom: '-1%',
        paddingLeft: '5%',
        fontSize: 22,
        fontStyle: 'bold',
        color: '#808080',
        textAlign: 'left'
      },

      headerSettings: {
        fontFamily: 'fax',
        paddingTop: '7%',
        paddingBottom: '-1%',
        paddingLeft: '5%',
        fontSize: 32,
        fontStyle: 'bold',
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

    container: {

      backgroundColor: '#fff'
  },

  card: {
      backgroundColor: '#ddd',
      padding: 10,
      margin: 10,
      borderRadius: 10,
  },

  cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },

  headerLeft: {
      flexDirection: 'row',
  },

  userImage: {
      width: 50,
      height: 50,
      borderRadius: 50/2
  },

  userName: {
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 15,
      fontSize: 17
  },

  icon: {
    fontSize: 20,
    color: 'grey',
    marginTop: 15
  },
  
  });

export default SettingsBlockedUsers;