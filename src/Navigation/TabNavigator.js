import React from "react";
import { View, Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DashboardStackNavigator, ProfileStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
      
              if (route.name === 'Dashboard') {
                iconName = 'apps';
              } else if (route.name === 'Contact') {
                iconName = 'person';
              }
      
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'grey',
          }}>
            <Tab.Screen
                name="Dashboard"
                component={DashboardStackNavigator}
                
                 />
            <Tab.Screen 
                name="Contact" 
                component={ProfileStackNavigator} 
            />
            
        </Tab.Navigator>
    );
};


export default BottomTabNavigator;