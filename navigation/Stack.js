import React from 'react';
import { View, Text } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../screens/Intro';
import EquipList from '../screens/EquipList';
import EquipDetail from '../screens/EquipDetail';
import NewEquip from '../screens/NewEquip';

const Stack = createNativeStackNavigator()

const Stacks = () => {
  return(
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Intro" component={Intro}/>
      <Stack.Screen 
        options={{
          title: '극장 대출목록',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#FFF3E5'
          }
        }}
        name="EquipList" component={EquipList}/>
      <Stack.Screen name="EquipDetail" component={EquipDetail}/>
      <Stack.Screen
        options={{
          title: '새 장비 대출',
        }}
        name="NewEquip" component={NewEquip}/>
    </Stack.Navigator>
  )
}

export default Stacks;