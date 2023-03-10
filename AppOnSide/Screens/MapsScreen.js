import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import TopBar from "../Navigators/TopBar";


const MyMap = () => {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [region, setRegion] = useState({
    latitude: 25.10156,
    longitude: 55.16204,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
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
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10, paddingLeft: 10}}>

        <View style={styles.meow2}>
            {latitude && <Text style={{ color: 'black', fontSize: 12, fontFamily: 'fax'}}> My Latitude: {latitude} </Text>}
        </View>

        <View style={styles.meow2}>
            {longitude && <Text style={{ color: 'black', fontSize: 12, fontFamily: 'fax'}}> My Longitude: {latitude} </Text>}
        </View>
          
        </View>
    <MapView
      style={{ flex: 1 }}
      region={region}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
    <Marker coordinate={region} />
    </MapView>
    </View>
  );
};

const styles = StyleSheet.create({

  meow2: {
    width: 135,
    height: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#FF4C68',
    alignSelf: 'center',
    absolute: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

});

export default MyMap;
