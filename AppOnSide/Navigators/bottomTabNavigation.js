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
import AddPost from '../Screens/AddPostScreens/AddPost';

const Tab = createBottomTabNavigator();

function MyTabs() {

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
            tabBarStyle: {paddingBottom: 0, height: '8%', borderTopColor: 'black', paddingTop: -1}
            }}   
        >

            <Tab.Screen name="Home"
            component={HomeScreen}
            options={{ 
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => (
                    <Icon name={Platform.OS === 'ios' ? 'ios-home' : 'home'} color={color} size={size} />

                )}}/>
            
            
            <Tab.Screen name="Search" 
            component={Contact}
            options={{ 
                tabBarLabel: "Search",
                tabBarIcon: ({color, size}) => (
                    <Icon name={Platform.OS === 'ios' ? 'ios-search' : 'search'} color={color} size={size} />

                )}}/>

            
             <Tab.Screen name="AddPost"
            component={AddPost}
            options={{
                tabBarLabel: "Post", 
                tabBarIcon: ({color, size}) => (
                    <Icon name={Platform.OS === 'ios' ? 'ios-add-circle' : 'add-circle'} color={color} size={size} />

                )}}/>

            
            <Tab.Screen name="Map" 
            component={MapsScreen} 
            options={{ 
                tabBarLabel: "Map", 
                tabBarIcon: ({color, size}) => (
                    <Icon name={Platform.OS === 'ios' ? 'ios-map-sharp' : 'map-sharp'} color={color} size={size} />

                )}}/>


            <Tab.Screen name="UserProfile" 
            component={UserProfile} 
            options={{ 
                tabBarLabel: "Account", 
                tabBarIcon: ({color, size}) => (
                    <Icon name={Platform.OS === 'ios' ? 'person' : 'person'} color={color} size={size} />

                )}}/>


        </Tab.Navigator>
        

    );
};

export default function BottomTabNavigation() {
    return (

        <MyTabs/>
    );
};