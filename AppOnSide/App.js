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
import PreviewScrapbookPosts from './Screens/AddPostScreens/PreviewScrapbookPosts';
import ViewProfile from './Screens/ProfileScreens/ViewProfile';
import Comments from './Screens/HomeScreens/Comments';
import ViewFollowers from './Screens/ProfileScreens/ViewFollowers';
import ViewFollowing from './Screens/ProfileScreens/ViewFollowing';
import Collections from './Screens/Collections';
import ScrapBookView from './Screens/ScrapBookView';
import Groups from './Screens/Groups';
import ProfileNavigator from './Navigators/ProfileNavigator';
import ScrapbooksList from './Screens/ProfileScreens/ScrapbooksList';
import ReportUserHomeScreen from './Screens/HomeScreens/ReportUserHomeScreen';
import ReportScrapBookHomeScreen from './Screens/HomeScreens/ReportScrapBookHomeScreen';
import CollectionsView from './Screens/CollectionsView';
import SettingsDeleteAccount from './Settings/SettingsDeleteAccount';
import ReportCommentHomeScreen from './Screens/HomeScreens/ReportCommentHomeScreen';
import Likes from './Screens/HomeScreens/Likes';
import PreviewEditProfile from './Screens/ProfileScreens/PreviewEditProfile';
import TopBar2 from './Navigators/TopBar2';


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createNativeStackNavigator();

export default function App(props) {
  console.log(props);
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
          name="ProfileNavigator"
          component={ProfileNavigator}
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
          name="SettingsDeleteAccount"
          component={SettingsDeleteAccount}
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
          name="PreviewScrapbookPosts"
          component={PreviewScrapbookPosts}
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
        <Stack.Screen 
          name="ScrapBookView"
          component={ScrapBookView}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ScrapbooksList"
          component={ScrapbooksList}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ReportUserHomeScreen"
          component={ReportUserHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ReportScrapBookHomeScreen"
          component={ReportScrapBookHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CollectionsView"
          component={CollectionsView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReportCommentHomeScreen"
          component={ReportCommentHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Likes"
          component={Likes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PreviewEditProfile"
          component={PreviewEditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopBar2"
          component={TopBar2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}