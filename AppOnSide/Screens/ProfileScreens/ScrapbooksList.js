import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ScrapbooksList = () => {
    const navigation = useNavigation();

    const posts = [
        {
          id: 1,
          user: "nj2002",
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          datetime: "2023-2-28 12:00:00",
        },
        {
          id: 2,
          user: "nj2002",
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          datetime: "2023-2-28 12:00:00",
        },
        {
          id: 3,
          user: "nj2002",
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          datetime: "2023-2-28 12:00:00",
        },
      ]

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

})