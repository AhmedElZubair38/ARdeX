import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';


function SettingsPrivacyPolicy() {

  const navigation = useNavigation();

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={styles.headerSettings}>Settings</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={styles.rectangle}>
        <Text style={styles.header}>Privacy Policy</Text>
        <ScrollView>
        <Text style={styles.text}>

            Your privacy is important to us. This privacy policy describes how we handle your personal information and protect your privacy when you use our social media app.
            
            1. Information Collection and Use
            We collect information from you when you register for an account, such as your name and email address. We may also collect information about your location, if you choose to enable this feature in the app.
            
            2. Information Sharing and Disclosure
            We will not share or sell your personal information to any third party without your consent, except as required by law.
            
            3. Security
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
            
            4. Changes to This Privacy Policy
            We may make changes to this privacy policy from time to time, so please review it regularly. If we make any material changes, we will notify you in advance, either through the app or by email.
            
            5. Contact Us
            If you have any questions or concerns about our privacy policy, please contact us at [insert contact email].
          </Text>
          </ScrollView>

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

      text: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        paddingTop: '10%',
        alignItems: 'center',
        alignSelf: 'center',

      },

      header: {
        fontFamily: 'fax',
        paddingTop: '10%',
        paddingBottom: '-1%',
        paddingLeft: '5%',
        fontSize: 24,
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

export default SettingsPrivacyPolicy;



// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

// function SettingsPrivacyPolicy() {
//   const navigation = useNavigation();

//   return (
//     <View style={{flex: 1, flexDirection: 'column'}}>
//       <View style={{flex: 1, backgroundColor: 'black'}}>
//         <Text style={styles.headerSettings}>Settings</Text>
//       </View>
//       <View style={{flex: 1, backgroundColor: 'white'}}/>
//       <View style={styles.rectangle}>
//         <Text style={styles.header}>Privacy Policy</Text>
//         <View style={styles.textContainer}>
//           <Text style={styles.text}>
//             Your privacy is important to us. This privacy policy describes how we handle your personal information and protect your privacy when you use our social media app.
            
//             1. Information Collection and Use
//             We collect information from you when you register for an account, such as your name and email address. We may also collect information about your location, if you choose to enable this feature in the app.
            
//             2. Information Sharing and Disclosure
//             We will not share or sell your personal information to any third party without your consent, except as required by law.
            
//             3. Security
//             We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
            
//             4. Changes to This Privacy Policy
//             We may make changes to this privacy policy from time to time, so please review it regularly. If we make any material changes, we will notify you in advance, either through the app or by email.
            
//             5. Contact Us
//             If you have any questions or concerns about our privacy policy, please contact us at [insert contact email].
//           </Text>
//         </View>
//       </View>
//       <View style={styles.backButton}>
//         <TouchableOpacity onPress={()=> navigation.goBack()}>
//           <Text style={{ color: 'black', fontSize: 20, fontFamily: 'fax'}}>
//             <Icon style={{ color: 'black', paddingTop: '5%'}} size={21} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'md-caret-back'}/>
//             Go Back
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   rectangle: {
//     width: 320,
//     height: 520,
//     borderRadius: 35,
//     borderWidth: 2,
//     borderColor: 'black',
//     backgroundColor: 'white',
//     alignSelf: 'center',
//     position: 'absolute',
//     top: '12%',
//     justifyContent: 'center',
//     justifyContent: 'flex-start'
//   },

//   backButton: {
//     width: 220,
//     height: 70,
//     borderRadius: 35,
//     borderWidth: 2,
//     borderColor: 'black',
//     backgroundColor: 'white',
// alignSelf: 'center',
// position: 'absolute',
// bottom: '10%',
// justifyContent: 'center',
// alignItems: 'center'
// },

// header: {
// fontSize: 24,
// fontWeight: 'bold',
// alignSelf: 'center',
// marginTop: '10%',
// marginBottom: '5%'
// },

// headerSettings: {
// color: 'white',
// fontSize: 24,
// fontWeight: 'bold',
// alignSelf: 'center',
// marginTop: '10%'
// },

// textContainer: {
// padding: '5%',
// width: '90%',
// alignSelf: 'center'
// },

// text: {
// fontSize: 18,
// textAlign: 'justify'
// }
// });

// export default SettingsPrivacyPolicy;
