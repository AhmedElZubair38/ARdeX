import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
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
    latitude: 25.12365,
    longitude: 55.17615,
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
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10}}>

        <View style={[styles.meow2, {marginLeft: 10}]}>
            {latitude && <Text style={{ color: 'black', fontSize: 11, fontFamily: 'fax'}}> My Latitude: {latitude} </Text>}
        </View>

        <View style={[styles.meow2, {marginLeft: 10, marginRight: 10}]}>
            {longitude && <Text style={{ color: 'black', fontSize: 11, fontFamily: 'fax'}}> My Longitude: {latitude} </Text>}
        </View>
          
    </View>
    <MapView
      style={{ flex: 1 }}
      region={region}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      <Marker coordinate={Scrap1} onPress={()=> navigation.navigate('ScrapBookView')}/>
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

export default MyMap;
