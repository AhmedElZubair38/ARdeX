import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TopBar from '../../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';

const ViewProfile = () => {

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

  const scrapbooks = [
    {
      id: 1,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'A',
      scrapCaption: 'A',
    },
    {
      id: 2,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'B',
      scrapCaption: 'A',
    },
    {
      id: 3,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'C',
      scrapCaption: 'A',
    },
  ]

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
                <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
            <FlatList
                style = {styles.comment}
                data = {scrapbooks}
                extraData = {this.state}
                keyExtractor={item => { return item.id }}
                renderItem={item => {
                    const Notification = item.item
                    return(
                      <View style={styles.box}>
                        <TouchableOpacity>
                            <View  style={styles.scrapbook}>
                              <View>
                                <Image style={styles.image} source={{ uri: Notification.scrapCover }} />
                              </View>
                              <View style={styles.content}>
                                <Text style={styles.scrapbookName}>{Notification.scrapName}</Text>
                                <Text rkType="primary3 mediumLine">{Notification.scrapCaption}</Text>
                              </View>
                            </View>
                        </TouchableOpacity>
                      </View>
                    )
                }}
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
  headerContainer: {
    alignItems: 'center',
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
    backgroundColor: 'grey'
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

export default ViewProfile;
