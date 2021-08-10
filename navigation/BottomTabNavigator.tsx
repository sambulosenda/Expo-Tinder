/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Matches from '../screens/Matches';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./../assets/styles";
import TabBarIcon from "./../components/TabBarIcon";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ showLabel: false,
        activeTintColor: PRIMARY_COLOR,
        inactiveTintColor: DARK_GRAY,
        labelStyle: {
          fontSize: 14,
          textTransform: "uppercase",
          paddingTop: 10,
        },
        style: {
          backgroundColor: WHITE,
          borderTopWidth: 0,
          height: 100, 
          marginBottom: 0,
          shadowOpacity: 0.05,
          shadowRadius: 10,
          shadowColor: BLACK,
          shadowOffset: { height: 0, width: 0 },
        }, }}>


      <BottomTab.Screen
        name="TabOne"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon iconName="search" color={color} text="Explore" />,
        }}
      />
      <BottomTab.Screen
        name="Matches"
        component={Matches}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              iconName="heart"
              text="Matches"
            />
          ),
        }}
      />


<BottomTab.Screen
        name="Chat"
        component={Messages}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              iconName="chatbubble"
              text="Chat"
            />
          ),
        }}
      />




<BottomTab.Screen
         name="Profile"
         component={Profile}
         options={{
           tabBarIcon: ({ focused }) => (
             <TabBarIcon
               focused={focused}
               iconName="person"
               text="Profile"
             />
           ),
         }}
      />

    </BottomTab.Navigator>
  );
}





// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
