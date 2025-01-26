import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#0066ff',
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: 'white',
        height: 60,
        paddingBottom: 8,
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarLabelStyle: { color: '#0066ff' },
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"} 
              size={24} 
              color={focused ? "#0066ff" : "#666"} 
            />
          )
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          title: 'Record',
          tabBarLabel: 'Record',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "document-text" : "document-text-outline"} 
              size={24} 
              color={focused ? "#0066ff" : "#666"} 
            />
          )
        }}
      />
      <Tabs.Screen
        name="clinic"
        options={{
          title: 'Clinic',
          tabBarLabel: 'Clinic',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "medical" : "medical-outline"} 
              size={24} 
              color={focused ? "#0066ff" : "#666"} 
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "person" : "person-outline"} 
              size={24} 
              color={focused ? "#0066ff" : "#666"} 
            />
          )
        }}
      />
    </Tabs>
  );
}