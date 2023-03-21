import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


function SettingsAbout() {

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
        <Text style={styles.header}>About</Text>
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            ARdeX.
          </Text>
          <Text>Version 1.0.0</Text>
          <Text>Copyright © 2022 AR Solutions</Text>
          <Text>All rights reserved.</Text>
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

      text: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        paddingTop: '10%',
        
      },

      header: {
        paddingTop: '10%',
        paddingBottom: '-1%',
        paddingLeft: '10%',
        fontSize: 26,
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

export default SettingsAbout;




{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        My Social Media App
      </Text>
      <Text>Version 1.0.0</Text>
      <Text>Copyright © 2021 MyCompany</Text>
      <Text>All rights reserved.</Text>
    </View> */}