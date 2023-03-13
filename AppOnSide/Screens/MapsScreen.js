import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import TopBar from "../Navigators/TopBar";
import { useNavigation } from '@react-navigation/native';


const MyMap = () => {

  const navigation = useNavigation();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [region, setRegion] = useState({
    latitude: 25.10156,
    longitude: 55.16204,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [Scrap1, setScrap1] = useState({
    coordinates:{
    latitude: 25.12365,
    longitude: 55.17615},
    image: 'https://cdn.dribbble.com/users/112330/screenshots/16392696/media/2e10c7e8323ee72576c6dbfcb72e12fe.png?compress=1&resize=400x300',
  });

  useEffect(() => {
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
  }, []);

  return (
    <View style={{flex: 1}}>
    <TopBar />
    
    <MapView
      style={{ flex: 1 }}
      region={region}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >

      <View>
      <Marker coordinate={Scrap1.coordinates} onPress={()=> navigation.navigate('ScrapBookView')}>
        <Image source={{uri: Scrap1.image}} style={{width: 50, height: 50, borderRadius: 25}} />
      </Marker>
      </View>

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

export default MyMap;
