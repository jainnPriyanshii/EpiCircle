import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/LoginScreen';
import OtpScreen from './Screens/Otpscreen';
import AssignedPickups from './Screens/AssignedPickUp';
import PickupWorkflow from './Screens/PickupWorkFlow';

const Stack = createNativeStackNavigator();

export default function PartnerNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="AssignedPickups" component={AssignedPickups} />
      <Stack.Screen name="Workflow" component={PickupWorkflow} />
    </Stack.Navigator>
  );
}
