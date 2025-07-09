import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screen/LoginScreen';
import OtpScreen from './Screen/OtpScreen';
import Dashboard from './Screen/Dashboard';
import SchedulePickup from './Screen/SchedulePickup';
import OrderHistory from './Screen/Orderhistory'; 

const Stack = createNativeStackNavigator();

export default function CustomerNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="SchedulePickup" component={SchedulePickup} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
    </Stack.Navigator>
  );
}
