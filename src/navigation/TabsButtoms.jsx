import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for icons

import Home from "../screens/Home";
import Events from "../screens/Events";
import News from "../screens/News";
import ContactsUs from "../screens/ContactsUs";

const Tab = createBottomTabNavigator();

const TabsButtoms = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="newspaper" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact Us"
          component={ContactsUs}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabsButtoms;
