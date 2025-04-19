import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';

const SignUp = () => {
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ mobile: '', email: '' });
  const router = useRouter();

  const handleMobileChange = (text) => {
    setMobile(text);
    setEmail('');
    setErrors({ mobile: '', email: '' });

    if (text.length === 0) return;

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(text)) {
      setErrors((prev) => ({ ...prev, mobile: 'Mobile number must be 10 digits' }));
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setMobile('');
    setErrors({ mobile: '', email: '' });

    if (text.length === 0) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setErrors((prev) => ({ ...prev, email: 'Enter a valid email address' }));
    }
  };

  const handleSubmit = () => {
    if (mobile === '' && email === '') {
      setErrors({
        mobile: 'Enter mobile number or email',
        email: 'Enter mobile number or email',
      });
      return;
    }

    if (mobile !== '') {
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(mobile)) {
        setErrors({ ...errors, mobile: 'Mobile number must be 10 digits' });
        return;
      }

      // ✅ Navigate to OTP with mobile
      router.push({
        pathname: '/otp',
        params: { value: mobile, type: 'mobile' },
      });
      return;
    }

    if (email !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrors({ ...errors, email: 'Enter a valid email address' });
        return;
      }

      // ✅ Navigate to OTP with email
      router.push({
        pathname: '/otp',
        params: { value: email, type: 'email' },
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topRightCircle} />
      <View style={styles.bottomLeftCircle} />

      <View style={styles.innerContainer}>
        <Text style={styles.title}>Welcome to MotoRep!</Text>

        <TextInput
          style={[styles.input, errors.mobile && styles.inputError]}
          placeholder="Mobile Number"
          keyboardType="numeric"
          value={mobile}
          onChangeText={handleMobileChange}
          editable={email === ''}
        />
        {errors.mobile !== '' && <Text style={styles.error}>{errors.mobile}</Text>}

        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
          editable={mobile === ''}
        />
        {errors.email !== '' && <Text style={styles.error}>{errors.email}</Text>}

        <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.socialLoginContainer}>
          <Text style={styles.socialLoginText}>Or sign up with</Text>

          <View style={styles.iconRow}>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
              <FontAwesome5 name="google" size={24} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
              <Icon name="apple" size={28} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  topRightCircle: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#DCE3F0',
    zIndex: 0,
  },
  bottomLeftCircle: {
    position: 'absolute',
    bottom: -100,
    left: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#DCE3F0',
    zIndex: 0,
  },
  innerContainer: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
    zIndex: 2,
  },
  title: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 24,
    marginBottom: 20,
    color: '#000A26',
  },
  input: {
    fontFamily: 'JosefinSans-Regular',
    width: '100%',
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
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
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#000A26',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
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
