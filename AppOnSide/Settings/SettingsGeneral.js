import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


function SettingsGeneral() {

  const navigation = useNavigation();

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={styles.headerSettings}>Settings</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={styles.rectangle}>
        <Text style={styles.header}>General</Text>
        
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: '7%'}}>
        <Icon style={{ color: 'black', paddingTop: '5%', paddingRight: -1}} size={18} name={Platform.OS === 'ios' ? 'ios-person' : 'person-remove'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('SettingsBlockedUsers')}>
            <Text style={{ color: 'black', fontSize: 16, fontFamily: 'fax', padding: 13, paddingLeft: 5, paddingRight: 95, textAlign: 'center' }}> Blocked Users</Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-key' : 'power'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('LoginUpdated')}>
            <Text style={{ color: 'black', fontSize: 16, fontFamily: 'fax', padding: 13, paddingLeft: 1.5, paddingRight: 50, textAlign: 'center' }}> Delete My Account</Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <Icon style={{ color: 'black', paddingTop: '4%'}} size={20} name={Platform.OS === 'ios' ? 'ios-contacts' : 'location-sharp'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('LoginUpdated')}>
            <Text style={{ color: 'black', fontSize: 16, fontFamily: 'fax', padding: 13, paddingLeft: 3, paddingRight: 110, textAlign: 'center' }}> Permissions </Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

      </View>

      <View style={styles.meow}>
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
        fontFamily: 'fax',
        paddingTop: '10%',
        paddingBottom: '-1%',
        paddingLeft: '5%',
        fontSize: 18,
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

    }
  });

export default SettingsGeneral;