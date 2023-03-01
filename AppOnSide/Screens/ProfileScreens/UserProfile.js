import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import TopBar from '../../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';

const ProfileView = () => {

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

  const scrapbooks = {

  }

  return (
    <View style={{flex: 1}}>
        <TopBar/>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                style={styles.coverPhoto}
                source={{uri : profileData.coverPic}}
                />
                <View style={styles.profileContainer}>
                <Image
                    style={styles.profilePhoto}
                    source={{uri : profileData.profilePic}}
                />
                <Text style={styles.nameText}>{profileData.name}</Text>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <Text style={styles.bioText} rkType="primary3 mediumLine">{profileData.bio}</Text>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statContainer}>
                <Text style={styles.statCount}>{profileData.scrapbooks}</Text>
                <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style={styles.statContainer}>
                <Text style={styles.statCount}>{profileData.followers}</Text>
                <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statContainer}>
                <Text style={styles.statCount}>{profileData.following}</Text>
                <Text style={styles.statLabel}>Following</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('EditProfile')}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>

        </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
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
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  menuBox: {
    backgroundColor: '#DCDCDC',
    width: '33.333%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth: 3,
    borderColor: 'black',
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  info: {
    fontSize: 22,
    color: '#696969',
  },
  bodyContent: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

export default ProfileView;
