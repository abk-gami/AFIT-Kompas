// Sure, here is how you can create a React Native app to display different screens in a bottom sheet when different buttons are pressed:


import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  BottomSheet,
} from 'react-native';
// import BottomSheet from 'react-native-bottom-sheet';

const Screen1 = () => {
  return (
    <View>
      <Text>This is Screen 1</Text>
    </View>
  );
};

const Screen2 = () => {
  return (
    <View>
      <Text>This is Screen 2</Text>
    </View>
  );
};

const Screen3 = () => {
  return (
    <View>
      <Text>This is Screen 3</Text>
    </View>
  );
};

const Ape = () => {

  const openBottomSheet = (screen) => {
    const bottomSheet = new BottomSheet();
    bottomSheet.open({
      screen: screen,
    });
  };

  return (
    <View>
      <Button onPress={() => {
        openBottomSheet(Screen1);
      }}
      title='Screen 1'
      />
        
      
      <Button onPress={() => {
        openBottomSheet(Screen2);
      }}
      title='screen 2'
      />
      <Button onPress={() => {
        openBottomSheet(Screen3);
      }}
      title='screen 3'
      />
  
    </View>
  );
};



export default Ape;

