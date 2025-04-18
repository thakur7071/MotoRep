import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

const SignUp = () => {
  const [mobile, setMobile] = useState('');

  const handleSubmit = () => {
    console.log({ mobile });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Decorative Background Circles */}
      <View style={styles.topRightCircle} />
      <View style={styles.bottomLeftCircle} />

      <View style={styles.innerContainer}>
        {/* Header */}
        <Text style={styles.title}>Welcome to MotoRep!</Text>

        {/* Mobile Input */}
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="numeric"
          value={mobile}
          onChangeText={setMobile}
        />

        {/* Button */}
        <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
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
});
