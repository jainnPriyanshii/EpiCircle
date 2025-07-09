import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PickupContext } from '../../Context/PickUpContext';
import { AuthContext } from '../../Context/AuthContext';

export default function SchedulePickup({ navigation }) {
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [address, setAddress] = useState('');
  const [link, setLink] = useState('');
  const { addPickup } = useContext(PickupContext);
  const { user } = useContext(AuthContext);

  const handleSubmit = () => {
    if (!date || !slot || !address) {
      alert('Fill all required fields');
      return;
    }

    addPickup({
      customerPhone: user?.phone,
      date,
      timeSlot: slot,
      address,
      locationLink: link,
      status: 'Pending',
    });

    navigation.navigate('OrderHistory');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Schedule Pickup</Text>

      <TextInput placeholder="Pickup Date (YYYY-MM-DD)" value={date} onChangeText={setDate} style={styles.input} />
      <TextInput placeholder="Time Slot (e.g., 10–11 AM)" value={slot} onChangeText={setSlot} style={styles.input} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} style={styles.input} />
      <TextInput placeholder="Google Map Link (optional)" value={link} onChangeText={setLink} style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Confirm Pickup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 14, borderRadius: 10, marginBottom: 16 },
  button: { backgroundColor: '#2f95dc', padding: 16, borderRadius: 10 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: '600' },
});
