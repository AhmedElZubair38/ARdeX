import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import TopBar from "../Navigators/TopBar"; // import the TopBar component

import queries from "./appConnection/search.js"

// export default function Contact({ navigation }) {

//   const [userData, setUserData] = useState(null);
//   const [query, setQuery] = useState("")
//   const [results, setResults] = useState([]);
//   const getData = async () => {
//     const data = await queries.getAllUsers()
//     return data
//   }

//   useEffect(() => {
//     if(!userData){
//     getData().then((data) => {
//       setUserData(data);   
//     });}
//     setResults(userData)

//   });

//   // console.log("userData")
//   // console.log(results.length)

//   if (!userData) {
//     return null; // or a loading indicator
//   }
   
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

//   // const [results, setResults] = useState(data)


//   const showAlert = viewId => {
//     Alert.alert('Alert', 'Button pressed ' + viewId)
//   }

//   // const handleChange = (text) => {
//   //   setQuery(text)
//   //   console.log(text)
//   //   if (text.length > 0) {
//   //     const filteredData = userData.filter((item) => {
//   //       return item.username.toLowerCase().includes(text.toLowerCase())
//   //     })
//   //     setResults(filteredData)
//   //   } else {
//   //     setResults(userData)
//   //   }
//   // }

//   const handleChange = (text) => {
//     setQuery(text);
//     if (text.length > 0) {
//       const filteredData = userData.filter((item) => {
//         return item.username.toLowerCase().includes(text.toLowerCase());
//       });
//       setResults(filteredData);
//     } else {
//       setResults(userData);
//     }
//   };
  

//   const navigate = useNavigation();

  
//   return (
//     <View style={styles.container}>
//       <TopBar />
//       <View style={styles.search}>
//         <View style={styles.inputContainer}>
//           <TextInput
//               style={styles.inputs}
//               placeholder="Search..."
//               value={query}
//               placeholderTextColor="grey" 
//               underlineColorAndroid="transparent"
//               onChangeText={handleChange}
//               ItemSeparatorComponent={() => {
//                 return <View style={styles.separator} />
//               }}
//           />
//           <TouchableOpacity
//               style={styles.searchButton}
//               onPress={() => handleChange(query)}
//             >
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
//               <TouchableOpacity style={styles.userButton} onPress={() => navigation.navigate('ViewProfile')}>
//                 <Image style={styles.image} source={{ uri: item.profileImage }} />
//                 <View style={{ flexDirection: 'column' }}>
//                   <Text style={styles.description}>{item.username}</Text>
//                   <Text style={styles.name}>{item.name}</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
            
//           )
//         }}
//       />
//     </View>
//   );
// }

export default function Contact({ navigation }) {
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
                  onPress={() => navigation.navigate('ViewProfile')}
                >
                  <Image style={styles.image} source={{ uri: item.profileImage }} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.description}>{item.username}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      ) : (
        <Text>No results found.</Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    shadowColor: 'grey',
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
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
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
    color: '#3498db',
    marginLeft: 10,
    alignSelf: 'center',
  },
  name: {
    fontSize: 14,
    color: '#888',
    marginLeft: 10,
    marginTop: 5,
    alignSelf: 'center',
  },

  separator: {
    height: .5,
    backgroundColor: '#CCCCCC',
  },
});
