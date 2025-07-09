import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { AuthProvider } from '../epicircle/Context/AuthContext';
import { PickupProvider } from '../epicircle/Context/PickUpContext';

import CustomerNavigator from './customer/CustomerNavigator';
import PartnerNavigator from './Partner/PartnerNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <PickupProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="RoleSelect" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />
            <Stack.Screen name="Customer" component={CustomerNavigator} />
            <Stack.Screen name="Partner" component={PartnerNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </PickupProvider>
    </AuthProvider>
  );
}

function RoleSelectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to EcoCycle</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Customer')}
      >
        <Text style={styles.buttonText}>Customer App</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#44a080' }]}
        onPress={() => navigation.navigate('Partner')}
      >
        <Text style={styles.buttonText}>Partner App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f2fdfc',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40,
    color: '#224',
  },
  button: {
    backgroundColor: '#2f95dc',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});
