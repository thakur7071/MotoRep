import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import bikeCardDummy from '../../dummy/bikecarddummy'; 

const MyBikes = () => {
  return (
    <ScrollView style={styles.container}>
    
      
      {bikeCardDummy.map(bike => (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f4f4',
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

export default MyBikes;
