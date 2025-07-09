import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { PickupContext } from '../../Context/PickUpContext';

export default function PickupWorkflow({ route, navigation }) {
  const { pickupId } = route.params;
  const { pickups, updateStatus } = useContext(PickupContext);
  const pickup = pickups.find(p => p.id === pickupId);

  const [code, setCode] = useState('');
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');

  const addItem = () => {
    if (name && qty && price) {
      setItems([...items, { name, qty, price }]);
      setName('');
      setQty('');
      setPrice('');
    }
  };

  const startPickup = () => {
    if (code === 'ABC123') {
      updateStatus(pickupId, 'In-Process');
    } else {
      alert('Wrong code!');
    }
  };

  const submitForApproval = () => {
    const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);
    updateStatus(pickupId, 'Pending for Approval', { items, totalAmount: total });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pickup Workflow</Text>

      {pickup.status === 'Accepted' && (
        <>
          <TextInput
            placeholder="Enter Pickup Code"
            value={code}
            onChangeText={setCode}
            style={styles.input}
          />
          <TouchableOpacity style={styles.btn} onPress={startPickup}>
            <Text style={styles.btnText}>Start Pickup</Text>
          </TouchableOpacity>
        </>
      )}

      {pickup.status === 'In-Process' && (
        <>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Add Scrap Items</Text>
          <TextInput placeholder="Item Name" value={name} onChangeText={setName} style={styles.input} />
          <TextInput placeholder="Quantity" keyboardType="numeric" value={qty} onChangeText={setQty} style={styles.input} />
          <TextInput placeholder="Price per item" keyboardType="numeric" value={price} onChangeText={setPrice} style={styles.input} />

          <TouchableOpacity style={styles.addBtn} onPress={addItem}>
            <Text style={styles.btnText}>Add Item</Text>
          </TouchableOpacity>

          <FlatList
            data={items}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item }) => (
              <Text>• {item.name} x {item.qty} @ ₹{item.price}</Text>
            )}
          />

          <TouchableOpacity style={[styles.btn, { backgroundColor: '#44a080' }]} onPress={submitForApproval}>
            <Text style={styles.btnText}>Submit for Approval</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 12, marginBottom: 12 },
  btn: { backgroundColor: '#2f95dc', padding: 14, borderRadius: 8, marginTop: 10 },
  addBtn: { backgroundColor: '#aaa', padding: 10, borderRadius: 8 },
  btnText: { color: 'white', textAlign: 'center' },
});
