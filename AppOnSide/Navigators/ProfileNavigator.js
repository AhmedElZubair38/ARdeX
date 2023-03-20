import * as React from 'react';
import {View, Button, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import ScrapbooksList from '../Screens/ProfileScreens/ScrapbooksList';

const Tab = createMaterialTopTabNavigator();

// function MyTabs(props) {
//     console.log("MyTabs")
//     console.log(props)
//     return (
        
//         <Tab.Navigator 
        
//         initalRouteName='ScrapbooksList' 
        
//         screenOptions={{
//             headerShown: false, 
//             tabBarShowLabel: true, 
//             tabBarActiveTintColor: '#FF4C68',
//             tabBarInactiveTintColor: '#000000',
//             tabBarActiveBackgroundColor: '#FFFFFF',
//             tabBarInactiveBackgroundColor: '#FFFFFF',
//             tabBarIndicatorStyle: {backgroundColor: '#FF4C68'},
//             tabBarStyle: {height: 50}
//             }}   
//         >

//             <Tab.Screen name="ScrapbooksList"
//             component={ScrapbooksList}
//             options={{ 
//                 tabBarLabel: "Scrapbooks",
//                 userId: props.userId, // Pass userId prop to ScrapbooksList
//                 mainUserId: props.mainUserId // Pass mainUserId prop to ScrapbooksList
//                }}
               
//                initialParams={{userId: props.userId, mainUserId: props.mainUserId}}
//                />

//         </Tab.Navigator>
//     );
// };

// export default function ProfileNavigator(props) {
//     return (

//         <MyTabs {...props}/>
//     );
// };


export default function ProfileNavigator(props) {
    // console.log("MyTabs")
    // console.log(props)
    return (
        
        <Tab.Navigator 
        
        initalRouteName='ScrapbooksList' 
        
        screenOptions={{
            headerShown: false, 
            tabBarShowLabel: true, 
            tabBarActiveTintColor: '#FF4C68',
            tabBarInactiveTintColor: '#000000',
            tabBarActiveBackgroundColor: '#FFFFFF',
            tabBarInactiveBackgroundColor: '#FFFFFF',
            tabBarIndicatorStyle: {backgroundColor: '#FF4C68'},
            tabBarStyle: {height: 50}
            }}   
        >

            <Tab.Screen name="ScrapbooksList"
            component={ScrapbooksList}
            options={{ 
                tabBarLabel: "Scrapbooks",
                userId: props.userId, // Pass userId prop to ScrapbooksList
                mainUserId: props.mainUserId // Pass mainUserId prop to ScrapbooksList
               }}
               
               initialParams={{userId: props.userId, mainUserId: props.mainUserId}}
               />

        </Tab.Navigator>
    );
};