import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const DriverSignUp: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LYKO</Text>
      <Text style={styles.header}>Driver Sign Up</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.link}>Sign In</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  logo: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 15 },
  signUpButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  footerText: { marginTop: 20, fontSize: 14 },
  link: { color: '#007BFF', fontWeight: 'bold' },
});

export default DriverSignUp;
