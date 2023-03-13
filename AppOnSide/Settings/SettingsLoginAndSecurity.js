import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


function SettingsLoginAndSecurity() {

  const navigation = useNavigation();

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={styles.headerSettings}>Settings</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={styles.rectangle}>
        <Text style={styles.header}>Log-in & Security</Text>
        
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: '7%'}}>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={18} name={Platform.OS === 'ios' ? 'ios-person' : 'person'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('SettingsChangeUsername')}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', padding: 13, paddingLeft: 5, paddingRight: 60, textAlign: 'center' }}> Change Username </Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-key' : 'md-key'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('SettingsChangePassword')}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', padding: 13, paddingLeft: 5, paddingRight: 60, textAlign: 'center' }}> Change Password </Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

        {/* <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={18} name={Platform.OS === 'ios' ? 'ios-contacts' : 'mail'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('VerifyEmail')}>
            <Text style={{ color: 'black', fontSize: 16, fontFamily: 'fax', padding: 13, paddingLeft: 5, paddingRight: 70, textAlign: 'center' }}> Change Email ID </Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View> */}

        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={19} name={Platform.OS === 'ios' ? 'ios-contacts' : 'call'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('SettingsChangePhoneNumber')}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', padding: 13, paddingLeft: 5, paddingRight: 20, textAlign: 'center' }}> Change Phone Number </Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <Icon style={{ color: 'black', paddingTop: '4%', paddingLeft: '-1%'}} size={22} name={Platform.OS === 'ios' ? 'ios-people-sharp' : 'md-people-sharp'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('SettingsChangeAccountType')}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', padding: 13, paddingLeft: 5, paddingRight: 25, textAlign: 'center' }}> Change Account Type </Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

      </View>
      <View style={styles.meow}> 
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        
        <Text style={{ color: 'black', fontSize: 23, fontWeight: 'bold'}}> <Icon style={{ color: 'black', paddingTop: '5%'}} size={21} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'md-caret-back'}/> Go Back </Text>
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
        fontSize: 22,
        fontWeight: 'bold',
        color: '#808080',
        textAlign: 'left'
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

export default SettingsLoginAndSecurity;