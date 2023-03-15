import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import TopBar from '../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';

const ScrapBookView = () => {

    const navigation = useNavigation();
    const ScrapBookData = {
        scrapName: 'Scrapbook Title',
        userId: 'The Weeknd',
        scrapId: 1,
        scrapDate: '2020-12-12',
        scrapBody: 'This is the body of the scrapbook',
        images: [
            'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',
            'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
            'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
            'https://i.pinimg.com/736x/b4/60/aa/b460aad5dfd1e8a170c2af35a4827bf1.jpg',
            'https://lastfm.freetls.fastly.net/i/u/770x0/8cb4b221fbc680eedc9722830091c0a5.jpg',

        ],
        likes: 2,
        comments: 2,
    }

  return (
    <View style={styles.container}>
      <TopBar/>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{ScrapBookData.scrapName}</Text>
        <Text style={styles.author}>{ScrapBookData.userId}</Text>
        <Text style={styles.body}>{ScrapBookData.scrapBody}</Text>
        <Text style={styles.body}>{ScrapBookData.scrapDate}</Text>
        <Text style={styles.body}>Likes: {ScrapBookData.likes}</Text>
        <Text style={styles.body}>Comments: {ScrapBookData.comments}</Text>
        <View style={styles.images}>
          <FlatList
            data={ScrapBookData.images}
            renderItem={({item}) => (
              <Image
                style={styles.image}
                source={{uri: item}}
              />
            )}
            keyExtractor={item => item}
            numColumns={2}
          />
        </View>
      </ScrollView>
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
  image: {
    width: '49%',
    margin: '.5%',
    aspectRatio: 16/9,
    borderRadius: 10,
  },
  images: {
    flexDirection: 'row',

  }
});

export default ScrapBookView;
