import React from 'react';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SignInPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LYKO</Text>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <View style={styles.buttonContainer}>
      <Link href="./SignIn" asChild>
          <TouchableOpacity style={styles.customerButton}>
            <Text style={styles.buttonText}>Sign in as Customer</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./DriverSignUp" asChild>
          <TouchableOpacity style={styles.driverButton}>
            <Text style={styles.buttonText}>Sign in as Driver</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <TouchableOpacity>
        <Link href="./CreateAccount" style={styles.buttonContainer}>
             Don't have an account? Create one here.
         </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  customerButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  driverButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  registerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  registerLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default SignInPage;
