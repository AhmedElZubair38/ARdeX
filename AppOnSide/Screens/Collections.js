import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import TopBar from '../Navigators/TopBar'

const Collections = () => {

  const scrapbooks = [
    {
      id: 1,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Trips',
      saveDetails: 'Saved from @naveen_senpai89',
    },
    {
      id: 2,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Farm',
      saveDetails: 'Saved from @naveen_senpai29',
    },
    {
      id: 3,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Fantasy',
      saveDetails: 'Saved from @naveen_senpai73',
    },
    {
      id: 4,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'Family Holidays',
      saveDetails: 'Saved from @naveen_senpai45',
    },
  ]

  return (
    <View style={styles.page}>
      <TopBar/>
      <View>
          <Text style={styles.heading}>Collections</Text>
          <Text style={styles.heading2}>Here is where you will find all your scrapbooks you like!</Text>
      </View>
      <FlatList
                style = {styles.comment}
                data = {scrapbooks}
                extraData = {this.state}
                keyExtractor={item => { return item.id }}
                renderItem={item => {
                    const Notification = item.item
                    return(
                      <View style={styles.box}>
                        <TouchableOpacity>
                            <View  style={styles.scrapbook}>
                              <View>
                                <Image style={styles.image} source={{ uri: Notification.scrapCover }} />
                              </View>
                              <View style={styles.content}>
                                <Text style={styles.scrapbookName}>{Notification.scrapName}</Text>
                                <Text style={styles.save} rkType="primary3 mediumLine">{Notification.saveDetails}</Text>
                              </View>
                            </View>
                        </TouchableOpacity>
                      </View>
                    )
                }}
            />
    </View>
  )
}

export default Collections

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 15,
    fontSize: 25
  },
  heading2: {
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'justify',
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontSize: 16
  },
  box: {
    margin: 10
  },
  scrapbook: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 16,
    paddingVertical: 12,
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: '#ddd'
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
  save: {
    alignSelf: 'center',
    textAlign: 'justify',
    fontSize: 14
  },
})