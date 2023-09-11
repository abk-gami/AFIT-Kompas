import "react-native-gesture-handler";
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  Button,
} from "react-native";
// import BottomSheet from './BottomSheets';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Eat from "./screens/Screen1";
import Lecture from "./screens/Screen2";
import Hall from "./screens/Screen3";



const Bot = () => {

  
    //Bottom Sheet
    const [currentScreen, setCurrentScreen] = useState(Screen1);
    const [isOpen, setIsOpen] = useState(false);

    const bottomSheetModalRef = useRef(null);
  
    const snapPoints = [ "25%", "50%", "98%"];

    const openBottomSheet = (screen) => {
      setCurrentScreen(screen);
      bottomSheetModalRef.current?.present();
      setIsOpen(true);
    };
    function closeIt() {
      // bottomSheetModalRef.current?.present();
      bottomSheetModalRef.current?.dismiss();
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }

    const Screen1 = () => {
      return (
        <View>
         <Button 
              title="CLose"
               onPress={closeIt}
              />
      <Eat/>
        </View>
      );
    };
    
    const Screen2 = () => {
      return (
        <View>
           <Button 
              title="CLose"
               onPress={closeIt}
              />
              <Lecture/>
        </View>
      );
    };
    
    const Screen3 = () => {
      return (
        <View>
           <Button 
              title="CLose"
               onPress={closeIt}
              />
         <Hall/>
        </View>
      );
    };




  return (
    <GestureHandlerRootView
    style={{ flex: 1 }}
    >

      <Button onPress={() => openBottomSheet(Screen1)}
      title="Screen 1"
      />
     
      <Button onPress={() => openBottomSheet(Screen2)}
      title="Screen 2"
      />
       
      <Button onPress={() => openBottomSheet(Screen3)}
      title="Screen 3"
      />
      <BottomSheetModalProvider>

<BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 30, backgroundColor: '#4e2a2a' }}
            onDismiss={() => setIsOpen(false)}
            initialScreen={currentScreen}
            onClose={() => setCurrentScreen(null)}
            enablePanDownToClose={true}
          >
          {currentScreen}
          {/* <Text>Hello</Text> */}

          </BottomSheetModal>
          </BottomSheetModalProvider> 




      {/* <BottomSheet
        initialScreen={currentScreen}
        onClose={() => setCurrentScreen(null)}
      >
        {currentScreen}
      </BottomSheet> */}
    </GestureHandlerRootView>
  )
}

export default Bot;