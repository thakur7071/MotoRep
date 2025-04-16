import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import services from '../../dummy/dummy';

const Bookings = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>{item.details}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => console.log(`${item.name} booked!`)}>
            <Text style={styles.buttonText}>{item.buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Now</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E6F2',
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  heading: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 25,
   
    color: '#1E1E1E',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#A6C6D8',
   borderRadius:10,
    flexDirection: 'row',
    padding: 20,
    marginBottom: 16,

   
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
  
    color: '#333',
    marginBottom: 4,
  },
  details: {
    color: '#000A26',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    marginBottom: 10,
  },
  price: {
    color: '#000A26',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000A26',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
