import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home'
import Calendar from '../screens/Calendar'
import Docs from '../screens/Docs'
import My from '../screens/My'

const Tab = createBottomTabNavigator()

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Calendar" component={Calendar}/>
    <Tab.Screen name="Docs" component={Docs}/>
    <Tab.Screen name="My" component={My}/>
  </Tab.Navigator>
)

export default Tabs;