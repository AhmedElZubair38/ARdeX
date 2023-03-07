import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import TopBar from '../../Navigators/TopBar'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

const Comments = () => {
  const com = [
    {
        id: 1,
        image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        name: 'Frank Odalthh',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        day: 13,
        month: 23,
      },
      {
        id: 2,
        image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        name: 'John DoeLink',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        day: 13,
        month: 23,
      },
      {
        id: 3,
        image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        name: 'March SoulLaComa',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        day: 13,
        month: 23,
      },
      {
        id: 4,
        image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        name: 'Finn DoRemiFaso',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
          day: 13,
          month: 23,
      },
      {
        id: 5,
        image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        name: 'Maria More More',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
          day: 13,
          month: 23,
      },
      {
        id: 6,
        image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        name: 'Clark June Boom!',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
          day: 13,
          month: 23,
      },
      {
        id: 7,
        image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
        name: 'The googler',
        comment:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
          day: 13,
          month: 23,
      },
  ]

  const [comments, setComments] = useState(com)

  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false);

  const [query, setComment] = useState()

  const showAlert = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId)
  }

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
                                    <TouchableOpacity onPress={()=> setModalVisible(true)}>
                                        <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-ellipsis-horizontal' : 'ellipsis-horizontal'}/>
                                    </TouchableOpacity>
                                </View>
                                <Text rkType="primary3 mediumLine">{Notification.comment}</Text>
                            </View>
                            <Text style= {styles.date}>{Notification.day}/{Notification.month}</Text>
                        </View>
                    )
                }}
            />
        </View>
        <View style={styles.search}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Upload a comment..."
                    placeholderTextColor="grey" 
                    underlineColorAndroid="transparent"
                    onChangeText={name_address => setComment({ name_address })}
                    
                />
                <TouchableOpacity style={styles.searchButton}>
                        <Icon name={Platform.OS === 'ios' ? 'send' : 'send'}></Icon>
                </TouchableOpacity>
            </View>
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
                            <TouchableOpacity onPress={() => console.log('Report Comment Button pressed')} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}> Report Comment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
        paddingLeft: 10,
        paddingRight: 16,
        paddingVertical: 12,
        alignItems: 'flex-start',
        paddingBottom: 25
    },
    commentHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 5,
    },
    image: {
        height : 30,
        width : 30,
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
    user: {
        marginLeft: -5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        position: 'absolute',
        bottom: 5,
        right: 20,
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
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      search: {
        flexDirection: 'row',
        width: '87%',
        marginBottom: 10,
      },
      inputs: {    
        height: 45,
        margin: 25,
        width: '87%',
        color: 'black'
      },
      searchButton: {    
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        width: '13%',
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
})