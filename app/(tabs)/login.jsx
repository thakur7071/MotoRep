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

const Login = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}
      >
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Please sign in to your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#999"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.signupText} onPress={() => router.push('/SignUp')}>
            Don't have an account? <Text style={styles.signupLink}>Sign up here</Text>
          </Text>
        </TouchableOpacity>
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
    marginBottom: 15,
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
  signupText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  signupLink: {
    fontSize: 15,
    color: '#4a90e2',
    fontWeight: '600',
  },
});
