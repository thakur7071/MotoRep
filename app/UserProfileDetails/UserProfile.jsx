import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

const UserProfile = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [aadharImage, setAadharImage] = useState(null);
  const [dlImage, setDlImage] = useState(null);

  const pickImage = async (type) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const selectedImage = result.assets[0];
      type === 'aadhar' ? setAadharImage(selectedImage) : setDlImage(selectedImage);
    }
  };




  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>User Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.uploadBtn}
          onPress={() => pickImage('aadhar')}
        >
          <Text style={styles.uploadText}>Upload Aadhar Card</Text>
        </TouchableOpacity>
        {aadharImage && (
          <Text style={styles.fileName}>
            📄 {aadharImage.fileName || aadharImage.uri.split('/').pop()}
          </Text>
        )}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.uploadBtn}
          onPress={() => pickImage('dl')}
        >
          <Text style={styles.uploadText}>Upload Driving License</Text>
        </TouchableOpacity>
        {dlImage && (
          <Text style={styles.fileName}>
            📄 {dlImage.fileName || dlImage.uri.split('/').pop()}
          </Text>
        )}
      </View>

      <TouchableOpacity
        activeOpacity={0.85} onPress={() => router.push('/UserProfileDetails/UserProfile2')}
        style={[styles.nextBtn, !name || !aadharImage || !dlImage ? { opacity: 0.6 } : {}]}
       
        disabled={!name || !aadharImage || !dlImage} 
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#D6E6F2',
    flexGrow: 1,
  },
  heading: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
    alignSelf: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
    fontFamily: 'JosefinSans-Regular',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'JosefinSans-Regular',
    color: '#333',
    backgroundColor: '#fafafa',
  },
  uploadBtn: {
    backgroundColor: '#A6C6DB',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadText: {
    color: '#1E3A8A',
    fontWeight: '600',
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
  },
  fileName: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 16,
  },
  nextBtn: {
    backgroundColor: '#000A26',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
  },
  nextText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'JosefinSans-Regular',
  },
});

