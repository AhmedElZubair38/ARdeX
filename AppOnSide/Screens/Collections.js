import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, {useState}from 'react'
import TopBar from '../Navigators/TopBar'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Collections = () => {
  const navigation = useNavigation();

  const scrapbooks = [
    {
      id: 1,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Trips',
      scrapMaker: 'The Weeknd',
      date: '22/12/2020',
    },
    {
      id: 2,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Farm',
      scrapMaker: 'The Weeknd',
      date: '22/12/2020',
    },
    {
      id: 3,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Fantasy',
      scrapMaker: 'The Weeknd',
      date: '22/12/2020',
    },
    {
      id: 4,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Holidays',
      scrapMaker: 'The Weeknd',
      date: '22/12/2020',
    },
    {
      id: 5,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Farm',
      scrapMaker: 'The Weeknd',
      date: '22/12/2020',
    },
    {
      id: 6,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Fantasy',
      scrapMaker: 'The Weeknd',
      date: '22/12/2020',
    },
    {
      id: 7,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Holidays',
      scrapMaker: 'The Weeknd',
      date: '22/12/2020',
    },
    
  ]

  const [results, setResults] = useState(scrapbooks)

  return (
    <View style={styles.page}>
      
      <TopBar/>
      
      <Text style={styles.heading}>Collections</Text>
  
      <Text style={styles.heading2}>Here is where you can find all the scrapbooks you've saved!</Text>

      <View>
        <FlatList
        enableEmptySections={true}
        data={results}
        renderItem={({ item }) => {
            return(
              <View>
              <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('CollectionsView')}>
                  <View  style={styles.scrapbook}>
                    <View style={styles.content}>
                      <Text style={styles.scrapbookName}>{item.scrapName}</Text>
                      <Text style={styles.scrapbookMaker}>by {item.scrapMaker} on {item.date}</Text>
                    </View>
                  </View>
              </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>

      <View style={styles.backButton}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold'}}> <Icon style={{ color: 'black'}} size={21} name={Platform.OS === 'ios' ? 'ios-caret-forward-outline' : 'md-caret-back'}/> Go Back </Text>
        </TouchableOpacity>
      </View>
        

    </View>

  )
}

export default Collections

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  meow: {
    width: 220,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#FF4C68',
    alignSelf: 'center',
    top: '85%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  backButton: {
    width: 220,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#FF4C68',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingRight: '30%',
  },
  heading: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 30
  },
  heading2: {
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontSize: 16
  },
  box: {
    marginVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    
  },
  scrapbook: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 16,
    paddingVertical: 12,
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: '#ddd',
    paddingTop: 5,
  },
  image: { 
    height: 100,
    width : 100,
    borderRadius: 10
  },
  content: {
    
    marginLeft: 20,
    marginTop: 10,
  },
  scrapbookName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  scrapbookMaker: {
    fontSize: 14,
  },
  save: {
    fontSize: 14
  },
})