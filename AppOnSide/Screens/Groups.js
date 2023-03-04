import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import TopBar from '../Navigators/TopBar'


const Groups = () => {

  const scrapbooks = [
    {
      id: 1,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'A',
      scrapCaption: 'A',
    },
    {
      id: 2,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'B',
      scrapCaption: 'A',
    },
    {
      id: 3,
      scrapCover: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      scrapName: 'C',
      scrapCaption: 'A',
    },
  ]

  return (
    <View style={styles.page}>
      <TopBar/>
      <View>
          <Text style={styles.heading}>Groups</Text>
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
                                <Text rkType="primary3 mediumLine">{Notification.scrapCaption}</Text>
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

export default Groups

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 20
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
  }
})