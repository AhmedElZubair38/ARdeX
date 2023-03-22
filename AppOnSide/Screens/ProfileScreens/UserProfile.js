import React, {useEffect, useState} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TopBar from '../../Navigators/TopBar';
import { useNavigation, useFocusEffect, useIsFocused  } from '@react-navigation/native';
import ProfileNavigator from '../../Navigators/ProfileNavigator';
import { ActivityIndicator } from 'react-native';



const queries = require("../appConnection/profile.js")


const ProfileView = (props) => {


  const isFocused = useIsFocused();

  // console.log("UserProfile.js")
  const userId = props.route.params.userId
  const mainUserId = props.route.params.mainUserId
  // console.log("userid:" + userId)
  // console.log(props)
  // console.log("Main:" + props.route.params.mainUserId)

  const [profileData, setProfileData] = useState(null);

  const getData = async (userId) => {
    const temp = await queries.getProfileStuff(userId)
    // console.log(data)
    const followers = await queries.getFollowersCount(userId)
    // console.log(followers)
    const following = await queries.getFollowingCount(userId)
    // console.log(following)
    const scrapbooks = await queries.getScrapbooksCount(userId)
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

  useEffect(() => {
    if (isFocused) {
    getData(userId).then((data) => {
      setProfileData(data);
    });}
  }, [userId, isFocused]);

  const navigation = useNavigation();

  if (!profileData) {
    return <ActivityIndicator color='#FF4C68' size={120} style={styles.indicator} />;
  }

  const profileData1 = {
    name: 'The Weeknd',
    bio: 'POP ftw',
    profileImage: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
    scrapbooks: 5,
    followers: 2,
    following: 2,
  }

  return (
    <View style={{flex: 1}}>
        <TopBar
          userId = {mainUserId}
          mainUserId = {mainUserId}
        />
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.profileContainer}>
                  <Image
                      style={styles.profilePhoto}
                      source={{uri : profileData.profileImage}}
                  />
                </View>
                  <View style={[styles.statContainer, {paddingLeft: 10}]}>
                    <Text style={styles.statCount}>{profileData.scrapbooks}</Text>
                    <Text style={styles.statLabel}>ScrapBooks</Text>
                  </View>
                <View style={styles.statContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('ViewFollowers',{ userId: userId, mainUserId: props.route.params.mainUserId })}>
                        <Text style={styles.statCount}>{profileData.followers}</Text>
                    </TouchableOpacity>
                <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('ViewFollowing',{ userId: userId, mainUserId: props.route.params.mainUserId })}>
                        <Text style={styles.statCount}>{profileData.following}</Text>
                    </TouchableOpacity>
                <Text style={styles.statLabel}>Following</Text>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <Text style={styles.nameText}>{profileData.name}</Text>
                <Text style={styles.bioText} rkType="primary3 mediumLine">{profileData.bio}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('EditProfile',{ userId: userId, mainUserId: props.route.params.mainUserId, name: profileData.name, bio: profileData.bio, profileImage: profileData.profileImage })}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <ProfileNavigator
              initialParams={{userId: userId, mainUserId: userId}}
              userId = {userId}
              mainUserId = {userId}
            />
        </View>
        
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
    marginHorizontal: 15,
    marginTop: 30,
  },

  profileContainer: {
    alignItems: 'center',
    marginTop: -20
  },

  profilePhoto: {
    width: 95,
    height: 95,
    borderRadius: 50,
    top: 10,
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
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    alignSelf: 'center',
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

export default ProfileView;
