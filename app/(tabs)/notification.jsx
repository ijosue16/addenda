import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import Read from "../notifications/read";
import All from "../notifications/all";
import Unread from "../notifications/unread";

const Notification = () => {
  const Tab = createMaterialTopTabNavigator();
  // const Tab=withLayoutContext(Navigator);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#0d0446",
        tabBarInactiveTintColor: "gray",
        tabBarItemStyle:{width:90},
        tabBarLabelStyle: { fontSize: 18, fontWeight: "semibold", textTransform: "capitalize" },
        tabBarIndicatorStyle: { backgroundColor: "black", height: 3, borderRadius: 10 },
        tabBarStyle: { backgroundColor: "#d1c2c2",justifyContent:'flex-start' },
        tabBarGap:0,
      }}
    >
      <Tab.Screen   
        name="all"
        component={All}
        // options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="read"
        component={Read}
        // options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="unread"
        component={Unread}
        // options={{ tabBarLabel: 'Home' }}
      />
    </Tab.Navigator>
  );
};

export default Notification;
