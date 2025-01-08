import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CreateAccount: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LYKO</Text>
      <Text style={styles.header}>Create Account</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
      <View style={styles.buttonContainer}>
      <Link href= '/components/EnterOtp' asChild >
        <TouchableOpacity style={styles.customerButton}>
          <Text style={styles.buttonText}>Register as Customer</Text>
        </TouchableOpacity>
        </Link>
        <Link href= '/components/DriverRegistration' asChild>
        <TouchableOpacity style={styles.driverButton}>
          <Text style={styles.buttonText}>Register as Driver</Text>
        </TouchableOpacity>
        </Link>
      </View>
      <Link href='/components/SigninPage' asChild>
      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.link}>Sign in here</Text>
      </Text>
      </Link>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  logo: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  input: { width: '100%', borderWidth: 1, borderColor: '#000', color: '#000', padding: 10, borderRadius: 5, marginBottom: 15 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  customerButton: { backgroundColor: '#000', padding: 10, borderRadius: 5, flex: 1, marginRight: 5, alignItems: 'center' },
  driverButton: { borderWidth: 2, backgroundColor: '#000', padding: 10, borderRadius: 10, flex: 1, marginLeft: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  footerText: { marginTop: 20, fontSize: 14 },
  link: { color: '#007BFF', fontWeight: 'bold' },
});

export default CreateAccount;
