import React, {useState, useEffect} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TopBar from '../../Navigators/TopBar';
import { useNavigation, useFocusEffect  } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import ProfileNavigator from '../../Navigators/ProfileNavigator';
import queries from "../appConnection/profile.js"
import { ActivityIndicator } from 'react-native';


const ViewProfile = (props) => {

  console.log("ViewProfile.js")
  clickedUserId = props.route.params.clickedUserId
  mainUserId = props.route.params.mainUserId
  console.log("Clicked:" + clickedUserId)
  console.log("Main:" + mainUserId)
  
  const navigation = useNavigation();

  if (clickedUserId === mainUserId){
    navigation.navigate('UserProfile',{ userId: clickedUserId, mainUserId: props.route.params.mainUserId })
  }

  
  const [profileData, setProfileData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [follow,setFollow] = useState(false);

  const getData = async (clickedUserId) => {
    console.log("1")
    const temp = await queries.getProfileStuff(clickedUserId)
    // console.log(data)
    const followers = await queries.getFollowersCount(clickedUserId)
    // console.log(followers)
    const following = await queries.getFollowingCount(clickedUserId)
    // console.log(following)
    const scrapbooks = await queries.getScrapbooksCount(clickedUserId)
    // console.log(scrapbooks)
    let bio = temp.bio
    // console.log(bio.length)
    if (bio!==null && bio.length > 50){
    bio = bio.substring(0, 50) + '...';}
    // Hey Everyone, I am Raj Jagasia. Nice to meet you.
    let data = {...temp, bio, followers, following, scrapbooks}
    // console.log(data)
    return data
  }

  const checkFollower = async (clickedUserId,mainUserId) => {
    console.log("checkFollower fundtion")
    return await queries.checkFollower(clickedUserId, mainUserId)
  }

  let check = false
    
  
  useEffect(() => {
    console.log("Line 60")
    getData(clickedUserId).then((data) => {
      setProfileData(data);
    });
    console.log("Line 62")

    checkFollower(clickedUserId, mainUserId).then((data) => {
      
      console.log("Line 66")
      if (data === true){
        setFollow("Following")
        check = true
      }
      else{
        setFollow("Follow")
      }
    });
  }, [clickedUserId, mainUserId]);


  if (!profileData) {
    return <ActivityIndicator color='#FF4C68' size={120} style={styles.indicator} />;
  }

  const profileData1 = {
    name: 'The Weeknd',
    bio: 'POP ftw',
    profilePic: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
    coverPic: 'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
    scrapbooks: 5,
    followers: 2,
    following: 2,
  }

  const handleFollowClick = async () => {
    console.log("Follow Button Pressed")
    if (follow === "Follow"){
      await queries.insertFollower(clickedUserId, mainUserId)
      setFollow("Following")
      alert("You are now following " + profileData.name + "")
    }
    else{
      await queries.deleteFollower(clickedUserId, mainUserId)
      setFollow("Follow")
      alert("You are no longer following " + profileData.name + "")
    }
  }


  return (
    <View style={{flex: 1}}>
        <TopBar/>
        <View style={styles.container}>
          {/* <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.backButton}>
            <Icon style={{color: 'black'}} size={30} name={Platform.OS === 'ios' ? 'ios-caret-back-outline' : 'caret-back'}/>
          </TouchableOpacity> */}
          <View style={styles.headerContainer}>
                <View style={styles.profileContainer}>
                  <Image
                      style={[styles.profilePhoto, {marginLeft: 2}]}
                      source={{uri : profileData.profileImage}}

                  />
                </View>
                  <View style={styles.statContainer}>
                    <Text style={styles.statCount}>{profileData.scrapbooks}</Text>
                    <Text style={styles.statLabel}>Scrap Books</Text>
                  </View>
                <View style={styles.statContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('ViewFollowers',{ userId: clickedUserId, mainUserId: props.route.params.mainUserId })}>
                        <Text style={styles.statCount}>{profileData.followers}</Text>
                    </TouchableOpacity>
                <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('ViewFollowing',{ userId: clickedUserId, mainUserId: props.route.params.mainUserId })}>
                        <Text style={styles.statCount}>{profileData.following}</Text>
                    </TouchableOpacity>
                <Text style={styles.statLabel}>Following</Text>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <Text style={styles.nameText}>{profileData.name}</Text>
                <Text style={styles.bioText} rkType="primary3 mediumLine">{profileData.bio}</Text>
            </View>
            <View style={styles.buttonField}>
              <TouchableOpacity style={follow === "Follow"? styles.button: styles.buttonFollowing } onPress={handleFollowClick}>
                  <Text style={check === true ? styles.buttonTextBlack : styles.buttonText}>{follow}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2} onPress={()=> setModalVisible(true)}>
                  <Icon style={styles.buttonText2} name={Platform.OS === 'ios' ? 'ios-ellipsis-horizontal' : 'ellipsis-horizontal'}/>
              </TouchableOpacity>
            </View>
            <ProfileNavigator/>
            <View style={styles.backButton}>
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold'}}> <Icon style={{ color: 'black'}} size={21} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'md-caret-back'}/> Go Back </Text>
              </TouchableOpacity>
            </View>
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
                            <TouchableOpacity onPress={() => console.log('Report User Button pressed')} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Report User</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('Block User Button pressed')} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Block User</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  indicator: {
    flex: 1
  },
  backButton: {
    width: 210,
    height: 60,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#FF4C68',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  
  },

  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 30,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -20
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  statContainer: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 20,
  },
  statLabel: {
    fontSize: 14,
    color: 'grey',
    fontWeight: 'bold'

  },
  buttonField:{
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#FF4C68',
    borderRadius: 20,
    padding: 10,
    marginLeft: 15,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginBottom: 10,
    width: '80%',
    borderWidth: 1.5,
    borderColor: 'black',
  },

  buttonFollowing: {
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 10,
    marginLeft: 15,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginBottom: 10,
    width: '80%',
    borderWidth: 1.5,
    borderColor: 'black',
  },

  button2: {
    backgroundColor: '#FF4C68',
    borderRadius: 20,
    padding: 10,
    marginLeft: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginBottom: 10,
    width: '10%',
    borderWidth: 1.5,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    bottom: 0,
    textAlign: 'center',
  },
  buttonText2: {
    fontSize: 16,
    color: '#fff',
    bottom: -3,
    right : -1,
    textAlign: 'center',
  },
  box: {
    margin: 10
  },
  scrapbook: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 16,
    paddingVertical: 12,
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  image: { 
    height: 100,
    width : 100,
    borderRadius: 10
  },
  content: {
    marginLeft: 20,
    marginTop: 10,
  },
  scrapbookName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
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
buttonTextBlack: {
  fontSize: 16,
  color: 'black',
  textAlign: 'center',
}

});

export default ViewProfile;