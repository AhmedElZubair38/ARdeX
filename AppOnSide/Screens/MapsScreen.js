import React, { useState, useEffect} from 'react';
import { View } from "react-native";
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import TopBar from "../Navigators/TopBar";


const MyMap = () => {
  const [region, setRegion] = useState({
    latitude: 25.10156,
    longitude: 55.16204,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
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
    <Marker coordinate={region} />
    </MapView>
    </View>
  );
};

export default MyMap;
