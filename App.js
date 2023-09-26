
  import { StyleSheet, View,  StatusBar } from 'react-native'
// import Test from './test';
// import Hehe from './hehe';
// import BottomSheet from './TBS';
// import Bot from './bot';
// import MapScreen from './LastOne'
import React, { useEffect } from 'react';
import 'expo-dev-client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SimpleAnimatable from './SimpleAnimatable';
import OnboardingScreen from  './OnboardingScreen'
import MapScreen from './MapScreen';
// import AsyncStorage from '@react-native-community/async-storage';
const AppStack = createStackNavigator();

const App = () => {
  // const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if (value == null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsFirstLaunch("true");
  //     }else{
  //       setIsFirstLaunch("false");
  //     }
  //   });
  // }, []);
   
  // if( isFirstLaunch === null ) {
  //   return null;
  // } else if ( isFirstLaunch === true) {
  //   return (
  //     <NavigationContainer>
  //     <AppStack.Navigator>
  //       <AppStack.Screen name='Onboarding' component={OnboardingScreen}
  //        options={{headerShown: false}}
  //        />
  //       <AppStack.Screen name='Maps' component={MapScreen}
  //                  options={{headerShown: false}}
  //                  />
  //     </AppStack.Navigator>
  //   </NavigationContainer>
  //   );
  // } else {
  //   return <MapScreen/>
  // }
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

  // return (
    // // <View style={styles.main}>
    // {/* <SafeAreaView style={styles.container}> */}
    //   {/* <MapScreen/> */}
    //   {/* <Map/> */}
    //   {/* <Locatio/> */}
    //   {/* <Test/> */}
    //   {/* <Hehe /> */}
    //   {/* <BottomSheet/> */}
    //   {/* <Search/> */}
    //   {/* <Bot/> */}
    //   {/* <Locate/> */}
  
    // {/* // </SafeAreaView> */}
    // // </View>
  // );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 37,
    // backgroundColor: '#fff'
  },
})




