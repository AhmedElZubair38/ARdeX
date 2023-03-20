import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import TopBar2 from "../../Navigators/TopBar2"; // import the TopBar component

import queries from "../appConnection/profile.js"

export default function ViewFollowers(props) {

  console.log("ViewFollowers")
  const userId = props.route.params.userId
  console.log("userid:" + userId)

  const [followerData, setFollowerData] = useState(null);
  const [results, setResults] = useState(null)
  const [query, setQuery] = useState("")

  const getData = async (userId) => {
    const data = await queries.getFollowers(userId)
    console.log("getData", data)
    return data
  }

  useEffect(() => {
    getData(userId).then((data) => {
      setFollowerData(data);
      setResults(data)
    });
  }, [userId]);

  if (!followerData) {
    return null;
  }

  const searchFilterFunction = (text) => {
    setQuery(text)
    const newData = followerData.filter(item => {
      const itemData = `${item.username.toUpperCase()} ${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setResults(newData)
  }

  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <TopBar2/>
      <View style={styles.search}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Search Followers by name or username..."
            onChangeText={(text) => searchFilterFunction(text)}
            value={query}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name={Platform.OS === 'ios' ? 'search' : 'search'}></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.notificationList}
        data={results}
        renderItem={({ item }) => {
          return (
            <View style={styles.notificationBox}>
              <TouchableOpacity style={styles.userButton} onPress={() => navigate.navigate('ViewProfile',{ clickedUserId: item.userId, userId: userId, mainUserId: props.route.params.mainUserId })}>
                <Image style={styles.image} source={{ uri: item.profileImage }} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.description}>@{item.username}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
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
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    width: '87%',

  },
  inputs: {    
    height: 45,
    margin: 25,
    borderBottomColor: '#FFFFFF',
    width: '87%',

  },
  searchButton: {    
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: '13%',
    alignSelf: 'flex-end',
    backgroundColor: '#FF4C68',
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2, 
  },
  notificationList: {
    marginTop: 60,
    padding: 15,
  },
  notificationBox: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  userButton: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1
  },
  name: {
    fontSize: 14,
    color: '#888',
    marginLeft: 10,
    marginTop: 5,
    alignSelf: 'center',
  },
  description: {
    fontSize: 18,
    color: '#3498db',
    marginLeft: 10,
    alignSelf: 'center',
  },
});
