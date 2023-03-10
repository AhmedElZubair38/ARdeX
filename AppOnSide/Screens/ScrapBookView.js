import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TopBar from '../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';

const ScrapBookView = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopBar/>
      <View style={styles.container}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
  },
});

export default ScrapBookView;
