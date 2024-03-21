import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProduct from './MyProduct';
import MyCart from './NewRedux/MyCart';

const AppNavigation = () => {
    const Stack=createNativeStackNavigator()

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='MyProduct'>
    <Stack.Screen name='MyProduct' component={MyProduct} />
    <Stack.Screen name='MyCart' component={MyCart} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({

})