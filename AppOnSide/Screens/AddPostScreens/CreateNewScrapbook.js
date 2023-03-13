import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../../Navigators/TopBar'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CreateNewScrapbook = ({route}) => {

    console.log(route)

    const [selectedButtons, setSelectedButtons] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

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

    const onClick = () => {
        handleSubmit();
        navigation.navigate('CreateNewScrapbook2', { selectedImages })
       }

       handleSubmit = () => {
        console.log("Submit clicked!");
      }

    const selectImagesFromGallery = async () => {
        try {
          const images = await ImagePicker.openPicker({
            multiple: true,
            mediaType: 'photo',
            maxFiles: 3,
          });
          const selectedImagesPaths = images.map((image) => image.path);
          setSelectedImages(selectedImagesPaths);

          // send the images to the file that is currently open
          const { sendImages } = route.params;
          if (sendImages) {
            sendImages(selectedImagesPaths);
          }
        } catch (error) {
          console.log(error);
        }
      };

    const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <View style={{flex: 1}}>
        <TopBar/>
        <View style={styles.container}>
            <View>
                <Text style={styles.header2}>Create New Scrapbook</Text>
            </View>
            <View style={styles.form}> 
                <View style={{ justifyContent:'center' }}> 
                    <Text style = {styles.Text}>Scrap Book Name</Text>
                </View>
                <TextInput style = {[styles.nameInput,{width:'90%'}]} 
                    autoCapitalize = "none"/>
            </View>
            <View style={styles.form}>
                <View> 
                    <Text style = {styles.Text}>Caption</Text> 
                </View>
                <TextInput 
                    style = {[styles.nameInput,{height:100, width:'90%'}]} 
                    multiline
                    autoCapitalize = "none">
                </TextInput>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                <View style={[styles.meow2, { margin: 10 }]}>
                    <TouchableOpacity onPress={()=> console.log("tag user!")}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold'}}> tag users </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.meow2, { backgroundColor: isButtonSelected('button2') ? 'green' : '#FF4C68' }]}>
                    <TouchableOpacity onPress={()=> toggleButton('button2')}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold'}}> Show Location? </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    </KeyboardAvoidingView>
  )
}

export default CreateNewScrapbook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    HeaderText: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        paddingTop: '2%',
        marginBottom: 10
    },
    form: {
        flexDirection: 'column',
        width: '90%',
        paddingVertical: 10,
    },
    formOption: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        width: '80%',
        marginHorizontal: '10%',
        marginBottom: 10
    },
    infoFormOption: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: '10%',
        marginBottom: 10
    },
    infoButton: {
        backgroundColor: '#DDDDDD',
        borderRadius: 5,
        alignItems: 'center',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6, 
        shadowRadius: 2,
    },
    nameInput: {
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
        paddingHorizontal: 10,
        marginHorizontal: '10%'
    },
    Text: {
        fontSize:15,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 5,
        fontWeight: 'bold',
        marginHorizontal: '10%'
    },
    button: {
		marginTop: 15,
		backgroundColor: '#FF4C68',
		borderRadius: 15,
		paddingVertical: 10,
		paddingHorizontal: 20,
		alignItems: 'center',
		shadowColor: 'grey',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.6,
		shadowRadius: 2,
	},
	buttonText: {
		color: '#fff',
		fontSize: 20,
        fontWeight: 'bold',
	},
    buttons: {
		width: '80%',
		marginHorizontal: '10%',
		position: 'absolute',
		bottom: '6%'
	},
    meow2: {
        width: 145,
        height: 50,
        borderRadius: 15,
        borderColor: 'black',
        backgroundColor: '#FF4C68',
        alignSelf: 'center',
        absolute: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4, 
        shadowRadius: 2,
      },

      header: {
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingHorizontal: '5%',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#808080',
        textAlign: 'center',
        
      },
      header2: {
        paddingTop: '5%',
        paddingBottom: '4%',
        paddingHorizontal: '5%',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#808080',
        textAlign: 'center',
        
      },
      text: {
        fontSize: 14,
        fontWeight : 'bold',
        paddingTop: '1%',
        paddingBottom: '2%',
      },
})