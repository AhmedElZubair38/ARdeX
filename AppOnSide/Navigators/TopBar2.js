import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const TopBar2 = (props) => {

const navigation = useNavigation();

return (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 90, padding: 15, borderBottomWidth: 1, backgroundColor: '#FF4C68', paddingTop: 20}}>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={styles.icon2} name={Platform.OS === 'ios' ? 'chevron-back-outline' : 'chevron-back-outline'}/>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginBottom: -25, marginRight: -15 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Collections')}>
              <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'bookmark' : 'bookmark'}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SettingsHome',props)}>
              <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'settings' : 'settings'}/>
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
  icon2: {
    fontSize: 40,
    marginHorizontal: 7,
    marginTop: 20,
    color: '#FFFFFF'
  },
});

export default TopBar2;