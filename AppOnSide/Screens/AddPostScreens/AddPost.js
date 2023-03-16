import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import TopBar from '../../Navigators/TopBar'
import { useNavigation } from '@react-navigation/native';

const AddPost = () => {
    const navigation = useNavigation();

    const data = [
        {
          scrapbookId: 1,
          image: 'https://img.icons8.com/color/70/000000/cottage.png',
          scrapbookName: 'Scrap 1',
        },
        {
            scrapbookId: 2,
            image: 'https://img.icons8.com/color/70/000000/cottage.png',
            scrapbookName: 'Scrap 2',
        },
        {
            scrapbookId: 3,
            image: 'https://img.icons8.com/color/70/000000/cottage.png',
            scrapbookName: 'Scrap 3',
        },
        {
            scrapbookId: 4,
            image: 'https://img.icons8.com/color/70/000000/cottage.png',
            scrapbookName: 'Scrap 4',
        },
        {
            scrapbookId: 5,
            image: 'https://img.icons8.com/color/70/000000/cottage.png',
            scrapbookName: 'Scrap 5',
        },
        {
            scrapbookId: 6,
            image: 'https://img.icons8.com/color/70/000000/cottage.png',
            scrapbookName: 'Scrap 6',
        },
        {
            scrapbookId: 7,
            image: 'https://img.icons8.com/color/70/000000/cottage.png',
            scrapbookName: 'Scrap 7',
        },
    ]

    const [results, setResults] = useState(data)
    const [query, setQuery] = useState()

    const showAlert = viewId => {
        Alert.alert('Alert', 'Button pressed ' + viewId)
    }
    return (
        <View style={styles.container}>
            <TopBar/>
            <View style={styles.content}>
                <Text style={styles.heading}>Edit Scrapbook</Text>
            </View>
                <FlatList
                style={styles.notificationList}
                enableEmptySections={true}
                data={results}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={styles.notificationBox} onPress={() => navigation.navigate('ScrapBookView')}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                    <Text style={styles.description}>{item.scrapbookName}</Text>
                    </TouchableOpacity>
                )
                }}
                />
            <View>
            <Text style={styles.heading2}> OR </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateNewScrapbook')}>
                <Text style={styles.buttonText}>Create New Scrapbook</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddPost

const styles = StyleSheet.create({

    heading: {
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 7,
        fontSize: 30
      },
      heading2: {
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'justify',
        paddingHorizontal: 25,
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 19
      },
    container: {
        flex : 1,
    },
    content: {
        margin: 10,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    notificationList: {
        padding: 15,
      },
      notificationBox: {
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      image: {
        width: 40,
        height: 40,
        borderRadius: 100,
      },
      description: {
        fontSize: 18,
        color: '#3498db',
        marginLeft: 10,
        alignSelf: 'center',
      },
      button: {
        marginBottom: 15,
        marginHorizontal: 35,
        backgroundColor: '#FF4C68',
        borderRadius: 8,
        paddingVertical: 10,
        paddingBottom: 10,
        alignItems: 'center',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
      },
      buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
})