import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const TopBar = () => {

const navigation = useNavigation();

return (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 70, padding: 15, backgroundColor: '#FF4C68', paddingTop: 20}}>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('AppOnSide/Photos/transparent-logo.png')} style={{ width: 105, height: 35, marginBottom: -25}}/>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginBottom: -25, marginRight: -15 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-home' : 'bookmark'}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-home' : 'people'}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SettingsHome')}>
              <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-home' : 'settings'}/>
              </TouchableOpacity>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    marginHorizontal: 7,
    color: '#FFFFFF'
  },
});

export default TopBar;