import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from 'react-native-splash-screen'
import { TransitionPresets } from '@react-navigation/stack';
import BottomTabNavigation from './Navigators/bottomTabNavigation';
import HomeScreen from './Screens/HomeScreen';
import Register from './Screens/Register';
import LoginUpdated from './Screens/LoginUpdated';
import VerifyEmail from './Screens/VerifyEmail';
import SettingsHome from './Settings/SettingsHome';
import SettingsGeneral from './Settings/SettingsGeneral';
import SettingsLoginAndSecurity from './Settings/SettingsLoginAndSecurity';
import SettingsHelp from './Settings/SetttingsHelp';
import FAQs from './Settings/SettingsFAQs';
import SettingsAbout from './Settings/SettingsAbout';
import SettingsChangeUsername from './Settings/SettingsChangeUsername';
import SettingsChangePassword from './Settings/SettingsChangePassword';
import MapsScreen from './Screens/MapsScreen';
import SettingsChangePhoneNumber from './Settings/SettingsChangePhoneNumber';
import SettingsChangeAccountType from './Settings/SettingsChangeAccountType';
import SettingsBlockedUsers from './Settings/SettingsBlockedUsers';
import SettingsPrivacyPolicy from './Settings/SettingsPrivacyPolicy';
import EditProfile from './Screens/EditProfile';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginUpdated'
       screenOptions={({ route }) => ({
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled: true
      })}>
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="BottomTabNavigator"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="LoginUpdated"
          component={LoginUpdated}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="VerifyEmail"
          component={VerifyEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsHome"
          component={SettingsHome}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsLoginAndSecurity"
          component={SettingsLoginAndSecurity}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsGeneral"
          component={SettingsGeneral}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsHelp"
          component={SettingsHelp}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsBlockedUsers"
          component={SettingsBlockedUsers}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsChangeUsername"
          component={SettingsChangeUsername}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsChangePassword"
          component={SettingsChangePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsChangePhoneNumber"
          component={SettingsChangePhoneNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsChangeAccountType"
          component={SettingsChangeAccountType}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="FAQs"
          component={FAQs}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsAbout"
          component={SettingsAbout}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="MapsScreen"
          component={MapsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SettingsPrivacyPolicy"
          component={SettingsPrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}