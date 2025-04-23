import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const UserProfile3 = () => {
  const router = useRouter();
  const [houseNumber, setHouseNumber] = useState('');
  const [landmark, setLandmark] = useState('');
  const [fullAddress, setFullAddress] = useState('');

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity onPress={() => router.push('/')} activeOpacity={0.85} style={styles.skipBtn}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Text style={styles.label}>House Number</Text>
        <TextInput
          style={styles.input}
          value={houseNumber}
          onChangeText={setHouseNumber}
        />

        <Text style={styles.label}>Landmark</Text>
        <TextInput
          style={styles.input}
          value={landmark}
          onChangeText={setLandmark}
        />

        <Text style={styles.label}>Full Address</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={fullAddress}
          onChangeText={setFullAddress}
          multiline
        />

        {/* Add Button */}
        <TouchableOpacity onPress={() => router.push('/')} activeOpacity={0.85} style={styles.addBtn}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  skipBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#A6C6DB',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  skipText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#1E3A8A',
    fontSize: 16,
    fontWeight: '600',
  },
  form: {
    width: '80%',
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
    color: '#333',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    fontFamily: 'JosefinSans-Regular',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fafafa',
  },
  addBtn: {
    backgroundColor: '#000A26',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  addText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },
});
