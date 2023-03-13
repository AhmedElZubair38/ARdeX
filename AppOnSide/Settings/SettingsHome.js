import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


function SettingsHome() {

  const navigation = useNavigation();
  

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style = {styles.pageHead}>
        <TouchableOpacity onPress={()=> navigation.goBack()} >
          <Icon style={{ color: 'white', paddingTop: 25, paddingLeft: 20}} size={30} name={Platform.OS === 'ios' ? 'ios-caret-back-outline' : 'caret-back'}/>
        </TouchableOpacity>
        <Text style={styles.headerSettings}>Settings</Text>
      </View> 

      <View style={{flex: 1, backgroundColor: 'black'}}>
      </View>

      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={styles.rectangle}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: '10%'}}>
          <Icon style={{ color: 'black', paddingTop: '3.2%'}} size={26} name={Platform.OS === 'ios' ? 'ios-person' : 'md-lock-closed'}/>
          <TouchableOpacity  onPress={()=> navigation.navigate('SettingsLoginAndSecurity')}>
              <Text style={{ color: 'black', fontSize: 18, padding: 13, paddingLeft: 5, paddingRight: 80, textAlign: 'center', fontWeight: 'bold' }}> Login & Security </Text>
          </TouchableOpacity>
          <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: '7%'}}>
        <Icon style={{ color: 'black', paddingTop: '3.5%'}} size={26} name={Platform.OS === 'ios' ? 'ios-key' : 'settings-sharp'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('SettingsGeneral')}>
            <Text style={{ color: 'black', fontSize: 18, padding: 13, paddingLeft: 5, paddingRight: 150, textAlign: 'center', fontWeight: 'bold' }}> General </Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: '7%'}}>
        <Icon style={{ color: 'black', paddingTop: '3.5%'}} size={28} name={Platform.OS === 'ios' ? 'ios-key' : 'help-circle'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('SettingsHelp')}>
            <Text style={{ color: 'black', fontSize: 18, padding: 13, paddingLeft: 5, paddingRight: 173, textAlign: 'center', fontWeight: 'bold' }}> Help </Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: '7%'}}>
        <Icon style={{ color: 'black', paddingTop: '3.5%'}} size={26} name={Platform.OS === 'ios' ? 'ios-key' : 'information-circle'}/>
        <TouchableOpacity  onPress={()=> navigation.navigate('SettingsAbout')}>
            <Text style={{ color: 'black', fontSize: 18, padding: 13, paddingLeft: 5, paddingRight: 163, textAlign: 'center', fontWeight: 'bold' }}> About </Text>
        </TouchableOpacity>
        <Icon style={{ color: 'black', paddingTop: '5%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
        </View>

        </View>
        <View style={styles.meow}> 
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <Icon style={{ color: 'black', paddingTop: '3.85%'}} size={30} name={Platform.OS === 'ios' ? 'ios-key' : 'log-out'}/>
          <TouchableOpacity  onPress={()=> navigation.navigate('LoginUpdated')}>
              <Text style={{ color: 'black', fontSize: 20, padding: 13, paddingLeft: 5, paddingRight: 110, textAlign: 'center', fontWeight: 'bold' }}> Log Out </Text>
          </TouchableOpacity>
          <Icon style={{ color: 'black', paddingTop: '6%'}} size={20} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'caret-forward-outline'}/>
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

    meow: {
        width: 320,
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
        fontSize: 18,
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

    },
    pageHead: {
      backgroundColor: 'black',
      paddingLeft: 10,
      paddingTop: 10,
      flexDirection: 'row',
      alignItems: 'center'
    }
  });

export default SettingsHome;



// {this.state.activeQuestionIndex === index ? 
//                       <Icon style={{ color: 'red', paddingTop: '5%'}} size={18} name={Platform.OS === 'ios' ? 'ios-person' : 'caret-up'}/>
//                     : 
//                       <Icon style={{ color: 'grey', paddingTop: '5%'}} size={18} name={Platform.OS === 'ios' ? 'ios-person' : 'caret-down'}/>
//                   }




// import React, { Component } from 'react';
// import { Modal, View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const FAQs = [
//     { question: "What is this social media AR app?", 
//       answer: "This social media AR app is a platform that allows users to create and share augmented reality experiences with their friends and followers. It allows users to add virtual elements to their photos and videos, and share them on the platform."},
//     { question: "How do I create an AR experience?", 
//       answer: "To create an AR experience, you can use the camera feature in the app to take a photo or video, then use the AR tools to add virtual elements to it. You can choose from a wide variety of virtual elements such as stickers, 3D objects, and animations to add to your photo or video."},
//     { question: "Can I share my AR experiences on other platforms?", 
//       answer: "Yes, you can share your AR experiences on other platforms such as Instagram, Facebook, and TikTok by exporting them from the app and uploading them to those platforms."},
//     { question: "Is there a limit to the number of AR experiences I can create?", 
//       answer: "No, there is no limit to the number of AR experiences you can create. You can create as many experiences as you want and share them on the platform or other social media platforms."},
//     { question: "Is there a cost to use this app?", 
//       answer: "No, this app is completely free to download and use. However, some in-app purchases may be available for additional features or virtual elements."},
//     { question: "What is the minimum requirement for my device to run this app?", 
//       answer: "The minimum requirement for your device to run this app is iOS 11.0 or Android 5.0 and above."}
// ];

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 20
//     },
//     faqContainer: {
//       marginBottom: 20,
//       backgroundColor: '#f9f9f9',
//       padding: 20,
//     },
//     questionText: {
//       fontSize: 18,
//       fontWeight: 'bold'
//     },
//     answerText: {
//       fontSize: 16,
//       marginTop: 10,
//       backgroundColor: '#b3b3b3',
//       padding: 10,
//     },
//     modalContainer: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     modal: {
//       backgroundColor: 'white',
//       padding: 20,
//       width: '80%',
//       borderRadius: 10,
//     },
//     modalQuestionText: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       marginBottom: 10,
//     },
//     modalAnswerText: {
//       fontSize: 16,
//     },
//     modalCloseButton: {
//       alignSelf: 'flex-end',
//     },
//     modalCloseButtonText: {
//       fontSize: 18,
//       color: '#FF4C68',
//     },
// });

// class FAQScreen extends Component {
//   state = {
//       activeQuestionIndex: 0,
//       showModal: false,
//   }

  
//   handlePress = (index) => {
//     this.setState({ activeQuestionIndex: index, showModal: true });
// }


// closeModal = () => {
// this.setState({ showModal: false });
// }

// render() {
// return (
//   <View style={styles.container}>
//     <Modal
//       visible={this.state.showModal}
//       animationType="fade"
//       transparent={true}
//       onRequestClose={this.closeModal}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modal}>
//           <Text style={styles.modalQuestionText}>
//             {FAQs[this.state.activeQuestionIndex].question}
//           </Text>
//           <Text style={styles.modalAnswerText}>
//             {FAQs[this.state.activeQuestionIndex].answer}
//           </Text>
//           <TouchableOpacity
//             style={styles.modalCloseButton}
//             onPress={this.closeModal}
//           >
//             <Text style={styles.modalCloseButtonText}>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//     <ScrollView>
//       {FAQs.map((faq, index) => (
//         <View key={index} style={styles.faqContainer}>
//           <TouchableOpacity onPress={() => this.handlePress(index)}>
//             <Text style={styles.questionText}>{faq.question}</Text>
//           </TouchableOpacity>
//           <View style={styles.answerContainer}>
//             <Text style={styles.answerText}>{faq.answer}</Text>
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   </View>
// );
// }

// }
  
// export default FAQScreen;
  