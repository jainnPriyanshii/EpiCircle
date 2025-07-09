import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../../Context/AuthContext';

export default function OtpScreen({ route, navigation }) {
  const [otp, setOtp] = useState('');
  const { login } = useContext(AuthContext);
  const { phone } = route.params;

const handleVerify = () => {
  if (otp === '123456') {
    login({ phone, role: 'partner' });
    navigation.replace('AssignedPickups');  // 👈 screen name must match exactly
  } else {
    alert('Incorrect OTP');
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP sent to {phone}</Text>
      <TextInput
        placeholder="6-digit OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 15, marginBottom: 20 },
  button: { backgroundColor: '#2f95dc', padding: 15, borderRadius: 10 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});
