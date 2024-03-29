import * as React from 'react';
import {View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import TopBar from './TopBar';
import HomeScreen from 'AppOnSide/Screens/HomeScreens/HomeScreen';
import MapsScreen from 'AppOnSide/Screens/MapsScreen';
import Contact from 'AppOnSide/Screens/Contact';
import UserProfile from 'AppOnSide/Screens/ProfileScreens/UserProfile';
import CreateNewScrapbook from '../Screens/AddPostScreens/CreateNewScrapbook';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation({route}) {

    return (
        
        <Tab.Navigator 
        
        initalRouteName='Home'
        
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false, 
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#FFFFFF',
            tabBarActiveBackgroundColor: '#FF4C68',
            tabBarInactiveBackgroundColor: '#FF4C68',
            keyboardHidesTabBar: true,
            tabBarStyle: {paddingBottom: 0, height: '8%', borderTopColor: 'black', borderTopWidth: 1},
            }}
            
        >

            <Tab.Screen name="Home"
            component={HomeScreen}
            options={{ 
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => (
                    <Icon name={Platform.OS === 'ios' ? 'ios-home' : 'home'} color={color} size={size} />
                )}}
                    initialParams={{userId: route.params.userId, mainUserId: route.params.mainUserId}}
                />            

            {console.log(route)}

            <Tab.Screen name="Search" 
            component={Contact}
            options={{ 
                tabBarLabel: "Search",
                tabBarIcon: ({color, size}) => (
                    <Icon name={Platform.OS === 'ios' ? 'ios-search' : 'search'} color={color} size={size} />

                )}}
                initialParams={{userId: route.params.userId, mainUserId: route.params.mainUserId}}

                />

            
             <Tab.Screen name="CreateNewScrapbook"
            component={CreateNewScrapbook}
            options={{
                tabBarLabel: "CreateNewScrapbook", 
                tabBarIcon: ({color, size}) => (
                    <Icon name={Platform.OS === 'ios' ? 'ios-add-circle' : 'add-circle'} color={color} size={size} />

                )}}
                initialParams={{userId: route.params.userId, mainUserId: route.params.mainUserId}}

                />

            
            <Tab.Screen name="Map" 
            component={MapsScreen} 
            options={{ 
                tabBarLabel: "Map", 
                tabBarIcon: ({color, size}) => (
                    <Icon name={Platform.OS === 'ios' ? 'ios-map-sharp' : 'map-sharp'} color={color} size={size} />

                )}}
                initialParams={{userId: route.params.userId, mainUserId: route.params.mainUserId}}

                />


            <Tab.Screen name="UserProfile" 
            component={UserProfile} 
            options={{ 
                tabBarLabel: "Account", 
                tabBarIcon: ({color, size}) => (
                    <Icon name={Platform.OS === 'ios' ? 'person' : 'person'} color={color} size={size} />

                )}}
                initialParams={{userId: route.params.userId, mainUserId: route.params.mainUserId}}

                />


        </Tab.Navigator>
        

    );

};