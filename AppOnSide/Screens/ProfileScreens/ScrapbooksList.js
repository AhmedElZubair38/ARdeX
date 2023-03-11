import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/Fontisto';

const ScrapbooksList = () => {
    const navigation = useNavigation();

    const posts = [
        {
          id: 1,
          user: "nj2002",
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          datetime: "2023-2-28 12:00:00",
          name: "Scrap1",
          caption: "Test caption",
        },
        {
          id: 2,
          user: "nj2002",
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          datetime: "2023-2-28 12:00:00",
          name: "Scrap2",
          caption: "Test caption",
        },
        {
          id: 3,
          user: "nj2002",
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          datetime: "2023-2-28 12:00:00",
          name: "Scrap2",
          caption: "Test caption",
        },
    ]

    const [isFilled, setIsFilled] = useState(false);
    const [isFilled2, setIsFilled2] = useState(false);

  return (
    <View style={{flex : 1}}>
        <FlatList
            data={posts}
            renderItem={({item}) => (
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate('ScrapBookView')}>
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={{uri: item.image}} style={styles.profileImage}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text style={styles.name}>{item.user}</Text>
                                        <Text style={styles.time}>{item.datetime}</Text>
                                    </View>
                                </View>
                            </View>
                            <Image source={{uri: item.image}} style={styles.postImage}/>
                            <View style={styles.cardFooter}>
                    <View style={styles.footerLeft}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            {/* <Icon style={{ fontSize: 30, color: 'red' }} name={Platform.OS === 'ios' ? 'ios-heart' : 'heart'}/> */}
                            <TouchableOpacity onPress={() => setIsFilled(!isFilled)}>
                                <Icon4
                                    name={isFilled ? 'heart' : 'hearto'}
                                    size={24}
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
                </View>
                            <Text style={styles.scrapName}>{item.name}</Text>
                            <Text style={styles.scrapCaption}>{item.caption}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            />
    </View>
  )
}

export default ScrapbooksList

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
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50/2
    },
    moreIcon: {
        width: 20,
        height: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 14,
        color: '#808080',
    },
    postImage: {
        width: '100%',
        height: 250,
        marginTop: 10,
        borderRadius: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    socialBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    socialBarSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    icon: {
        width: 25,
        height: 25,
    },
    socialBarLabel: {
        marginLeft: 8,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#808080',
    },
    scrapName: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    scrapCaption:{
        fontSize: 14,
        paddingHorizontal: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footerLeft: {
        flexDirection: 'row',
        paddingTop: 10,
    },

})