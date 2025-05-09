import { AuthContext } from "@/helpers/authContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React, { useContext } from "react";

export default function BottomTabsLayout() {
    const authContext = useContext(AuthContext);
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "teal" }}
      backBehavior="order"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: null,
          title: "Second",
          headerShown: false,
          popToTopOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="numeric-2-box-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="third"
        options={{
          title: "Third",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="numeric-3-box-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="fourth"
        options={{
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: "tomato",
            color: "white",
          },
          title: "Fourth",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="numeric-4-box-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}