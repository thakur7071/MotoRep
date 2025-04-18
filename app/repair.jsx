import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import Navbar from '../components/Navbar';

const Repair = () => {
  const router = useRouter();
  const [bikeModel, setBikeModel] = useState('');
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
    if (!bikeModel.trim()) {
      Alert.alert('Validation Error', 'Please enter your bike model.');
      return;
    }

    if (!bikeNumber.trim()) {
      Alert.alert('Validation Error', 'Please enter your bike number.');
      return;
    }

    if (!selectedService) {
      Alert.alert('Validation Error', 'Please select a service.');
      return;
    }

    const serviceName = services.find(s => s.id === selectedService)?.name;

    console.log({
      bikeModel,
      bikeNumber,
      serviceId: selectedService,
      serviceName,
    });

    Alert.alert('Success', 'Your bike service has been booked!');
  };

  return (
    <View style={styles.container}>
      <Navbar />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Book a Bike Service</Text>
        <Text style={styles.headerSubtitle}>Fill out your bike details to continue</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Bike Model</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Yamaha R15"
            value={bikeModel}
            onChangeText={setBikeModel}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Bike Number</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., MH12AB1234"
            value={bikeNumber}
            onChangeText={setBikeNumber}
            keyboardType="default"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select Service</Text>
          <RNPickerSelect
            onValueChange={setSelectedService}
            items={services.map(service => ({
              label: service.name,
              value: service.id,
            }))}
            placeholder={{ label: 'Choose a service', value: '' }}
            style={{
              inputAndroid: styles.pickerInput,
              inputIOS: styles.pickerInput,
              placeholder: {
                fontFamily: 'JosefinSans-Regular',
                color: '#A6C6D8',
              },
            }}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} activeOpacity={0.8}>
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
    backgroundColor: '#EDF5FC',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 26,
    color: '#000A26',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    color: '#5B728A',
  },
  formContainer: {
    padding: 20,
    margin: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000',
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    color: '#000A26',
    marginBottom: 6,
  },
  input: {
    fontFamily: 'JosefinSans-Regular',
    borderWidth: 1,
    borderColor: '#B5CFE4',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F8FAFC',
  },
  pickerInput: {
    height:55,
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    color: '#000A26',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#B5CFE4',
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: '#000A26',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#FFFFFF',
    fontSize: 18,
  },
});
