import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../Navigators/TopBar'

const AddPost = () => {
  return (
    <View style={styles.container}>
        <TopBar/>
        <View style={styles.content}>
            <Text>AddPost</Text>
        </View>
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    content: {
        flex: 1,
    },
})