// app/(tabs)/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Home from '../../components/Home';

import {useFonts} from 'expo-font';

export default function HomeScreen() {
  const [loaded] = useFonts({
    'JosefinSans-Regular': require('../../assets/fonts/JosefinSans-Regular.ttf'),
  });
  
  if(!loaded){
    return null;
  }
  return (
    <View style={styles.container}>
   
    <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
