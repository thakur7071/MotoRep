import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState('');
  const [errors, setErrors] = useState({ mobile: '' });

  const handleMobileChange = (text) => {
    setMobileNumber(text);
    setErrors({ mobile: '' });

    if (text.length === 0) return;

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(text)) {
      setErrors((prev) => ({ ...prev, mobile: 'Mobile number must be 10 digits' }));
    }
  };

  const handleLogin = () => {
    if (mobileNumber === '') {
      setErrors({ mobile: 'Enter mobile number' });
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      setErrors({ mobile: 'Mobile number must be 10 digits' });
      return;
    }

    // Navigate to OTP page with mobile
    router.push({
      pathname: '/otp',
      params: { type: 'mobile', value: mobileNumber },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}
      >
        <Text style={styles.title}>Login In here 👋</Text>
        <Text style={styles.subtitle}>Please sign in to your account</Text>

        <TextInput
          style={[styles.input, errors.mobile && styles.inputError]}
          placeholder="Mobile Number"
          placeholderTextColor="#999"
          value={mobileNumber}
          onChangeText={handleMobileChange}
          keyboardType="phone-pad"
        />
        {errors.mobile !== '' && <Text style={styles.error}>{errors.mobile}</Text>}

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleLogin}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>

        <View style={styles.socialLoginContainer}>
          <Text style={styles.socialLoginText}>Or log in with</Text>
          <View style={styles.iconRow}>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
              <FontAwesome5 name="google" size={24} color="#DB4437" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },
  innerContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 28,
    color: '#222',
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  input: {
    fontFamily: 'JosefinSans-Regular',
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    fontFamily: 'JosefinSans-Regular',
    color: 'red',
    fontSize: 13,
    marginBottom: 10,
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#000A26',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  socialLoginContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  socialLoginText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#666',
    fontSize: 14,
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
  },
});
