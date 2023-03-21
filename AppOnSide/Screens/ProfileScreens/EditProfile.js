import React, {useState, useEffect} from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
var ImagePicker = require('react-native-image-crop-picker');


const EditProfile = ({ route }) => {

	const navigation = useNavigation();

	const profile = {
		name: 'The Weeknd',
		bio: 'POP ftw',
		profilePic: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
		coverPic: 'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
	}

  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [profilePic, setProfilePic] = useState(profile.profilePic);

  const [image, setImage] = useState('');

  const selectImagesFromGallery = async () => {

      ImagePicker.openPicker({
        multiple: false,
        mediaType: 'photo',
		cropping: true,
      })
	  .then((image) => {
		console.log('received image', image);
		setImage({
			uri: image.path
		})
	  })
  };

  return (
	<View style={{flex: 1}}>
	<TopBar/>
	<View style={styles.container}>
		<View>
		
			<View style={styles.profileContainer}>
				<Image
					style={styles.profilePhoto}
					source={{uri : profilePic}}
				 />
				<View>
					 <TouchableOpacity style={[{backgroundColor:'#FF4C68',position:'absolute', width: 40, height: 40, alignSelf: 'center', marginTop: 10, borderRadius: 30, zIndex:1, bottom:0, right:-25}]} onPress={selectImagesFromGallery}>
						 <Icon size={20} style={styles.icon123} name={Platform.OS === 'ios' ? 'edit' : 'edit'}></Icon>
					 </TouchableOpacity>
				</View>
					
			</View>
					
		</View>
					
				<View style={styles.form}>
				<View>
					<Text style={[styles.label, {paddingTop: 40}]}>Name</Text>
					<TextInput
					style={styles.input}
					placeholder="Enter Name"
					value={name}
					onChangeText={setName}
					/>
					<Text style={styles.label}>Bio</Text>
					<TextInput
					style={styles.input}
					placeholder="Enter Bio"
					value={bio}
					onChangeText={setBio}
					/>
				</View>
				</View>


				<Image
					style={styles.profilePhoto2}
					source={{uri: image.uri}}
				/>

				<View style={styles.buttons}>
					<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
					<Text style={styles.buttonText}>Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
					<Text style={styles.buttonText}>Confirm Changes</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
	};

	const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	headerContainer: {
		alignItems: 'center',
		backgroundColor: 'red'
	},
	profileContainer: {
		alignSelf:'center',
		width:100,
		height:100,
		marginTop: '8%',
	},
	profilePhoto: {
		width: 150,
		height: 150,
		borderRadius: 80,
		alignSelf:'center',
	},
	changeAvatarButton: {
		margin: 10,
	},
	changeAvatarButtonText: {
		color: '#FF4C68',
		fontSize: 18,
	},

	button: {
		backgroundColor: '#FF4C68',
		borderRadius: 20,
		padding: 10,
		margin: 15,
		shadowColor: 'grey',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.9,
		shadowRadius: 2,
		alignSelf: 'center',
		marginBottom: 10,
		height:'33%',
		width: '90%',
		borderWidth: 1.5,
		borderColor: 'black',
		alignItems: 'center',
	  },
	buttonText: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',


	},
	form: {
		width: '80%',
		marginHorizontal: '10%',
		marginTop: '15%',
		
	},
	label: {
		marginVertical: 10,
		fontSize: 16,
		fontWeight: 'bold',
		
	},
	input: {
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 15,
		padding: 10,
		fontSize: 16,
		marginBottom: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		borderWidth: 1.5,
		borderColor: 'black',
	},
	buttons: {
		width: '70%',
		alignSelf: 'center',
		position: 'absolute',
		bottom: '6%'
	},
	icon123: {
		color:'black',
		paddingLeft: '27%',
		paddingTop: '25%',
		}
	});

	export default EditProfile;
