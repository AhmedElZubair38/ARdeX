import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import TopBar from "../../Navigators/TopBar"; // import the TopBar component

import queries from "../appConnection/profile.js"

// export default function ViewFollowers(props) {

//   //select username and profileImage from users where username is like '%query%'
// //   SELECT * 
// // FROM users t1 
// // JOIN follows t2 
// // ON t1.userId = t2.followerId 
// // WHERE t2.userId = 2
// console.log("ViewFollowers")
// // console.log(props)
// const userId = props.route.params.userId
// console.log("userid:" + userId)

// const [followerData, setFollowerData] = useState(null);
// const [results, setResults] = useState(followerData)
// const [query, setQuery] = useState("")

// const getData = async (userId) => {
//   const data = await queries.getFollowers(userId)
//   // console.log(data)
//   return data
// }

// useEffect(() => {
//   getData(userId).then((data) => {
//     setFollowerData(data);
    
//   });
//   setResults(followerData)
// }, [userId]);


// if (!followerData) {
//   return null; // or a loading indicator
// }

// // console.log("followerData")
// // console.log(followerData)
//   // const data = [
//   //   {
//   //     id: 1,
//   //     image: 'https://img.icons8.com/color/70/000000/cottage.png',
//   //     description: 'user 1',
//   //   },
//   //   {
//   //     id: 2,
//   //     image: 'https://img.icons8.com/color/70/000000/administrator-male.png',
//   //     description: 'user 2',
//   //   },
//   //   {
//   //     id: 3,
//   //     image: 'https://img.icons8.com/color/70/000000/filled-like.png',
//   //     description: 'user 3',
//   //   },
//   //   {
//   //     id: 4,
//   //     image: 'https://img.icons8.com/color/70/000000/facebook-like.png',
//   //     description: 'user 4',
//   //   },
//   //   {
//   //     id: 5,
//   //     image: 'https://img.icons8.com/color/70/000000/shutdown.png',
//   //     description: 'user 5',
//   //   },
//   //   {
//   //     id: 6,
//   //     image: 'https://img.icons8.com/color/70/000000/traffic-jam.png',
//   //     description: 'user 6',
//   //   },
//   //   {
//   //     id: 7,
//   //     image: 'https://img.icons8.com/dusk/70/000000/visual-game-boy.png',
//   //     description: 'user 7',
//   //   },
//   // ]



//   const showAlert = viewId => {
//     Alert.alert('Alert', 'Button pressed ' + viewId)
//   }

//   const navigate = useNavigation();

//   const handleChange = (text) => {
//     setQuery(text)
//     // console.log("query")
//     // console.log(text)
//     // console.log(typeof(text))
//     // if (text==""){
//     //   setResults(followerData)
//     // } else {
//     //   const objs = results.filter(item => item.username === text);
//     //   setResults(objs)
//     // }

//   }

  
//   return (
//     <View style={styles.container}>
//       <TopBar />
//       <View style={styles.search}>
//         <View style={styles.inputContainer}>
//           <TextInput
//               style={styles.inputs}
//               placeholder="Search Followers by username..."
//               underlineColorAndroid="transparent"
//               // onChangeText={name_address => setQuery({ name_address })}
//               onChangeText={handleChange}
//           />
//           <TouchableOpacity style={styles.searchButton}>
//             <Icon name={Platform.OS === 'ios' ? 'search' : 'search'}></Icon>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <FlatList
//         style={styles.notificationList}
//         enableEmptySections={true}
//         data={results}
//         renderItem={({ item }) => {
//           return (
//             <View style={styles.notificationBox}>
//               <TouchableOpacity style={styles.userButton} onPress={() => navigate.navigate('ViewProfile')}>
//                 <Image style={styles.image} source={{ uri: item.profileImage }} />
//                 <Text style={styles.description}>{item.username}</Text>
//               </TouchableOpacity>
//             </View>
//           )
//         }}
//       />
//     </View>
//   );
// }

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
      <TopBar />
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
                    <Text style={styles.description}>{item.username}</Text>
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
