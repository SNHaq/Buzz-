import React from 'react'; 
import {View, Text} from 'react-native'; 
import {NavigationContainer} from "@react-navigation/native"; 
import DrawerNavigator from './navigation/DrawerNavigator'; 

export default function App(){
  return(
    <NavigationContainer>
    <DrawerNavigator/>
    </NavigationContainer>
  )
} 