import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button} from "react-native";
import TopBar from "../../Navigators/TopBar";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/Fontisto';
import Modal from "react-native-modal";


const DATA = [

    {
        user_name: 'Naveen Jain',
        user_image: 'https://cdn.dribbble.com/users/112330/screenshots/16392696/media/2e10c7e8323ee72576c6dbfcb72e12fe.png?compress=1&resize=400x300',
        feed_image: 'https://wadsworthanimalhospital.com/wp-content/uploads/2022/12/WP-Blog-Image-2022-9-1024x894.png',
        feed_caption: 'Taking the dog out!',
        like_count: '203',
        comment_count: '16'
    },

    {
        user_name: 'Kanye West',
        user_image: 'https://cdn.siasat.com/wp-content/uploads/2020/07/Rapper-Kanye-West.jpg',
        feed_image: 'https://i.pinimg.com/236x/c8/7a/26/c87a260395d82f2a1a237d053b95508d.jpg',
        feed_caption: 'Wit the homie!',
        like_count: '1,982,234',
        comment_count: '6,773'
    },

    {
        user_name: 'The Weeknd',
        user_image: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
        feed_image: 'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
        feed_caption: 'New album out on all platforms!',
        like_count: '1,234',
        comment_count: '67'
    }
]

function Item ({user_name, user_image, feed_image, feed_caption, like_count, comment_count}) {

    const [isFilled, setIsFilled] = useState(false);
    const [isFilled2, setIsFilled2] = useState(false);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    

    
    return (
        
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.headerLeft}>
                        <Image
                        style={styles.userImage}
                        source={{uri: user_image}}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('ViewProfile')}>
                            <Text style={styles.userName}> {user_name} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity style={{paddingRight: 10 }} onPress={()=> setModalVisible(true)}>
                            <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-ellipsis-horizontal' : 'ellipsis-horizontal'}/>
                        </TouchableOpacity>
                    </View >
                </View>
                <Image
                style={styles.feedImage}
                source={{uri: feed_image
                }}/>
                <View style={styles.cardFooter}>
                    <View style={styles.footerLeft}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            {/* <Icon style={{ fontSize: 30, color: 'red' }} name={Platform.OS === 'ios' ? 'ios-heart' : 'heart'}/> */}
                            <TouchableOpacity onPress={() => setIsFilled(!isFilled)}>
                                <Icon4
                                    name={isFilled ? 'heart' : 'hearto'}
                                    size={24}
                                    color={isFilled ? 'red' : 'grey'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
                                <Icon5 style={{ fontSize: 24, color: 'grey' }} name={Platform.OS === 'ios' ? 'comment' : 'comment'}/>
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setIsFilled2(!isFilled2)}>
                                <Icon2
                                    name={isFilled2 ? 'bookmark' : 'bookmark-o'}
                                    size={24}
                                    style={{ paddingHorizontal: 13 }}
                                    color={isFilled2 ? 'black' : 'grey'}
                                />
                            </TouchableOpacity>
                    {/* <Icon3 style={{ fontSize: 29, color: 'grey', paddingHorizontal: 10 }} name={Platform.OS === 'ios' ? 'ios-heart' : 'bookmark'}/> */}
                </View>
                <Text style={{ marginTop: 1, marginLeft: 1, fontSize: 16, paddingTop: 10}}> {like_count} <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16}}>Likes </Text> </Text>
                <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16, fontWeight: 'bold'}}> {feed_caption} </Text>
                <Text style={{ marginTop: 1, marginLeft: 1, fontSize: 16}}> {comment_count} <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16}}>Comments </Text> </Text>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                backdropOpacity={0.4}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => console.log('Report Post Button pressed')} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}> Report Post</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('Report User Button pressed')} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Report User</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}



export default function HomeScreen() {

    const navigation = useNavigation();
    

    return (

        <View style={{flex: 1}}>
        <TopBar />
            <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Item
                    user_name={item.user_name}
                    user_image={item.user_image}
                    feed_image={item.feed_image}
                    feed_caption={item.feed_caption}
                    like_count={item.like_count}
                    comment_count={item.comment_count}
                    key={item.user_name}
                    />
                )}
                keyExtractor={item => item.user_name}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#ddd'
    },

    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },

    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    headerLeft: {
        flexDirection: 'row',
    },

    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50/2
    },

    userName: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 15,
        fontSize: 17
    },

    icon: {
        fontSize: 20,
        color: 'grey',
        marginTop: 15
    },

    feedImage: {
        height: 300,
        borderRadius: 10,
        marginVertical: 10
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    footerLeft: {
        flexDirection: 'row',
    },
    modal: {
        flex : 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        height: '20%',
        padding: 100,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButton: {
        padding: 10,
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: 'column',
        width: '110%'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        width: '100%'
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});