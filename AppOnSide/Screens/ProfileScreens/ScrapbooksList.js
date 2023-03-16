import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions, ScrollView, Modal } from 'react-native'
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/Fontisto';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const posts = [

    {
        user_name: 'The Weeknd',
        user_image: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
        feed_image: [
            'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
            'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
            'https://media.istockphoto.com/id/1333035210/photo/sunset-view-of-the-dubai-marina-and-jbr-area-and-the-famous-ferris-wheel-and-golden-sand.jpg?s=612x612&w=0&k=20&c=ONRt8hlovwg0m8f6Q3OG5Spavaer2JCaAioUE-XM_r8='
            
        ],
        feed_caption: 'Taking the dog out!',
        like_count: '203',
        comment_count: '16'
    },

    {
        user_name: 'The Weeknd',
        user_image: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
        feed_image: [
            'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
            'https://media.istockphoto.com/id/1333035210/photo/sunset-view-of-the-dubai-marina-and-jbr-area-and-the-famous-ferris-wheel-and-golden-sand.jpg?s=612x612&w=0&k=20&c=ONRt8hlovwg0m8f6Q3OG5Spavaer2JCaAioUE-XM_r8=',
            'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
            'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg'
        ],
        feed_caption: 'Wit the homie!',
        like_count: '1,982,234',
        comment_count: '6,773'
    },

    {
        user_name: 'The Weeknd',
        user_image: 'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
        feed_image: [
            'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
            'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
            'https://media.istockphoto.com/id/1333035210/photo/sunset-view-of-the-dubai-marina-and-jbr-area-and-the-famous-ferris-wheel-and-golden-sand.jpg?s=612x612&w=0&k=20&c=ONRt8hlovwg0m8f6Q3OG5Spavaer2JCaAioUE-XM_r8=',
            'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
            'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg'
        ],
        feed_caption: 'New album out on all platforms!',
        like_count: '1,234',
        comment_count: '67'
    }
]

function Item ({user_name, user_image, feed_image, feed_caption, like_count, comment_count}) {

    const [isFilled, setIsFilled] = useState(false);
    const [isFilled2, setIsFilled2] = useState(false);
    const navigation = useNavigation();
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
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    {/* <View style={styles.headerLeft}>
                        <Image
                        style={styles.userImage}
                        source={{uri: user_image}}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('ViewProfile')}>
                            <Text style={styles.userName}> {user_name} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity style={{paddingRight: 10 }} onPress={()=> setModalVisible(true)}>
                            <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-ellipsis-horizontal' : 'ellipsis-horizontal'}/>
                        </TouchableOpacity>
                    </View > */}
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
              feed_image.map((e, index)=>
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
              feed_image.map((e, index) =>
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
                </View>
                <Text style={{ marginTop: 1, marginLeft: 1, fontSize: 16, paddingTop: 10}}> {like_count} <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16}}>Likes </Text> </Text>
                <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16, fontWeight: 'bold'}}> {feed_caption} </Text>
                <Text style={{ marginTop: 1, marginLeft: 1, fontSize: 16}}> {comment_count} <Text style={{ marginTop: 5, marginLeft: 1, fontSize: 16}}>Comments </Text> </Text>
            </View>
        </View>
    )
}

export default function ScrapbooksList() {

    const navigation = useNavigation();
    

    return (

        
    <View style={styles.container}>
    <FlatList
        data={posts}
        renderItem={({ item }) => (
            <Item
            user_name={item.user_name}
            user_image={item.user_image}
            feed_image={item.feed_image}
            feed_caption={item.feed_caption}
            like_count={item.like_count}
            comment_count={item.comment_count}
            key={item.user_name}
            />
        )}
        keyExtractor={item => item.user_name}/>
        
    </View>
    )
}

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