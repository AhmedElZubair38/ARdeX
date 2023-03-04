import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import TopBar from "../Navigators/TopBar"; // import the TopBar component

export default function Contact({ navigation }) {

  const data = [
    {
      id: 1,
      image: 'https://img.icons8.com/color/70/000000/cottage.png',
      description: 'user 1',
    },
    {
      id: 2,
      image: 'https://img.icons8.com/color/70/000000/administrator-male.png',
      description: 'user 2',
    },
    {
      id: 3,
      image: 'https://img.icons8.com/color/70/000000/filled-like.png',
      description: 'user 3',
    },
    {
      id: 4,
      image: 'https://img.icons8.com/color/70/000000/facebook-like.png',
      description: 'user 4',
    },
    {
      id: 5,
      image: 'https://img.icons8.com/color/70/000000/shutdown.png',
      description: 'user 5',
    },
    {
      id: 6,
      image: 'https://img.icons8.com/color/70/000000/traffic-jam.png',
      description: 'user 6',
    },
    {
      id: 7,
      image: 'https://img.icons8.com/dusk/70/000000/visual-game-boy.png',
      description: 'user 7',
    },
  ]

  const [results, setResults] = useState(data)
  const [query, setQuery] = useState()

  const showAlert = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId)
  }

  const navigate = useNavigation();

  
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.search}>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.inputs}
              placeholder="Search..."
              placeholderTextColor="grey" 
              underlineColorAndroid="transparent"
              onChangeText={name_address => setQuery({ name_address })}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name={Platform.OS === 'ios' ? 'search' : 'search'}></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.notificationList}
        enableEmptySections={true}
        data={results}
        renderItem={({ item }) => {
          return (
            <View style={styles.notificationBox}>
              <TouchableOpacity style={styles.userButton} onPress={() => navigation.navigate('ViewProfile')}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.description}>{item.description}</Text>
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
  description: {
    fontSize: 18,
    color: '#3498db',
    marginLeft: 10,
    alignSelf: 'center',
  },
});
