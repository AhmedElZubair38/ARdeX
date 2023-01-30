import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import React from 'react'
import TopBar from "../Navigators/TopBar";
import { useNavigation } from '@react-navigation/native';

export default function Maps() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.content}>
            <MapView style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation
                />
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content : {
        flex: 1,
    },

    text : { 
        fontsSize: 100,
        color: 'white',
        fontWeight: "normal"
    },
    map: {
        width: '100%',
        height: '100%',
    }
});