import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigationTypes';
import WelcomeScreen from '../screens/WelcomeScreen';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import PaywallScreen from '../screens/PaywallScreen';
import HomePage from '../screens/HomePage';
const Stack = createNativeStackNavigator<RootStackParamList>();

const SimpleComponent = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default SimpleComponent;