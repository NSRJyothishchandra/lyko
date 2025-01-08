import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LYKO</Text>
      <Text style={styles.header}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  logo: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 15 },
  forgotPassword: { alignSelf: 'flex-end', marginBottom: 20, color: '#007BFF' },
  signInButton: { backgroundColor: '#000', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default SignIn;