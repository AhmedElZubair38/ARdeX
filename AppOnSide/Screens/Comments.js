import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import TopBar from '../Navigators/TopBar'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Comments = () => {
  const com = [
    {
        id: 1,
        image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        name: 'Frank Odalthh',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        timeHr: 13,
        timeMin: 23,
      },
      {
        id: 2,
        image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        name: 'John DoeLink',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        timeHr: 13,
        timeMin: 23,
      },
      {
        id: 3,
        image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        name: 'March SoulLaComa',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
          timeHr: 13,
          timeMin: 23,
      },
      {
        id: 4,
        image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        name: 'Finn DoRemiFaso',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
          timeHr: 13,
          timeMin: 23,
      },
      {
        id: 5,
        image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        name: 'Maria More More',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
          timeHr: 13,
          timeMin: 23,
      },
      {
        id: 6,
        image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        name: 'Clark June Boom!',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
          timeHr: 13,
          timeMin: 23,
      },
      {
        id: 7,
        image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
        name: 'The googler',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
          timeHr: 13,
          timeMin: 23,
      },
  ]

  const [comments, setComments] = useState(com)

  const navigation = useNavigation()

  return (
    <View style={{flex : 1}}>
        <TopBar/>
        <View style = {styles.container}>
            <View style = {styles.head}>
                <TouchableOpacity onPress={ () => navigation.goBack()}>
                    <Icon name={Platform.OS === 'ios' ? 'ios-chevron-back' : 'chevron-back'} size = {20}/>
                </TouchableOpacity>
                <Text style = {styles.headerText}>Comments</Text>
            </View>
            <FlatList
                style = {styles.comment}
                data = {comments}
                extraData = {this.state}
                ItemSeparatorComponent={() => {
                    return <View style={styles.separator} />
                }}
                keyExtractor={item => { return item.id }}
                renderItem={item => {
                    const Notification = item.item
                    return(
                        <View style={styles.comments}>
                            
                            <View style = {styles.content}>
                                <View style={styles.commentHeader}>
                                    <View style={styles.user}>
                                        <TouchableOpacity onPress={() => navigation.navigate('ViewProfile')}>
                                            <Image style={styles.image} source={{ uri: Notification.image }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('ViewProfile')}>
                                            <Text style= {styles.username}>{Notification.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style= {styles.time}>{Notification.timeHr}:{Notification.timeMin}</Text>
                                </View>
                                <Text rkType="primary3 mediumLine">{Notification.comment}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    </View>
  )
}



export default Comments

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    head: {
        flexDirection : 'row',
        alignItems: 'center', 
        marginLeft: 20
    },
    headerText : {
        fontSize: 20,
        fontWeight : 'bold',
        padding: 10,
        alignSelf: 'center'
    },
    separator: {
        height: .5,
        backgroundColor: '#CCCCCC',
    },
    comments : {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 16,
        paddingVertical: 12,
        alignItems: 'flex-start',
    },
    commentHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 5,
    },
    image: {
        height : 20,
        width : 20,
        borderRadius: 50,
    },
    username: {
        fontSize: 20,
        paddingLeft: 10
    },
    content: {
        flex : 1,
        marginLeft: 20
    },
    user:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})