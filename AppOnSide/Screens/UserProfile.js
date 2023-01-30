import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import TopBar from '../Navigators/TopBar';

const ProfileView = () => {

  const handleEditPress = () => {

  }

  return (
    <View style={{flex: 1}}>
        <TopBar/>
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                style={styles.coverPhoto}
                source={{uri: 'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg'}}
                />
                <View style={styles.profileContainer}>
                <Image
                    style={styles.profilePhoto}
                    source={{uri: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg'}}
                />
                <Text style={styles.nameText}>The Weeknd</Text>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <Text style={styles.bioText}>
                POP ftw
                </Text>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statContainer}>
                <Text style={styles.statCount}>1234</Text>
                <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style={styles.statContainer}>
                <Text style={styles.statCount}>5678</Text>
                <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statContainer}>
                <Text style={styles.statCount}>9101</Text>
                <Text style={styles.statLabel}>Following</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleEditPress}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
        </ScrollView>
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
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
};

export default ProfileView;
