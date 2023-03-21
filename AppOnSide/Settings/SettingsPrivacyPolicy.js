import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking } from 'react-native';


function SettingsPrivacyPolicy() {

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
        <Text style={styles.header}>Privacy Policy</Text>
        <ScrollView>
        <View style={[styles.fieldContainer, { marginTop: 30 }]}>
        <Text style={styles.text}>

            <Text style={{ fontWeight: 'bold', color: '#FF4C68'}}>
            Your privacy is important to us. {'\n'}{'\n'} 
            
            This privacy policy describes how we handle your personal information and protect your privacy when you use our social media app. {'\n'}{'\n'}
            </Text>

            <Text style={{ fontWeight: 'bold'}}>
            1. Information Collection and Use{'\n'}{'\n'}
            </Text>
            We collect information from you when you register for an account, such as your name and email address. We may also collect information about your location, if you choose to enable this feature in the app.{'\n'}{'\n'}{'\n'}
            
            <Text style={{ fontWeight: 'bold'}}>
            2. Information Sharing and Disclosure{'\n'}{'\n'}
            </Text>
            We will not share or sell your personal information to any third party without your consent, except as required by law.{'\n'}{'\n'}
            
            <Text style={{ fontWeight: 'bold'}}>
            3. Security{'\n'}{'\n'}
            </Text>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.{'\n'}{'\n'}{'\n'}
            
            <Text style={{ fontWeight: 'bold'}}>
            4. Changes to This Privacy Policy{'\n'}{'\n'}
            </Text>
            We may make changes to this privacy policy from time to time, so please review it regularly. If we make any material changes, we will notify you in advance, either through the app or by email.{'\n'}{'\n'}{'\n'}
            
            <Text style={{ fontWeight: 'bold'}}>
            5. Contact Us{'\n'}{'\n'}
            </Text>
            If you have any questions or concerns about our privacy policy, please contact us at <Text style={{color: 'blue'}} onPress={() => Linking.openURL('mailto:arsoluutions@gmail.com')}> ardexg4@gmail.com </Text>.{'\n'}{'\n'}{'\n'}
          </Text>
          </View>
          </ScrollView>

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
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        alignItems: 'center',
        alignSelf: 'center',

      },

      header: {
        paddingTop: '10%',
        paddingLeft: '5%',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#808080',
        textAlign: 'left'
      },

      headerSettings: {
        paddingTop: '7%',
        fontWeight: 'bold',
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

    fieldContainer: {

        marginVertical: 7,
        marginHorizontal: 15

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

export default SettingsPrivacyPolicy;