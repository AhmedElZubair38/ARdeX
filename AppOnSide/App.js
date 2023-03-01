import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from 'react-native-splash-screen'
import { TransitionPresets } from '@react-navigation/stack';
import BottomTabNavigation from './Navigators/bottomTabNavigation';
import HomeScreen from './Screens/HomeScreens/HomeScreen';
import Register from './Screens/RegisterSignUpScreens/Register';
import LoginUpdated from './Screens/RegisterSignUpScreens/LoginUpdated';
import VerifyEmail from './Screens/RegisterSignUpScreens/VerifyEmail';
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
import EditProfile from './Screens/ProfileScreens/EditProfile';
import CreateNewScrapbook from './Screens/AddPostScreens/CreateNewScrapbook';
import CreateNewScrapbook2 from './Screens/AddPostScreens/CreateNewScrapbook2';
import ViewProfile from './Screens/ProfileScreens/ViewProfile';
import Comments from './Screens/HomeScreens/Comments';
import ViewFollowers from './Screens/ProfileScreens/ViewFollowers';
import ViewFollowing from './Screens/ProfileScreens/ViewFollowing';
import Collections from './Screens/Collections';
import Groups from './Screens/Groups'

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
        <Stack.Screen 
          name="CreateNewScrapbook"
          component={CreateNewScrapbook}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="CreateNewScrapbook2"
          component={CreateNewScrapbook2}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ViewProfile"
          component={ViewProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Comments"
          component={Comments}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ViewFollowers"
          component={ViewFollowers}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ViewFollowing"
          component={ViewFollowing}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Collections"
          component={Collections}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Groups"
          component={Groups}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}