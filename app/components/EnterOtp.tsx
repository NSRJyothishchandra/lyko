import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EnterOtp: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LYKO</Text>
      <Text style={styles.header}>Enter OTP</Text>
      <Text style={styles.instruction}>Please enter the OTP sent to your phone number</Text>
      <View style={styles.otpContainer}>
        {Array(4)
          .fill('')
          .map((_, index) => (
            <TextInput key={index} style={styles.otpInput} keyboardType="numeric" maxLength={1} />
          ))}
      </View>
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Resend OTP | <Text style={styles.link}>Sign in here</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  logo: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  header: { fontSize: 24, marginBottom: 10 },
  instruction: { textAlign: 'center', marginBottom: 20, color: '#555' },
  otpContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  otpInput: { borderWidth: 1, borderColor: '#ccc', width: 50, height: 50, margin: 5, textAlign: 'center', fontSize: 18 },
  verifyButton: { backgroundColor: '#000', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  footerText: { marginTop: 20, fontSize: 14, textAlign: 'center' },
  link: { color: '#007BFF', fontWeight: 'bold' },
});

export default EnterOtp;
