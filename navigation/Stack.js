import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../screens/Intro';

const Stack = createNativeStackNavigator()

const Stacks = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Intro" component={Intro}/>
    </Stack.Navigator>
  )
}

export default Stacks;