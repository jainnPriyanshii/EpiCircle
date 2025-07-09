import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { PickupContext } from '../../Context/PickUpContext';

export default function AssignedPickups({ navigation }) {
  const { pickups, updateStatus } = useContext(PickupContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.label}>Customer:</Text><Text>{item.customerPhone}</Text>
      <Text style={styles.label}>Date:</Text><Text>{item.date}</Text>
      <Text style={styles.label}>Time:</Text><Text>{item.timeSlot}</Text>
      <Text style={styles.label}>Address:</Text><Text>{item.address}</Text>
      <Text style={styles.label}>Status:</Text><Text>{item.status}</Text>

      {item.locationLink && (
        <TouchableOpacity onPress={() => Linking.openURL(item.locationLink)}>
          <Text style={styles.mapLink}>📍 View Location</Text>
        </TouchableOpacity>
      )}

      {item.status === 'Pending' && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => updateStatus(item.id, 'Accepted')}
        >
          <Text style={styles.btnText}>Accept Pickup</Text>
        </TouchableOpacity>
      )}

      {item.status === 'Accepted' && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Workflow', { pickupId: item.id })}
        >
          <Text style={styles.btnText}>Start Pickup</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={{ padding: 20 }}
      data={pickups}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ListEmptyComponent={<Text>No assigned pickups yet</Text>}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  label: { fontWeight: '600' },
  mapLink: { color: 'blue', marginTop: 4 },
  btn: {
    backgroundColor: '#2f95dc',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});
