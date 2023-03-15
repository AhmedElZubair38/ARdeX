import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList, StatusBar, Dimensions } from 'react-native';
import TopBar from '../Navigators/TopBar';
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ScrapBookView = () => {

    const navigation = useNavigation();
    const ScrapBookData = {
        scrapName: 'Scrapbook Title',
        userId: 12,
        user_name: 'The Weeknd',
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

    const [imageActive, setimageActive] = useState(0);
    onchange = (nativeEvent) => {
      if(nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide != imageActive){
          setimageActive(slide);
        }
      }
    }
    
    return (
      <View style={{flex : 1}}>
        <TopBar/>
        <View style={styles.page}>
          <ScrollView
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {
              ScrapBookData.images.map((e, index)=>
                <Image
                  key={e}
                  resizeMode='stretch'
                  style={styles.wrap}
                  source={{uri: e}}
                />
              ) 
            }

          </ScrollView>

          <View style={styles.wrapDot}>
            {
              ScrapBookData.images.map((e, index) =>
                <Text
                  key={e}
                  style={imageActive == index ? styles.dotActive : styles.dot}>
                    ●
                </Text>
              )
            }
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.4
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'

  },
  dotActive: {
    margin: 3,
    color: 'black'
  },
  dot: {
    margin: 3,
    color: 'white'
  }
});

export default ScrapBookView;
