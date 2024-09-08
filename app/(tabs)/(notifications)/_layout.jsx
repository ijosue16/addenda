import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
// import Sell from './sell';
// import Transfer from './transfer';
// import Transfers from './transfer';

const TransfersLayout = () => {
  const Tab=createMaterialTopTabNavigator();
  // const Tab=withLayoutContext(Navigator);
  return (
    <Tab.Navigator
    screenOptions={
      {
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 18,fontWeight:'semibold',textTransform:'capitalize' },
        tabBarIndicatorStyle: { backgroundColor: 'black',height:3,borderRadius:10 },
        tabBarStyle: { backgroundColor: 'white' },
      }
    }
    >
      {/* <Tab.Screen
        name="sell"
        component={Sell}
        // options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="transfers"
        component={Transfer}
        // options={{ tabBarLabel: 'Home' }}
      /> */}
    </Tab.Navigator>
  )
}

export default TransfersLayout