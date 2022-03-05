import React from 'react'; 
import {View, Text} from 'react-native'; 
import {createDrawerNavigator} from '@react-navigation/drawer'
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator>
    <Drawer.Screen name = "Home" component = {StackNavigator}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator; 