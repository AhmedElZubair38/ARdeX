import * as React from 'react';
import {View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import TopBar from './TopBar';
import HomeScreen from 'AppOnSide/Screens/HomeScreen';
import MapsScreen from 'AppOnSide/Screens/MapsScreen';


function Home() {
    return (
        <View style={{flex: 1}}>
            <TopBar />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#03CAFC'}}>
                <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '800'}}>Home Screen</Text>
            </View>
        </View>
    );
};

function Search({ navigation }) {
    return (
        <View style={{flex: 1}}>
            <TopBar />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C21483'}}>
                <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '800', marginBottom: 10}}>Search Screen</Text>
                <Button title="Go Back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

function AddPost({ navigation }) {
    return (
        <View style={{flex: 1}}>
            <TopBar />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F08709'}}>
                <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '800', marginBottom: 10}}>Post Screen</Text>
                <Button title="Go Back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

function Map() {
    return (
        <View style={{flex: 1}}>
            <TopBar />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#CD1700'}}>
                <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '800', marginBottom: 10}}>Map Screen</Text>
                <Button title="Go Back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

function UserProfile({ navigation }) {
    return (
        <View style={{flex: 1}}>
            <TopBar />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C203FC'}}>
                <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '800', marginBottom: 10}}>User Screen</Text>
                <Button style={{ marginVertical: 20 }} title="Go Back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

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
            tabBarStyle: {borderTopWidth: 0, paddingBottom: 0, height: '8%'}
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
            component={Search}
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
                    <Icon name={Platform.OS === 'ios' ? 'ios-contacts' : 'person'} color={color} size={size} />

                )}}/>


        </Tab.Navigator>
        

    );
};

export default function BottomTabNavigation() {
    return (

        <MyTabs/>
    );
};