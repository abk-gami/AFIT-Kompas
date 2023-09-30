
  import { StyleSheet, View,  StatusBar } from 'react-native'
import React, { useEffect } from 'react';
import 'expo-dev-client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SimpleAnimatable from './SimpleAnimatable';
import OnboardingScreen from  './OnboardingScreen'
import MapScreen from './MapScreen';
const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen name='Onboarding' component={OnboardingScreen}
       options={{headerShown: false}}
       />
      <AppStack.Screen name='Maps' component={MapScreen}
                 options={{headerShown: false}}
                 />
    </AppStack.Navigator>
  </NavigationContainer>
  );

}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})




