import React, { createContext, useState } from 'react';
// import { v4 as uuid } from 'uuid';
import uuid from 'react-native-uuid';

export const PickupContext = createContext();

export const PickupProvider = ({ children }) => {
  const [pickups, setPickups] = useState([{
    id: 'test1',
    customerPhone: '9999999999',
    date: '2025-07-08',
    timeSlot: '10–11 AM',
    address: 'Jaipur, Rajasthan',
    locationLink: '',
    status: 'Pending',
  },]);

 const addPickup = (pickup) => {
  const newPickup = { id: uuid.v4(), ...pickup };
  setPickups(prev => [...prev, newPickup]);
};


  const updateStatus = (id, status, updates = {}) => {
    setPickups(prev =>
      prev.map(p =>
        p.id === id ? { ...p, status, ...updates } : p
      )
    );
  };

  return (
    <PickupContext.Provider value={{ pickups, addPickup, updateStatus }}>
      {children}
    </PickupContext.Provider>
  );
};
