import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select'; // Importing RNPickerSelect
import Navbar from '../components/Navbar'; // Corrected import

const Repair = () => {
  const router = useRouter();
  const [bikeName, setBikeName] = useState('');
  const [bikeNumber, setBikeNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const services = [
    { id: '1', name: 'Basic Bike Service' },
    { id: '2', name: 'Full Bike Service' },
    { id: '3', name: 'Bike Engine Repair' },
    { id: '4', name: 'Brake Replacement' },
    { id: '5', name: 'Bike Washing & Polishing' },
  ];

  const handleSubmit = () => {
    if (bikeName.trim() === '') {
      alert('Please enter your bike name');
      return;
    }

    if (bikeNumber.trim() === '') {
      alert('Please enter your bike number');
      return;
    }

    if (selectedService === '') {
      alert('Please select a service');
      return;
    }

    console.log({ 
      bikeName,
      bikeNumber,
      serviceId: selectedService,
      serviceName: services.find(s => s.id === selectedService)?.name
    });

    alert('Service booked successfully!');
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Enter Bike Details</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Bike Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your bike name"
            value={bikeName}
            onChangeText={setBikeName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Bike Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your bike number"
            value={bikeNumber}
            onChangeText={setBikeNumber}
            keyboardType="default"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Select Service</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedService(value)}
            items={services.map(service => ({
              label: service.name,
              value: service.id,
            }))}
            placeholder={{ label: 'Select a service', value: '' }}
            style={{
              inputAndroid: {
                fontFamily: 'JosefinSans-Regular',
                fontSize: 16,
                color: '#000A26',
                padding: 10,
              },
              inputIOS: {
                fontFamily: 'JosefinSans-Regular',
                fontSize: 16,
                color: '#000A26',
                padding: 10,
              },
              placeholder: {
                fontFamily: 'JosefinSans-Regular',
                color: '#A6C6D8',
              },
              iconContainer: {
                top: 10,
                right: 12,
              },
            }}
          />
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit} activeOpacity={0.8}
        >
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Repair;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E6F2',
  },
  header: {
    padding: 20,
  },
  headerTitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 24,
    color: '#000A26',
    textAlign: 'center',
    marginBottom: 5,
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    color: '#000A26',
    marginBottom: 5,
  },
  input: {
    fontFamily: 'JosefinSans-Regular',
    borderWidth: 1,
    borderColor: '#A6C6D8',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#000A26',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    fontSize: 18,
  },
});
