import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import TopBar from '../../Navigators/TopBar'
import BottomTabNavigation from '../../Navigators/bottomTabNavigation';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CreateNewScrapbook2 = () => {

    const options = [
        { value: 'opinion', label: 'Opinion' },
        { value: 'fact', label: 'Fact' },
        { value: 'fiction', label: 'Fiction' },
    ];

  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
        <TopBar/>
        <View style={styles.container}>
            <View>
                <Text style={styles.HeaderText}>Create New Scrapbook</Text>
            </View>
            <View style={styles.form}>
                <View style={[{justifyContent:'center'}]}> 
                    <Text style = {styles.Text}>Add Location</Text> 
                </View>
                <TextInput style = {[styles.nameInput,{width:'90%'}]} 
                           autoCapitalize = "none"></TextInput>
            </View>
            <View style={styles.form}>
                <View> 
                    <Text style = {styles.Text}>Tag Users</Text> 
                </View>
                <TextInput 
                    style = {[styles.nameInput,{width:'90%'}]} 
                    multiline
                    autoCapitalize = "none"></TextInput>
                <View> 
                    <Text style = {styles.Text}>Select Type of information</Text> 
                </View>
            </View>
            <View>
                <Text style = {styles.Text}>Add Photos</Text>
            </View>
            <View style={styles.buttons}>
					<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
					<Text style={styles.buttonText}>previous</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Next</Text>
					</TouchableOpacity>
			</View>
        </View>
    </View>
  )
}

export default CreateNewScrapbook2

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
        paddingVertical: 10
    },
    nameInput: {
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        paddingHorizontal: 10,
        marginHorizontal: '10%'
    },
    Text: {
        fontSize:15,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 5,
        marginHorizontal: '10%'
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
		fontSize: 18,
	},
    buttons: {
		width: '80%',
		marginHorizontal: '10%',
		position: 'absolute',
		bottom: '6%'
	},
})