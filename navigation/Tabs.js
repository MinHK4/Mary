import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home'
import Calendar from '../screens/Calendar'
import Docs from '../screens/Docs'
import My from '../screens/My'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const Tabs = () => (
  <Tab.Navigator 
    initialRouteName='Docs'
    screenOptions={{
      tabBarStyle: {backgroundColor: '#453E36'}
    }}
  >
    <Tab.Screen 
      name="Home" component={Home}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name="ios-home-sharp" size={size} color={color} />
        }
      }}    
    />
    <Tab.Screen 
      name="Calendar" component={Calendar}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name="calendar" size={size} color={color} />
        }
      }}
    />
    <Tab.Screen 
      name="Docs" component={Docs}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return <FontAwesome5 name="book" size={size} color={color}/>
        }
      }}
    />
    <Tab.Screen 
      name="My" component={My}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name="md-person-sharp" size={size} color={color} />
        }
      }} 
    />
  </Tab.Navigator>
)

export default Tabs;