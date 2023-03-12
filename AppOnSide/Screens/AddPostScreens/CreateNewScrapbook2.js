// import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image} from 'react-native'
// import React, {useState, useRef} from 'react'
// import TopBar from '../../Navigators/TopBar'
// import { useNavigation } from '@react-navigation/native';
// import {Carousel, Pagination} from 'react-native-reanimated-carousel';


// const CreateNewScrapbook2 = ({ route }) => {
    
//     const { selectedImages } = route.params;

//     const navigation = useNavigation();

//     const carouselRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     const handlePageChange = (index) => {
//         setActiveIndex(index);
//     };

//     const handleNextButton = () => {
//         if (activeIndex < selectedImages.length - 1) {
//             carouselRef.current.snapToNext();
//         }
//     };

//   return (
//     <View style={{flex: 1}}>
//         <TopBar/>
//         <View style={styles.container}>
//             <View> 
//                 <Text style={styles.HeaderText}>Preview Your Scrapbook Posts</Text>
//             </View>

//             <ScrollView contentContainerStyle={styles.container2}>
//                 {selectedImages.map((image) => (
//                     <Image key={image} source={{ uri: image }} style={styles.image} />
//                 ))}
//             </ScrollView>


//             <View style={styles.buttons}>
// 					<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
// 					<Text style={styles.buttonText}>previous</Text>
// 					</TouchableOpacity>
// 					<TouchableOpacity style={styles.button}>
// 					<Text style={styles.buttonText}>Next</Text>
// 					</TouchableOpacity>
// 			</View>
//         </View>
//     </View>
//   )
// }

// export default CreateNewScrapbook2

import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import TopBar from '../../Navigators/TopBar'
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';


const CreateNewScrapbook2 = ({ route }) => {

    const { selectedImages } = route.params;

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <TopBar />
            <View style={styles.container}>
                <View>
                    <Text style={styles.HeaderText}>Preview Your Scrapbook Posts</Text>
                </View>

                <View>
                <ScrollView contentContainerStyle={styles.container2}>
                    {selectedImages.map((image) => (
                        <Image key={image} source={{ uri: image }} style={styles.image} />
                    ))}
                </ScrollView>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
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
    container2: {
        flexGrow: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
      },
    image: {
        width: 300,
        height: 300,
        marginVertical: 10,
    },
    carouselContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    paginationContainer: {
        paddingVertical: 10,
        backgroundColor: 'transparent',
    },
    paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    },
})