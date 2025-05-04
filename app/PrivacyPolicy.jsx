import { View, Text, StyleSheet } from 'react-native';

export default function PrivacyPolicy() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.text}>
        This is our privacy policy. Your data is safe with us. We do not share or misuse your information.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontFamily: 'JosefinSans-Bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'JosefinSans-Regular',
  },
});
