import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';

import Stacks from './navigation/Stack';

export default function App() {
  const [loaded] = Font.useFonts(Ionicons.font)

  if(!loaded)
    return <AppLoading />
  
  return (
    <NavigationContainer>
      <Stacks/>
      <StatusBar/>
    </NavigationContainer>
  );
}