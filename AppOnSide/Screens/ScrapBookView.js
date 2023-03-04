import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TopBar from '../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';

const ScrapBookView = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <TopBar/>
      <Text style={styles.title}>posty post</Text>
      <Text style={styles.author}>By user 1</Text>
      <Text style={styles.body}>im the body body</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
