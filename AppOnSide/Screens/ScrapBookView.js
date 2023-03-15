// import React, {useState} from 'react';
// import { StyleSheet, View, Text, Image, ScrollView, FlatList, StatusBar, Dimensions } from 'react-native';
// import TopBar from '../Navigators/TopBar';
// import { useNavigation } from '@react-navigation/native';

// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;

// const ScrapBookView = () => {

//     const navigation = useNavigation();
//     const ScrapBookData = {
//         scrapName: 'Scrapbook Title',
//         userId: 12,
//         user_name: 'The Weeknd',
//         scrapId: 1,
//         scrapDate: '2020-12-12',
//         scrapBody: 'This is the body of the scrapbook',
//         images: [
//             'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
//             'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
//             'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
//             'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
//             'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
//         ],
//         likes: 2,
//         comments: 2,
//     }

//     const [imageActive, setimageActive] = useState(0);
//     onchange = (nativeEvent) => {
//       if(nativeEvent){
//         const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
//         if(slide != imageActive){
//           setimageActive(slide);
//         }
//       }
//     }
    
//     return (
//       <View style={{flex : 1}}>
//         <TopBar/>
//         <View style={styles.page}>
//           <ScrollView
//             onScroll={({nativeEvent}) => onchange(nativeEvent)}
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled
//             horizontal
//             style={styles.wrap}
//           >
//             {
//               ScrapBookData.images.map((e, index)=>
//                 <Image
//                   key={e}
//                   resizeMode='stretch'
//                   style={styles.wrap}
//                   source={{uri: e}}
//                 />
//               ) 
//             }

//           </ScrollView>

//           <View style={styles.wrapDot}>
//             {
//               ScrapBookData.images.map((e, index) =>
//                 <Text
//                   key={e}
//                   style={imageActive == index ? styles.dotActive : styles.dot}>
//                     ●
//                 </Text>
//               )
//             }
//           </View>
//         </View>
//       </View>
//     );
// };

// const styles = StyleSheet.create({
//   wrap: {
//     width: WIDTH * 0.95,
//     height: HEIGHT * 0.3,
//     alignSelf: 'center'
//   },
//   wrapDot: {
//     position: 'absolute',
//     bottom: 0,
//     flexDirection: 'row',
//     alignSelf: 'center'

//   },
//   dotActive: {
//     margin: 3,
//     color: 'black'
//   },
//   dot: {
//     margin: 3,
//     color: 'white'
//   }
// });

// export default ScrapBookView;

import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList, StatusBar, Dimensions, TouchableOpacity} from 'react-native';
import TopBar from '../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/Fontisto';
import Modal from "react-native-modal";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ScrapBookView = () => {

    const navigation = useNavigation();
    const ScrapBookData = {
        feed_caption: 'test CAPTION',
        userId: 12,
        user_name: 'The Weeknd',
        user_image: 'https://cdn.dribbble.com/users/112330/screenshots/16392696/media/2e10c7e8323ee72576c6dbfcb72e12fe.png?compress=1&resize=400x300',
        scrapId: 1,
        scrapDate: '2020-12-12',
        images: [
            'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
            'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
            'https://media.istockphoto.com/id/1333035210/photo/sunset-view-of-the-dubai-marina-and-jbr-area-and-the-famous-ferris-wheel-and-golden-sand.jpg?s=612x612&w=0&k=20&c=ONRt8hlovwg0m8f6Q3OG5Spavaer2JCaAioUE-XM_r8=',
            'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
            'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg'
        ],
        likes: 2,
        comments: 2,
    }

    const [isFilled, setIsFilled] = useState(false);
    const [isFilled2, setIsFilled2] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const [imageActive, setimageActive] = useState(0);
    onchange = (nativeEvent) => {
      if(nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide != imageActive){
          setimageActive(slide);
        }
      }
    }
    
    return (
      <View style={styles.container}>
      <TopBar/>
      <View style={styles.card}>
          <View style={styles.cardHeader}>
              <View style={styles.headerLeft}>
                  <Image
                  style={styles.userImage}
                  source={{uri: ScrapBookData.user_image}}
                  />
                  <TouchableOpacity onPress={() => navigation.navigate('ViewProfile')}>
                      <Text style={styles.userName}> {ScrapBookData.user_name} </Text>
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
          >
            {
              ScrapBookData.images.map((e, index)=>
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
              ScrapBookData.images.map((e, index) =>
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
                      {/* <Icon style={{ fontSize: 30, color: 'red' }} name={Platform.OS === 'ios' ? 'ios-heart' : 'heart'}/> */}
                      <TouchableOpacity onPress={() => setIsFilled(!isFilled)}>
                          <Icon4
                              name={isFilled ? 'heart' : 'hearto'}
                              size={26}
                              color={isFilled ? 'red' : 'grey'}
                          />
                      </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                      <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
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
              {/* <Icon3 style={{ fontSize: 29, color: 'grey', paddingHorizontal: 10 }} name={Platform.OS === 'ios' ? 'ios-heart' : 'bookmark'}/> */}
          </View>
          <Text style={{ marginTop: 1, marginLeft: 1, fontSize: 16, paddingTop: 10}}> {ScrapBookData.likes} <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16}}>Likes </Text> </Text>
          <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16, fontWeight: 'bold'}}> {ScrapBookData.feed_caption} </Text>
          <Text style={{ marginTop: 1, marginLeft: 1, fontSize: 16}}> {ScrapBookData.comments} <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16}}>Comments </Text> </Text>
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
                  <TouchableOpacity onPress={() => {setModalVisible(false); navigation.navigate('ReportScrapBookHomeScreen');}} style={styles.modalButton}>
                      <Text style={styles.modalButtonText}> Report Scrap Book</Text>
                  </TouchableOpacity>
                      <TouchableOpacity onPress={() => {setModalVisible(false); navigation.navigate('ReportUserHomeScreen');}} style={styles.modalButton}>
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
    backgroundColor: '#ddd'
},

card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
},

cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
},

headerLeft: {
    flexDirection: 'row',
},

userImage: {
    width: 50,
    height: 50,
    borderRadius: 50/2
},

userName: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 15,
    fontSize: 17
},

icon: {
    fontSize: 20,
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
