import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TopBar from '../../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

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

  const [modalVisible, setModalVisible] = useState(false);

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
            <View style={styles.buttonField}>
              <TouchableOpacity style={styles.button} onPress={() => console.log('Follow Button Pressed')}>
                  <Text style={styles.buttonText}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2} onPress={()=> setModalVisible(true)}>
                  <Icon style={styles.buttonText} name={Platform.OS === 'ios' ? 'ios-ellipsis-horizontal' : 'ellipsis-horizontal'}/>
              </TouchableOpacity>
            </View>
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
        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Some text in the modal</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => console.log('Report User Button pressed')} style={styles.modalButton}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 15
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
    paddingTop: 15,
    paddingHorizontal:25,
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
  buttonField:{
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#FF4C68',
    borderRadius: 10,
    padding: 10,
    marginLeft: 15,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginBottom: 10,
    width: '80%'
  },
  button2: {
    backgroundColor: '#FF4C68',
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginBottom: 10,
    width: '10%'
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
});

export default ViewProfile;
