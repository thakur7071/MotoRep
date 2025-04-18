import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home'; // 👈 import Home screen
import Repair from './screens/Repair';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />   {/* ✅ Add this */}
        <Stack.Screen name="Repair" component={Repair} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
