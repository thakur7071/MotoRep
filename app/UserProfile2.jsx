import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
const UserProfile2 = () => {
      const router = useRouter();
  const [bikeName, setBikeName] = useState('');
  const [ownerName, setOwnerName] = useState('');



  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity onPress={() => router.push('/UserProfile3')} activeOpacity={0.85} style={styles.skipBtn}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Bike Name"
          value={bikeName}
          onChangeText={setBikeName}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Owner Name"
          value={ownerName}
          onChangeText={setOwnerName}
          placeholderTextColor="#999"
        />

        {/* Add Button */}
        <TouchableOpacity onPress={() => router.push('/UserProfile3')} activeOpacity={0.85} style={styles.addBtn}>
          <Text style={styles.addText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
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
  input: {
    fontFamily: 'JosefinSans-Regular',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fafafa',
  },
  addBtn: {
    backgroundColor: '#000A26',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },
});
