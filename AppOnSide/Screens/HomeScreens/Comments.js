import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import TopBar from '../../Navigators/TopBar'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Modal from "react-native-modal";


import queries from "../appConnection/home.js"

const Comments = (props) => {

    scrapId = props.route.params.scrapId
    mainUserId = props.route.params.mainUserId
    const [comments, setComments] = useState(com)

    const navigation = useNavigation()
  
    const [modalVisible, setModalVisible] = useState(false);
  
    const [query, setComment] = useState("")
    const isFocused = useIsFocused()


// console.log(props.route.params.scrapId)
    const[com, setData] = useState(null)

    const getData = async (scrapId) => {
        const data = await queries.getCommentsByID(scrapId)
        return data
      };
    

    //   useEffect(() => {
    //     if (isFocused) {
    //     getData(scrapId).then((data) => {
    //         setData(data);
    //         console.log("GOT THE DATA")
    //         console.log(data)
    //     });}
    //   }, [scrapId, isFocused]);

    useEffect(() => {
        getData(scrapId).then((data) => {
            setData(data);
            setComments(data)
        });
      }, [scrapId]);

      if (!com) {
        return null; // or a loading indicator
      }

      const handleButtonPress = async () => {
        console.log("Button Pressed")
        console.log(query.name_address)
        setComment("")
        queries.insertScrapbookComment(scrapId,mainUserId, query.name_address)
        
        getData(scrapId).then((data) => {
            setComments(data)
            setData(data);
            
        });
        
        }




  const showAlert = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId)
  }

  return (
    <View style={{flex : 1}}>
        <TopBar/>
        <View style = {styles.container}>
            <View style = {styles.head}>
                <TouchableOpacity style={styles.headerText} onPress={ () => navigation.goBack()}>
                    <Icon name={Platform.OS === 'ios' ? 'ios-chevron-back' : 'chevron-back'} size = {22}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.headerText}>Comments</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data = {comments}
                extraData = {this.state}
                ItemSeparatorComponent={() => {
                    return <View style={styles.separator} />
                }}
                keyExtractor={item => { return item.commentId }}
                renderItem={item => {
                    const Notification = item.item
                    return(
                        <View style={styles.comments}>
                            <View style = {styles.content}>
                                <View style={styles.commentHeader}>
                                    <View style={styles.user}>
                                        <TouchableOpacity onPress={() => navigation.navigate('ViewProfile',{clickedUserId: Notification.userId, userId: mainUserId, mainUserId: mainUserId })}>
                                            <Image style={styles.image} source={{ uri: Notification.profileImage }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('ViewProfile',{ clickedUserId: Notification.userId, userId: mainUserId, mainUserId: mainUserId })}>
                                            <Text style= {styles.username}>@{Notification.username}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* <TouchableOpacity onPress={()=> setModalVisible(true)}>
                                        <Icon style={{fontSize: 18}} name={Platform.OS === 'ios' ? 'ios-ellipsis-horizontal' : 'ellipsis-horizontal'}/>
                                    </TouchableOpacity> */}
                                </View>
                                <Text>{Notification.comment}</Text>
                            </View>
                            <Text style= {styles.date}>{Notification.timeUploaded}</Text>
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
                    value={query.name_address}
                    
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleButtonPress}>
                        <Icon name={Platform.OS === 'ios' ? 'send' : 'send'}></Icon>
                </TouchableOpacity>
            </View>
        </View>
        {/* <Modal
                animationType="slide"
                transparent={true}
                isVisible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                backdropOpacity={0.5}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal> */}
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
        fontSize: 21,
        fontWeight : 'bold',
        alignSelf: 'center',
        paddingBottom: '2%',
        paddingTop: '6%',
       },
    separator: {
        height: .5,
        backgroundColor: '#CCCCCC',
    },
    comments : {
        flexDirection: 'row',
        paddingRight: 15,
        paddingVertical: 35,
        alignItems: 'flex-start',
        borderRadius: 20,
        backgroundColor: '#ddd',
        paddingTop: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 1.5,
        borderColor: 'black',
    },
    
    commentHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 5,
    },
    image: {
        height : 25,
        width : 25,
        borderRadius: 100,
    },
    username: {
        fontSize: 20,
        paddingLeft: 10,
        marginBottom: 5,
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
        bottom: 10,
        right: 15,
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
        width: '80%',
        alignSelf: 'center',
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#ddd',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
    },
    modalButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'column',
        width: '110%'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderWidth: 1.5,
        right: 2,
        
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
        color: 'black',
      },
      searchButton: {    
        height: 49,
        width: 49,
        bottom: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        borderRadius: 55,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderWidth: 1.5,
      },
})