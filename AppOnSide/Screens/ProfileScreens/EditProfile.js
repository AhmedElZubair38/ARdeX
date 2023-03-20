import React, {useState} from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';


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

  const onClick = () => {
	console.log('Submit clicked!');
    navigation.navigate('PreviewEditProfile', { image });
  };

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
							<TouchableOpacity style={[{backgroundColor:'#FF4C68',position:'absolute',bottom:0,right:-20,borderRadius:50}]} onPress={selectImagesFromGallery}>
								<Icon size={35} style={styles.icon123} name={Platform.OS === 'ios' ? 'search' : 'search'}></Icon>
							</TouchableOpacity>
						</View>
					
					</View>
					
				</View>
					
				<View style={styles.form}>
				<View>
					<Text style={[styles.label, {marginTop: 30}]}>Name</Text>
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
					style={styles.profilePhoto}
					source={{uri: image.uri}}
				/>

				<View style={styles.buttons}>
					<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
					<Text style={styles.buttonText}>Cancel Changes</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={onClick}>
					<Text style={styles.buttonText}>Next</Text>
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
		marginTop: 40,
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
		marginTop: 20,
		backgroundColor: '#FF4C68',
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
		alignItems: 'center',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.9,
		shadowRadius: 2,
	},
	buttonText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',

	},
	form: {
		width: '80%',
		marginHorizontal: '10%',
		marginTop: '5%'
	},
	label: {
		marginTop: 30,
		fontSize: 22,
		fontWeight: 'bold',
	},
	input: {
		marginTop: 5,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		fontSize: 16,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
	},
	buttons: {
		width: '80%',
		marginHorizontal: '10%',
		position: 'absolute',
		bottom: '6%'
	},
	icon123: {
		color:'white',
	}
	});

	export default EditProfile;
