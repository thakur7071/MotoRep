import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import bikeCardDummy from '../../dummy/bikecarddummy'; 

const MyBikes = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1E1E1E" />
        </TouchableOpacity>
        <View style={styles.centerContainer}>
          <Text style={styles.heading}>My Bikes</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.container}>
        {bikeCardDummy.map((bike) => (
          <View key={bike.id} style={styles.bikeCard}>
            <Image source={{ uri: bike.bikeImage }} style={styles.bikeImage} />
            <View style={styles.bikeDetails}>
              <Text style={styles.username}>{bike.username}</Text>
              <Text style={styles.bikeNumber}>Bike Number: {bike.bikeNumber}</Text>
              <Text style={styles.lastActivity}>Last Activity: {bike.lastActivity}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MyBikes;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 30,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 15,
    
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    paddingHorizontal: 10,
    height: '100%',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 25,
    color: '#1E1E1E',
  },
  bikeCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  bikeImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  bikeDetails: {
    padding: 5,
  },
  username: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    marginBottom: 5,
  },
  bikeNumber: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  lastActivity: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 12,
    color: '#777',
  },
});
