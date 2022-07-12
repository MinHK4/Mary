import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';

import Tabs from './navigation/Tabs';
import Stacks from './navigation/Stack';

export default function App() {
  const [loaded] = Font.useFonts(Ionicons.font)

  if(!loaded)
    return <AppLoading />
  
  return (
    <NavigationContainer>
      <Stacks/>
    </NavigationContainer>
  );
}