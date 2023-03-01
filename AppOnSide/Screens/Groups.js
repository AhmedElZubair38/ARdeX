import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../Navigators/TopBar'

const Groups = () => {
  return (
    <View style={styles.page}>
        <TopBar/>
        <Text>Groups</Text>
    </View>
  )
}

export default Groups

const styles = StyleSheet.create({
    page: {
        flex : 1,
    }
})