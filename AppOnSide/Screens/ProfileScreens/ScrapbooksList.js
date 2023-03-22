import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button, ScrollView, Dimensions} from "react-native";
import TopBar from "../../Navigators/TopBar";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/Fontisto';
import Modal from "react-native-modal";
import { ActivityIndicator } from 'react-native';

import queries from "../appConnection/home.js"
//HI
const WIDTH = Dimensions.get('window').width;

// const data23 = {username: username, scrapName: scrapName, profileImage: profileImage, imageName: imageName, caption: caption, like: like, comments: comments, name: name, userId: userId, mainUserId: mainUserId, scrapId: scrapId}

function Item ({username, scrapName, profileImage, imageName, caption, like, comments, name, userId, mainUserId, scrapId}) {

    const [isFilled, setIsFilled] = useState(null);
    const [isFilled2, setIsFilled2] = useState(false);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    // console.log("Likew : "+like)
    const[likes,setLikes] = useState(like);

    const [imageActive, setimageActive] = useState(0);
    onchange = (nativeEvent) => {
      if(nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide != imageActive){
          setimageActive(slide);
        }
      }
    }
    // console.log("MainUserId : "+ mainUserId )
    // console.log("ScrapID : "+ scrapId )

    const checkLike = async (scrapId, mainUserId) => {
        return await queries.isScrapbookLikedByUser(scrapId, mainUserId);
    }

    const handleLikeClick = async () => {
        // console.log("handleLikeClick")
        // console.log("ScrapID : "+ scrapId )
        // console.log("MainUserId : "+ mainUserId )
        if(isFilled){
            setIsFilled(false);
            setLikes(likes-1)
            await queries.deleteScrapbookLike(scrapId, mainUserId);
        } else {
            setIsFilled(true);
            setLikes(likes+1)
            await queries.addScrapbookLike(scrapId, mainUserId);
        }
    }


    useEffect(() => {
        checkLike(scrapId, mainUserId).then((res) => {
            if(res){
                setIsFilled(true);
            } else {
                setIsFilled(false);
            }
        })
    }, [scrapId, mainUserId])

    if(isFilled == null){
        return null;
    }

    const handleReportUser = async () => {
        setModalVisible(false)
        alert("User Reported \n Thank you for your feedback!\n We will look into this matter.")
        await queries.insertReportUser(mainUserId, userId);
    }

    const handleReportScrap = async () => {
        setModalVisible(false)
        alert("Scrapbook Reported \n Thank you for your feedback!\n We will look into this matter.")
        await queries.insertReportScrapbook(mainUserId, scrapId);
    }


    
    return (
        
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.userName}>@{username}</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity style={{paddingRight: 10 }} onPress={()=> setModalVisible(true)}>
                            <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-ellipsis-horizontal' : 'ellipsis-horizontal'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.backButton}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black'}}> {scrapName} </Text>
                </View>
                <View style={styles.page}>
           <ScrollView
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
            scrollEventThrottle={1}
          >
            {
              imageName.map((e, index)=>
                <Image
                  key={e}
                  resizeMode='stretch'
                  style={styles.wrap}
                  source={{uri: e}}
                />
              ) 
            }

          </ScrollView>
        </View>
                <View style={styles.cardFooter}>
                    <View style={styles.footerLeft}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            <TouchableOpacity onPress={handleLikeClick}>
                                <Icon4
                                    name={isFilled ? 'heart' : 'hearto'}
                                    size={26}
                                    color={isFilled ? 'red' : 'grey'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Comments',{ userId: mainUserId, mainUserId: mainUserId, scrapId: scrapId })}>
                                <Icon5 style={{ fontSize: 24, color: 'grey' }} name={Platform.OS === 'ios' ? 'comment' : 'comment'}/>
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                    {/* <TouchableOpacity onPress={() => setIsFilled2(!isFilled2)}>
                                <Icon2
                                    name={isFilled2 ? 'bookmark' : 'bookmark-o'}
                                    size={26}
                                    style={{ paddingHorizontal: 13 }}
                                    color={isFilled2 ? 'black' : 'grey'}
                                />
                            </TouchableOpacity> */}
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Likes',{ userId: mainUserId, mainUserId: mainUserId, scrapId: scrapId })}>
                <Text style={{ marginTop: 1, marginLeft: 1, fontSize: 16, paddingTop: 10}}> {likes} <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16}}>Likes </Text> </Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16, fontWeight: 'bold'}}> {caption} </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Comments',{ userId: mainUserId, mainUserId: mainUserId, scrapId: scrapId })}>
                <Text style={{ marginTop: 1, marginLeft: 1, fontSize: 16}}> {comments} <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16}}>Comments </Text> </Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                isVisible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                backdropOpacity={0.5}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => {setModalVisible(false); navigation.navigate('ScrapBookView',{username: username, scrapName: scrapName, profileImage: profileImage, imageName: imageName, caption: caption, like: like, comments: comments, name: name, userId: userId, mainUserId: mainUserId, scrapId: scrapId});}} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>View Scrap Book Separately</Text>
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


export default function ScrapbooksList(props) {

    const navigation = useNavigation();
    console.log("HomeScreen")
    
    console.log(props.route.params.userId);
    mainUserId = props.route.params.userId;

    const [DATA, setDATA] = useState(null);

    const getData = async (mainUserId) => {
        const response = await queries.getHomeFeedByUser(mainUserId);
        // console.log(response);
        return response;
    }
    const isFocused = useIsFocused();
    
    useEffect(() => {
        if (isFocused) {
        getData(mainUserId).then((DATA) => {
          setDATA(DATA);
        });}
      }, [isFocused,mainUserId]);

      if (!DATA) {
        return <ActivityIndicator color='#FF4C68' size={120} style={styles.indicator} />;
      }


    return (


            <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Item
                    username={item.username}
                    profileImage={item.profileImage}
                    imageName={item.imageName}
                    caption={item.caption}
                    scrapName={item.scrapName}
                    like={item.likes}
                    comments={item.comments}
                    key={item.scrapId}
                    userId={item.userId}
                    name={item.name}
                    mainUserId={props.route.params.mainUserId}
                    scrapId={item.scrapId}
                    />
                )}
                keyExtractor={item => item.scrapId}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#ddd'
    },

    indicator: {
        flex: 1
    },

    backButton: {
        width: 350,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#FFBCCD',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 13.5,
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
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 12
      },

    userName: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 15,
        fontSize: 18
    },

    icon: {
        fontSize: 22,
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
        width: '80%',
        alignSelf: 'center',
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#ddd',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
    },
    name: {
        fontSize: 14,
        color: '#888',
        marginLeft: 10,
        marginTop: 5,
        alignSelf: 'center',
      },
    modalButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'column',
        width: '110%'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrap: {
        width: WIDTH * 0.9,
        alignSelf: 'center',
        height: 300,
        borderRadius: 10,
        marginVertical: 10
    },
    wrapDot: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        alignSelf: 'center'

    },
    dotActive: {
        margin: 3,
        color: 'white',
        fontSize: 10
      },
      dot: {
        margin: 3,
        color: 'black',
        fontSize: 10
      }
});