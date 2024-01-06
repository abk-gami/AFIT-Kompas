import { StyleSheet, View,  StatusBar, Text } from 'react-native'
import React, { useEffect } from 'react';
import 'expo-dev-client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {  useFonts, Inter_900Black, Inter_700Bold, Inter_500Medium } from '@expo-google-fonts/inter';
import {  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import SimpleAnimatable from './SimpleAnimatable';
import OnboardingScreen from  './OnboardingScreen'
import MapScreen from './MapScreen';
import Chee from './Chee';
const AppStack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  // if (!fontsLoaded) {
  //   return <OnboardingScreen/>;
  // }
  // return <MapScreen/>
  
  return (
    <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen name='Maps' component={MapScreen}
                 options={{headerShown: false}}
                 />
      <AppStack.Screen name='Onboarding' component={OnboardingScreen}
       options={{headerShown: false,}}
       />
    </AppStack.Navigator>
  </NavigationContainer>
  );
  // return (
  //   <MapScreen/>
  // );

}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})




