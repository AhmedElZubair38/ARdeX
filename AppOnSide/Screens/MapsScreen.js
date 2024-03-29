import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import TopBar from "../Navigators/TopBar";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import queries from "./appConnection/home.js";

const MapScreen = (props) => {

  console.log(props)
  const navigation = useNavigation();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [region, setRegion] = useState({
    latitude: 25.10156,
    longitude: 55.16204,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [scraps, setScraps] = useState(null)

  // const [scraps, setScraps] = useState([
  //   {
  //     scrapId: 1,
  //     latitude: 25.12365,
  //     longitude: 55.17615,
  //     profileImage: 'https://cdn.dribbble.com/users/112330/screenshots/16392696/media/2e10c7e8323ee72576c6dbfcb72e12fe.png?compress=1&resize=400x300',
  //   },
  //   {
  //     scrapId: 2,
  //     latitude: 25.093685,
  //     longitude: 55.158375,
  //     profileImage: 'https://www.heurekalabs.org/content/images/2022/03/originalApe6808-1.png',
  //   },
  //   {
  //     scrapId: 3,
  //     latitude: 25.099146,
  //     longitude: 55.153768,
  //     profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNaOz7_G0usE1cd1-hs9VCH9n1lBuUKBE2w&usqp=CAU',
  //   }
  // ]);


  const getData = async () => {
    const response = await queries.getMapFeed();
    // console.log(response);
    return response;
}
const isFocused = useIsFocused();

useEffect(() => {
    if (isFocused) {
    getData().then((DATA) => {
      setScraps(DATA);
    });
  }
  Geolocation.getCurrentPosition(
    (position) => {

      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      setRegion({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
  }, [isFocused]);

  if (!scraps) {
    return <ActivityIndicator color='#FF4C68' size={120} style={styles.indicator} />;
  }

  this.state = { 
    isFetching: false,
}

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {

  //       setLatitude(position.coords.latitude);
  //       setLongitude(position.coords.longitude);

  //       setRegion({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421,
  //       });
  //     },
  //     (error) => console.log(error.message),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  //   );
  // }, []);

  return (
    <View style={{flex: 1}}>
      <TopBar 
        mainUserId={props.route.params.mainUserId}
      />
    
      <MapView
        style={{ flex: 1 }}
        region={region}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {scraps.map((scrap) => (
          <View key={scrap.scrapId}>
          <Marker key={scrap.scrapId} coordinate={{latitude: scrap.latitude, longitude: scrap.longitude}} onPress={()=> navigation.navigate('ScrapBookView',{...scrap, mainUserId:props.route.params.mainUserId })}>
            <Image source={{uri: scrap.profileImage}} style={{width: 50, height: 50, borderRadius: 25}} />
          </Marker>
          </View>
        ))}

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10}}>
          <View style={[styles.meow2, {marginLeft: 10}]}>
              {latitude && <Text style={{ color: 'black', fontSize: 11}}> My Latitude: {latitude} </Text>}
          </View>
          <View style={[styles.meow2, {marginLeft: 10, marginRight: 10}]}>
              {longitude && <Text style={{ color: 'black', fontSize: 11}}> My Longitude: {longitude} </Text>}
          </View>
        </View>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({

  meow2: {
    width: 180,
    height: 45,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#ddd',
    alignSelf: 'center',
    absolute: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

});

export default MapScreen;