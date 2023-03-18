import React, { Component } from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FAQs = [
    { question: "What is this social media AR app?", 
      answer: "This social media AR app is a platform that allows users to create and share augmented reality experiences with their friends and followers. It allows users to add virtual elements to their photos and videos, and share them on the platform."},
    { question: "How do I create an AR experience?", 
      answer: "To create an AR experience, you can use the camera feature in the app to take a photo or video, then use the AR tools to add virtual elements to it. You can choose from a wide variety of virtual elements such as stickers, 3D objects, and animations to add to your photo or video."},
    { question: "Can I share my AR experiences on other platforms?", 
      answer: "Yes, you can share your AR experiences on other platforms such as Instagram, Facebook, and TikTok by exporting them from the app and uploading them to those platforms."},
    { question: "Is there a limit to the number of AR experiences I can create?", 
      answer: "No, there is no limit to the number of AR experiences you can create. You can create as many experiences as you want and share them on the platform or other social media platforms."},
    { question: "Is there a cost to use this app?", 
      answer: "No, this app is completely free to download and use. However, some in-app purchases may be available for additional features or virtual elements."},
    { question: "What is the minimum requirement for my device to run this app?", 
      answer: "The minimum requirement for your device to run this app is iOS 11.0 or Android 5.0 and above."}
];

class FAQScreen extends Component {

  state = {
    activeQuestionIndex: null,
    showModal: false,
    }

    handlePress = (index) => {
      this.setState({ activeQuestionIndex: index });
  }
  
  handleArrowPress = (index) => {
      if(this.state.activeQuestionIndex === index){
          this.setState({ activeQuestionIndex: null });
      } else {
          this.setState({ activeQuestionIndex: index });
      }
  }

  render() {
    
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>

      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Text style={styles.headerSettings}>Settings</Text>
      </View>

      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={styles.rectangle}>

      <View style={styles.container}>

      <View >
        <Text style={styles.header}> FAQ's </Text>
      </View>

        <ScrollView>
          {FAQs.map((faq, index) => (
            <View key={index} style={styles.faqContainer}>
              <TouchableOpacity onPress={() => this.handleArrowPress(index)}>
                <View style={styles.questionContainer}>
                  <Text style={styles.questionText}>{faq.question}</Text>
                  <Icon 
                    name={this.state.activeQuestionIndex === index ? "ios-arrow-down" : "ios-arrow-forward"} 
                    size={20} 
                    color={this.state.activeQuestionIndex === index ? "#808080" : "white"} 
                    style={styles.arrowIcon}
                  />
                </View>
              </TouchableOpacity>
              {this.state.activeQuestionIndex === index && (
                <View style={styles.answerContainer}>
                  <Text style={styles.answerText}>{faq.answer}</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
        </View>
      </View>
      <View style={styles.backButton}>
      <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold'}}> <Icon style={{ color: 'black', paddingTop: '5%'}} size={21} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'md-caret-back'}/> Go Back </Text>
      </TouchableOpacity>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20
  },
  faqContainer: {
  marginBottom: 20,
  borderRadius: 30,
  backgroundColor: '#FF4C68',
  padding: 20,
  },
  questionText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'black',
  },
  answerText: {
  fontSize: 16,
  marginTop: 10,
  borderRadius: 20,
  backgroundColor: 'white',
  padding: 10,
  },
  modalContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
  padding: 20,
  width: '80%',
  borderRadius: 10,
  },
  modalQuestionText: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
  },

  rectangle: {
    width: 320,
    height: 530,
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
      paddingTop: '2%',
      paddingBottom: '6%',
      paddingLeft: '5%',
      fontSize: 26,
      fontWeight: 'bold',
      color: '#808080',
      textAlign: 'left'
    },

    headerSettings: {
      paddingTop: '8%',
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

  }});

  
export default FAQScreen;