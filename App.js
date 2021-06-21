

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './login';
import splash from './splash';
import forgot from './forgot';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={splash} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="forgot" component={forgot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



