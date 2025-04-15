import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>MotoRep</Text>
      <Ionicons name="menu" size={28} color="#fff" style={styles.icon} />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 65,
    backgroundColor: '#000A26',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 5,  // Shadow for Android
    shadowColor: '#000',  // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,  // Slightly increased radius for smoother shadow
  },
  title: {
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    fontSize: Dimensions.get('window').width < 350 ? 18 : 20,  // Dynamically adjust font size based on screen width
    fontWeight: '600',
  },
  icon: {
    marginLeft: 10,  // Added margin to create space between the title and icon
  },
});
