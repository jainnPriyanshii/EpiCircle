import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user?.phone}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SchedulePickup')}
      >
        <Text style={styles.buttonText}>Schedule Pickup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ccc' }]}
        onPress={() => navigation.navigate('OrderHistory')}
      >
        <Text style={styles.buttonText}>View Order History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  button: {
    backgroundColor: '#2f95dc',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});
