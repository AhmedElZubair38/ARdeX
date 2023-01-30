// import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
// import MapView, {Marker} from 'react-native-maps';
// import React, {useState, useEffect} from 'react'
// import TopBar from "../Navigators/TopBar";
// import { useNavigation } from '@react-navigation/native';

// function Maps() {

//     const navigation = useNavigation();

//     return (
//         <View style={styles.container}>
//             <TopBar />
//             <View style={styles.content}>
//             <MapView style={styles.map}
//                     initialRegion={{
//                         latitude: 37.78825,
//                         longitude: -122.4324,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }}
//                     showsUserLocation
//                 />
//             </View>
//         </View>
//       );
// }

// const MapWithMarker = () => {
//     const [coordinate, setCoordinate] = useState({
//       latitude: 25.095207,
//       longitude: 55.157879,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     });

//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setCoordinate({
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421,
//             });
//           },
//           (error) => console.log(error),
//           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//         );
//       }, []);
  
//     return (
//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={coordinate}
//       >
//         <Marker
//           coordinate={coordinate}
//           title="Your Pin "
//           description="Marker Description"
//         />
//       </MapView>
//     );
//   };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     content : {
//         flex: 1,
//     },

//     text : { 
//         fontsSize: 100,
//         color: 'white',
//         fontWeight: "normal"
//     },
//     map: {
//         width: '100%',
//         height: '100%',
//     }
// });

// export default MapWithMarker;


import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';

const MapWithMarker = () => {
  const [coordinate, setCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
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



