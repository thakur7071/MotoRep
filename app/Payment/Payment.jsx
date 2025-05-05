import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Disable the header for this screen
export const unstable_settings = {
  headerShown: false,
};

const Payment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
