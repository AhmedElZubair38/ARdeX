import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import TopBar from '../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';

const ProfileView = () => {

  const navigation = useNavigation();

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
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('EditProfile')}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <View style={styles.menuBox}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://www.theweeknd.com/files/2021/10/photo_202110_07_SPOTIFY-BRIANZIFF_THEWEEKND_1063-1.jpeg' }}
                  />
                </View>

                <View style={styles.menuBox}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://akns-images.eonline.com/eol_images/Entire_Site/2021330/rs_1200x1200-210430163406-1200-the-weeknd.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top' }}
                  />
                </View>

                <View style={styles.menuBox}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://yt3.googleusercontent.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s900-c-k-c0x00ffffff-no-rj' }}
                  />
                </View>

                <View style={styles.menuBox}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://i.pinimg.com/736x/54/30/6f/54306f891255216082f0c3c98477e4c0.jpg' }}
                  />
                </View>

                <View style={styles.menuBox}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://assets.fontsinuse.com/static/use-media-items/156/155347/full-2048x2048/61e554d7/weeknd-dawn-fm-alts-jan-7_0001_Layer-1.jpeg' }}
                  />
                </View>

                <View style={styles.menuBox}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://m.media-amazon.com/images/I/51fhUO3SN5L.jpg' }}
                  />
                </View>

                <View style={styles.menuBox}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTto2CDxUYo59vPFqKIcMkQAjIdQSlwT5aerQ&usqp=CAU' }}
                  />
                </View>
                
              </View>
            </View>
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
