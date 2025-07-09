import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { PickupContext } from '../../Context/PickUpContext';
import { AuthContext } from '../../Context/AuthContext';

export default function OrderHistory() {
  const { pickups, updateStatus } = useContext(PickupContext);
  const { user } = useContext(AuthContext);

  const customerPickups = pickups.filter(p => p.customerPhone === user?.phone);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.label}>Date:</Text><Text>{item.date}</Text>
      <Text style={styles.label}>Time Slot:</Text><Text>{item.timeSlot}</Text>
      <Text style={styles.label}>Address:</Text><Text>{item.address}</Text>
      <Text style={styles.label}>Status:</Text><Text style={{ fontWeight: 'bold' }}>{item.status}</Text>

      {item.status === 'Accepted' && (
        <Text style={styles.code}>Pickup Code: ABC123</Text>
      )}

      {item.status === 'Pending for Approval' && (
        <View>
          <Text style={styles.label}>Items:</Text>
          {item.items?.map((i, idx) => (
            <Text key={idx}>• {i.name} x {i.qty} @ ₹{i.price}</Text>
          ))}
          <Text style={{ fontWeight: 'bold' }}>Total: ₹{item.totalAmount}</Text>

          <TouchableOpacity
            style={styles.approveBtn}
            onPress={() => updateStatus(item.id, 'Completed')}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Approve Pickup</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={{ padding: 20 }}
      data={customerPickups}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ListEmptyComponent={<Text>No pickups yet</Text>}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  label: {
    fontWeight: '600',
    marginTop: 4,
  },
  code: {
    marginTop: 8,
    backgroundColor: '#d4f4dd',
    padding: 8,
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  approveBtn: {
    backgroundColor: '#44a080',
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
  },
});
