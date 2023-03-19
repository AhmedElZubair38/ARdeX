import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const profileData = {
  handle: '@TheWeeknd',
  name: 'The Weeknd',
  profilePic: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
}

function ReportCommentHomeScreen() {

  const navigation = useNavigation();

  const [selectedButtons, setSelectedButtons] = useState([]);

  const toggleButton = (button) => {
    const buttons = [...selectedButtons];
    const index = buttons.indexOf(button);
    if (index > -1) {
      buttons.splice(index, 1);
    } else {
      buttons.push(button);
    }
    setSelectedButtons(buttons);
  };

  const isButtonSelected = (button) => selectedButtons.indexOf(button) > -1;

  return (
    
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={styles.headerSettings}>Report</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={styles.rectangle}>
        <Text style={styles.header}>Report Comment</Text>

        <View>
                <Text style={styles.text}>Why are you reporting {profileData.name}'s Comment?</Text>
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 25, paddingLeft: 10}}>

        <View style={[styles.meow2, { marginRight: 10, backgroundColor: isButtonSelected('button1') ? 'green' : '#FF4C68' }]}>
          <TouchableOpacity onPress={()=> toggleButton('button1')}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold'}}> Spam </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.meow2, { backgroundColor: isButtonSelected('button2') ? 'green' : '#FF4C68' }]}>
        <TouchableOpacity onPress={()=> toggleButton('button2')}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold'}}>  Hate Speech </Text>
          </TouchableOpacity>
        </View>
          
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10, paddingLeft: 10}}>

        <View style={[styles.meow2, { marginRight: 10, backgroundColor: isButtonSelected('button3') ? 'green' : '#FF4C68' }]}>
        <TouchableOpacity onPress={()=> toggleButton('button3')}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold'}}> Bot Activity </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.meow2, { backgroundColor: isButtonSelected('button4') ? 'green' : '#FF4C68' }]}>
        <TouchableOpacity onPress={()=> toggleButton('button4')}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold'}}> Scam or Fraud </Text>
          </TouchableOpacity>
        </View>
          
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10, paddingLeft: 10}}>

        <View style={[styles.meow2, { marginRight: 10, backgroundColor: isButtonSelected('button5') ? 'green' : '#FF4C68' }]}>
        <TouchableOpacity onPress={()=> toggleButton('button5')}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold'}}> Discriminatory </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.meow2, { backgroundColor: isButtonSelected('button6') ? 'green' : '#FF4C68' }]}>
        <TouchableOpacity onPress={()=> toggleButton('button6')}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold'}}> Harrassment </Text>
          </TouchableOpacity>
        </View>
          
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10, paddingLeft: 10}}>

        <View style={[styles.meow2, { marginRight: 10, backgroundColor: isButtonSelected('button7') ? 'green' : '#FF4C68' }]}>
        <TouchableOpacity onPress={()=> toggleButton('button7')}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold'}}> Inappropriate </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.meow2, { backgroundColor: isButtonSelected('button8') ? 'green' : '#FF4C68' }]}>
        <TouchableOpacity onPress={()=> toggleButton('button8')}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold'}}> Off-Topic </Text>
          </TouchableOpacity>
        </View>
          
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10, paddingLeft: 10}}>

        <View style={[styles.meow2, { marginRight: 10, backgroundColor: isButtonSelected('button9') ? 'green' : '#FF4C68' }]}>
        <TouchableOpacity onPress={()=> toggleButton('button9')}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold'}}> Phishing </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.meow2, { backgroundColor: isButtonSelected('button10') ? 'green' : '#FF4C68' }]}>
        <TouchableOpacity onPress={()=> toggleButton('button10')}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold'}}> Threatening </Text>
          </TouchableOpacity>
        </View>
          
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20, paddingLeft: 10}}>

        <View style={styles.meow3}> 
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold'}}> Report </Text>
          </TouchableOpacity>
        </View>
          
        </View>

      </View>

      <View style={styles.meow}> 
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
      height: 545,
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

    meow: {
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
        justifyContent: 'center',
        marginTop: '3%'

      },

      meow2: {
        width: 135,
        height: 50,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#FF4C68',
        alignSelf: 'center',
        absolute: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
      },

      meow3: {
        width: 150,
        height: 50,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#808080',
        alignSelf: 'center',
        absolute: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
      },

      text: {
        fontSize: 17,
        color: 'black',
        textAlign: 'center',
        paddingTop: '10%', 
        fontWeight: 'bold'
      },

      header: {
        fontSize: 24, 
        fontWeight: 'bold',
        paddingTop: '10%',
        paddingBottom: '-1%',
        paddingLeft: '5%',
        color: '#808080',
        textAlign: 'left'
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

    profileBox: {
      padding: 20,
      paddingLeft: 5,
      marginTop: 20,
      marginLeft: 30,
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#808080',
      width: '80%',
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 2,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },

    userButton: {
      flexDirection: 'row',
    },

    description: {
      fontSize: 18,
      color: '#ffffff',
      marginLeft: 10,
      alignSelf: 'center',
    },

    image: {
      width: 50,
      height: 50,
      borderRadius: 100,
      borderColor: 'black',
      borderWidth: 1
    },

    notificationList: {
      marginTop: 60,
      padding: 15,
    },
  });

export default ReportCommentHomeScreen;