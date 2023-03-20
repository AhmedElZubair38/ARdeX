import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList, StatusBar, Dimensions, TouchableOpacity} from 'react-native';
import TopBar from '../Navigators/TopBar';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/Fontisto';
import Modal from "react-native-modal";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

import queries from "./appConnection/home.js"

const ScrapBookView = (props) => {
    const [isFilled, setIsFilled] = useState(null);
    const [isFilled2, setIsFilled2] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [imageActive, setimageActive] = useState(0);
    const[likes,setLikes] = useState(props.route.params.like);
    scrapId = props.route.params.scrapId
    mainUserId = props.route.params.mainUserId
    scrapUserId = props.route.params.userId
    userId = props.route.params.mainUserId

    console.log(props.route.params)
    const navigation = useNavigation();

    const ScrapBookData = props.route.params
    //  const ScrapBookData = {
    //      caption: 'Sippin!',
    //      userId: 12,
    //      username: 'The Weeknd',
    //      profileImage: 'https://cdn.dribbble.com/users/112330/screenshots/16392696/media/2e10c7e8323ee72576c6dbfcb72e12fe.png?compress=1&resize=400x300',
    //      scrapId: 1,
    //     imageName: [
    //         'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
    //         'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
    //         'https://media.istockphoto.com/id/1333035210/photo/sunset-view-of-the-dubai-marina-and-jbr-area-and-the-famous-ferris-wheel-and-golden-sand.jpg?s=612x612&w=0&k=20&c=ONRt8hlovwg0m8f6Q3OG5Spavaer2JCaAioUE-XM_r8=',
    //         'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    //         'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg'
    //     ],
    //     like: 210,
    //     comments: 23,
    // }

    onchange = (nativeEvent) => {
      if(nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide != imageActive){
          setimageActive(slide);
        }
      }
    }


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

    const handleReportUser = async () => {
        setModalVisible(false)
        alert("User Reported \n Thank you for your feedback!\n We will look into this matter.")
        await queries.insertReportUser(mainUserId, scrapUserId);
    }

    const handleReportScrap = async () => {
        setModalVisible(false)
        alert("Scrapbook Reported \n Thank you for your feedback!\n We will look into this matter.")
        await queries.insertReportScrapbook(mainUserId, scrapId);
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
    
    return (
        <View style={{flex: 1}}>
        <TopBar />
        <View style={styles.container}>
             <View style={styles.card}>
                 <View style={styles.cardHeader}>
                     <View style={styles.headerLeft}>
                         <Image
                         style={styles.userImage}
                         source={{uri: ScrapBookData.profileImage}}
                         />
                         <TouchableOpacity onPress={() => navigation.navigate('ViewProfile',{ clickedUserId: userId, userId: mainUserId, mainUserId: mainUserId })}>
                             <Text style={styles.userName}> { ScrapBookData.username} </Text>
                         </TouchableOpacity>
                     </View>
                     <View style={styles.headerRight}>
                        <TouchableOpacity style={{paddingRight: 10 }} onPress={()=> setModalVisible(true)}>
                            <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-ellipsis-horizontal' : 'ellipsis-horizontal'}/>
                         </TouchableOpacity>
                     </View >
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
              ScrapBookData.imageName.map((e, index)=>
                <Image
                  key={e}
                  resizeMode='stretch'
                  style={styles.wrap}
                  source={{uri: e}}
                />
              ) 
            }
          </ScrollView>
          <View style={styles.wrapDot}>
            {
              ScrapBookData.imageName.map((e, index) =>
                <Text
                  key={e}
                  style={imageActive == index ? styles.dotActive : styles.dot}>
                    ●
                </Text>
              )
            }
          </View>
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
                    <TouchableOpacity onPress={() => setIsFilled2(!isFilled2)}>
                                <Icon2
                                    name={isFilled2 ? 'bookmark' : 'bookmark-o'}
                                    size={26}
                                    style={{ paddingHorizontal: 13 }}
                                    color={isFilled2 ? 'black' : 'grey'}
                                 />
                             </TouchableOpacity>
                 </View>
                 <Text style={{ marginTop: 1, marginLeft: 1, fontSize: 16, paddingTop: 10}}> { likes} <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16}}>Likes </Text> </Text>
                 <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16, fontWeight: 'bold'}}> { ScrapBookData.caption} </Text>
                 <TouchableOpacity onPress={() => navigation.navigate('Comments',{ userId: mainUserId, mainUserId: mainUserId, scrapId: scrapId })}>
                    <Text style={{ marginTop: 1, marginLeft: 1, fontSize: 16}}> {ScrapBookData.comments} <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16}}>Comments </Text> </Text>
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
                        <TouchableOpacity onPress={handleReportScrap} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}> Report Scrap Book</Text>
                        </TouchableOpacity>
                            <TouchableOpacity onPress={handleReportUser} style={styles.modalButton}>
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
        <View style={styles.backButton}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}> <Icon style={{ color: 'black', paddingTop: '5%'}} size={21} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'md-caret-back'}/> Go Back </Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#ddd',
     paddingTop: 15
 },
 card: {
     backgroundColor: '#fff',
     padding: 10,
     margin: 10,
     borderRadius: 10,
     borderWidth: 1,
     borderColor: 'black',
     marginTop: 1
 },

 cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
},
headerLeft: {
    flexDirection: 'row',
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
     top: '87%',
     alignItems: 'center',
     justifyContent: 'center'
   },

 userImage: {
     width: 50,
     height: 50,
     borderRadius: 50/2,
 },

 userName: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 15,
    fontSize: 17
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
export default ScrapBookView;
