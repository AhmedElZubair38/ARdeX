import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';

const MapWithMarker = () => {
  const [coordinate, setCoordinate] = useState({
    latitude:  25.2048,
    longitude: 55.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'This app needs access to your location.',
      }
    ).then(granted => {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {
            setCoordinate({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          },
          (error) => console.log(error),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      } else {
        console.log('Location permission was not granted.');
      }
    });
  }, []);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={coordinate}
    >
      <Marker
        coordinate={coordinate}
        title="Marker Title"
        description="Marker Description"
        
      />
    </MapView>
  );
};

export default MapWithMarker;



