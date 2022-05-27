import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../../Screens/Dashboard";
import Profile from "../../Screens/Profile";
import cloths from "../../Components/cloths";
import electronic from "../../Components/electronic";
import mobile from "../../Components/mobile";
import detailScreen from "../../Components/detailScreen/detailScreen";
import BottomTabNavigator from "./TabNavigator";
import cartscreen from "../../Components/cartscreen";
import LoginScreen from "../../Screens/LoginScreen";
import {useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Signup from "../../Screens/Signup";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";




const Stack = createStackNavigator();

const screenOptionStyle = {

  headerStyle: {
  backgroundColor: "#fff",
  headerTintColor: "black",
  headerBackTitle: "white",
  },
  headerTitleStyle: {
    TextAlign: "center",
    justifyContent: "center",
  },
};

function ActionBarIcon() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Image
        source={{ uri: 'https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-s-design_460848-8641.jpg?w=2000' }}
        style={{ width: 80, height: 60, borderRadius: 40 / 2, marginRight: 25 }} />

      <TouchableOpacity style={{ flexDirection: "row", }}>
        <IonIcon name="cart" size={36} color="Grey" style={{ marginHorizontal: 245, margin: 10, }} />
      </TouchableOpacity>

    </View>

  );
}
const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

const DynamicProfile=()=>{
  return (
    <Stack.Navigator headerMode="none">
<Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  )
}

const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="DASHBOARD" component={Dashboard}
              options={{ headerLeft: props => <ActionBarIcon {...props} /> }}/>
            
           
           
            <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup' }} />
            <Stack.Screen name="cloths" component={cloths} />
            <Stack.Screen name="electronic" component={electronic} />
            <Stack.Screen name="mobile" component={mobile} />
            <Stack.Screen name="detailScreen" component={detailScreen} options={{ title: 'Product' }} />
            <Stack.Screen name="cartscreen" component={cartscreen} options={{ title: 'Cart' }} />
           
    </Stack.Navigator>

  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profiles" component={Profile} options={{ headerLeft: (props) => null }} />
      <Stack.Screen name="DynamicProfile" component={DynamicProfile} options={{ title: 'Profile' }} />
      <Stack.Screen name="LoginScreen" component={AuthStack} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export { DashboardStackNavigator, ProfileStackNavigator };

const styles = StyleSheet.create({
  headernav: {
    height: '20%',
  },
});