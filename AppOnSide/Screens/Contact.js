import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import TopBar from "../Navigators/TopBar"; // import the TopBar component

import queries from "./appConnection/search.js"

export default function Contact(props) {
  console.log("Contact")
  console.log(props.route.params)
  const navigation = useNavigation();
  const [userData, setUserData] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const getData = async () => {
    const data = await queries.getAllUsers();
    setUserData(data);
    setResults(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (text) => {
    setQuery(text);
    if (text.length > 0) {
      const filteredData = userData.filter((item) => {
        const { name, username } = item;
        const searchText = text.toLowerCase();
        return (
          name.toLowerCase().includes(searchText) ||
          username.toLowerCase().includes(searchText)
        );
      });
      setResults(filteredData);
    } else {
      setResults(userData);
    }
  };
  

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.search}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Search by Name or Username..."
            value={query}
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            onChangeText={handleChange}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name={Platform.OS === 'ios' ? 'search' : 'search'}></Icon>
          </TouchableOpacity>
        </View>
      </View>
      {results.length > 0 ? (
        <FlatList
          style={styles.notificationList}
          enableEmptySections={true}
          data={results}
          renderItem={({ item }) => {
            return (
              <View style={styles.notificationBox}>
                <TouchableOpacity
                  style={styles.userButton}
                  onPress={() => navigation.navigate('ViewProfile',{ clickedUserId: item.userId, userId: props.route.params.userId, mainUserId: props.route.params.mainUserId })}
                >
                  <Image style={styles.image} source={{ uri: item.profileImage }} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.description}>@{item.username}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      ) : (
        <Text style={styles.note}>No results found.</Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  note: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FF4C68',
    marginBottom: 5,
    fontWeight: 'bold',
    marginBottom: '60%',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 25,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderWidth: 1.5,
    
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    width: '93%',
    marginLeft: '-3%',

  },
  inputs: {    
    height: 40,
    margin: 23,
    width: '87%',
    color: 'black',
    
  },
  searchButton: {
    width: 45,
    height: 45,  
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderWidth: 1.5,

  },
  notificationList: {
    marginTop: 70,
    padding: 15,
    
  },
  notificationBox: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  userButton: {
    flexDirection: 'row',
  },
  image: {
    aspectRatio: 1,
    borderRadius: 100,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
    marginLeft: 15,
  },
  name: {
    fontSize: 14,
    color: '#888',
    marginLeft: '15%',
    marginTop: 5,
  },

  separator: {
    height: .5,
    backgroundColor: '#CCCCCC',
  },
});
