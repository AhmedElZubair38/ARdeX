import { StyleSheet, Text, TouchableOpacity, View, Switch, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import TopBar from '../../Navigators/TopBar'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
var ImagePicker = require('react-native-image-crop-picker');
import Geolocation from '@react-native-community/geolocation';
// import { Geolocation } from 'react-native';
import { PermissionsAndroid, Platform } from 'react-native';

const CreateNewScrapbook = ({route}) => {
    getLocation();

    // console.log(route)
    mainUserId = route.params.mainUserId
    // console.log(mainUserId)

    const [isEnabled, setIsEnabled] = useState(false);
   

    const [selectedButtons, setSelectedButtons] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    const [isFiction, setIsFiction] = useState(false);

    const [scrapbookName, setScrapbookName] = useState('');
    // const [scrapName, setScrapName] = useState('');
    const [scrapbookCaption, setScrapbookCaption] = useState('');

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
  
    // const [region, setRegion] = useState({
    //   latitude: 25.10156,
    //   longitude: 55.16204,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // });

    // useEffect(() => {
    //     Geolocation.getCurrentPosition(
    //       (position) => {
    
    //         setLatitude(position.coords.latitude);
    //         setLongitude(position.coords.longitude);
    
    //         setRegion({
    //           latitude: position.coords.latitude,
    //           longitude: position.coords.longitude,
    //           latitudeDelta: 0.0922,
    //           longitudeDelta: 0.0421,
    //         });
    //       },
    //       (error) => console.log(error.message),
    //       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    //     );
    //   }, []);

    
async function requestLocationPermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          return true;
        } else {
          console.log('Location permission denied');
          return false;
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  }

  async function getLocation() {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          setLatitude(latitude);
          setLongitude(longitude);
        },
        error => console.log(error),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      console.log('Location permission denied');
    }
  }
  

    const handleScrapbookName = (text) => {
        setScrapbookName(text)
        console.log(scrapbookName)
    }

    const handleScrapbookCaption = (text) => {
        setScrapbookCaption(text)
        console.log(scrapbookCaption)
    }
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        console.log(latitude)
        console.log(longitude)
        console.log(isFiction)
    };




    const toggleSwitch2 = () => {
        setIsFiction(previousState => !previousState)
        console.log(isEnabled)

    
    };

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

    const onClick = () => {
        handleSubmit();
        if (scrapbookName == '') {
          alert('Please enter a scrapbook name');
          return;
        }
        if (scrapbookCaption == '') {
            alert('Please enter a scrapbook caption');
            return;
            }
        if (selectedImages.length == 0) {
            alert('Please select at least one image');
            return;
        }
        setScrapbookName('');
        setScrapbookCaption('');
        navigation.navigate('PreviewScrapbookPosts', { selectedImages, scrapbookName, scrapbookCaption, latitude, longitude, isFiction, mainUserId, isEnabled })
       }

       handleSubmit = () => {
        console.log("Submit clicked!");
      }

    const selectImagesFromGallery = async () => {
        try {
          const images = await ImagePicker.openPicker({
            multiple: true,
            mediaType: 'photo',
          });
          const selectedImagesPaths = images.map((image) => image.path);
          console.log('received image', selectedImagesPaths);
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
    <View style={{flex: 1}}>
        <TopBar
                        userId = {mainUserId}
              mainUserId = {mainUserId}
        />
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.header2}>Create New Scrapbook</Text>
            </View>
            <View style={styles.form}> 
                <View style={{ justifyContent:'center' }}> 
                    <Text style = {styles.Text}      >Scrapbook Name</Text>


                </View>
                <TextInput 
                    style = {[styles.nameInput,{ width:'90%'}]} 
                    multiline
                    // autoCapitalize = "none"
                    onChangeText = {handleScrapbookName}
                    >
                    {scrapbookName}
                </TextInput>
            </View>
            <View style={styles.form}>
                <View> 
                    <Text style = {styles.Text}

                    >Caption</Text> 


                </View>
                <TextInput 
                    style = {[styles.nameInput,{height:100, width:'90%'}]} 
                    multiline
                    // autoCapitalize = "none"
                    onChangeText = {handleScrapbookCaption}
                    >
                    {scrapbookCaption}
                </TextInput>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: '5.5%', marginRight: '12%', marginVertical: 15}}>
                <View>
                    <Text style = {styles.Text}>Show Location</Text> 
                </View>
                <Switch
                        trackColor={{ false: '#767577', true: '#34C759' }}
                        thumbColor={isEnabled ? 'white' : 'white'}
                        
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
            </View>
            <View style={{marginTop: 10, marginBottom: 25}}>
                <Text style={styles.Text}>Is the information:</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.Text}>Fiction</Text>
                        <Switch
                        trackColor={{ false: "#767577", true: "#767577" }}
                        thumbColor={isFiction ? "#f4f3f4" : "#f4f3f4"}
                        onValueChange={toggleSwitch2}
                        value={isFiction}
                        />
                    <Text style={styles.Text}>Opinion</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                 <View style={styles.meow2}>
                     <TouchableOpacity onPress={selectImagesFromGallery}>
                         <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold'}}> Upload Images </Text>
                     </TouchableOpacity>
                 </View>
             </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>  
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
        shadowRadius: 2,
        borderWidth: 1.5,
	},
	buttonText: {
		color: '#fff',
		fontSize: 20,
        fontWeight: 'bold',
	},
    buttons: {
		width: '80%',
		marginHorizontal: '10%',
        marginTop: 30,
	},
    meow2: {
        width: 155,
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
        marginVertical: 10,
        shadowRadius: 2,
        borderWidth: 1.5,
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
        fontSize: 26,
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