import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TopBar from '../../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';
import ProfileNavigator from '../../Navigators/ProfileNavigator';

const ProfileView = (props) => {
  console.log("hifdsfa")
  console.log(props.route.params.userId)
  const navigation = useNavigation();

  const profileData = {
    name: 'The Weeknd',
    bio: 'POP ftw',
    profilePic: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
    coverPic: 'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
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
                      source={{uri : profileData.profilePic}}
                  />
                </View>
                  <View style={styles.statContainer}>
                    <Text style={styles.statCount}>{profileData.scrapbooks}</Text>
                    <Text style={styles.statLabel}>Posts</Text>
                  </View>
                <View style={styles.statContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('ViewFollowers')}>
                        <Text style={styles.statCount}>{profileData.followers}</Text>
                    </TouchableOpacity>
                <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('ViewFollowing')}>
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
