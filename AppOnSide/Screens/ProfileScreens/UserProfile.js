import React, {useEffect, useState} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TopBar from '../../Navigators/TopBar';
import { useNavigation, useFocusEffect, useIsFocused  } from '@react-navigation/native';
import ProfileNavigator from '../../Navigators/ProfileNavigator';
import { ActivityIndicator } from 'react-native';



const queries = require("../appConnection/profile.js")


const ProfileView = (props) => {


  const isFocused = useIsFocused();

  console.log("UserProfile.js")
  const userId = props.route.params.userId
  console.log("userid:" + userId)
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
    console.log(data)
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
        <TopBar/>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.profileContainer}>
                  <Image
                      style={styles.profilePhoto}
                      source={{uri : profileData.profileImage}}
                  />
                </View>
                  <View style={styles.statContainer}>
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
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('EditProfile')}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <ProfileNavigator/>
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
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20
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
  },
  statContainer: {
    justifyContent : 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingTop:30
  },
  statCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    backgroundColor: '#FF4C68',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginBottom: 10,
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
  }
});

export default ProfileView;
