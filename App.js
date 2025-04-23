import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from './UserProfile'; // Import your UserProfile screen
import NextScreen from './NextScreen'; // The screen that opens after pressing "Next"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current, next }) => {
            const opacity = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            });
            const translateX = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [300, 0], // Right to left
            });

            return {
              cardStyle: {
                opacity,
                transform: [{ translateX }],
              },
            };
          },
        }}
      >
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
