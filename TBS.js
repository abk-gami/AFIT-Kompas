import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  
} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function BottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = [ "25%", "50%", "98%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }
  function closeIt() {
    // bottomSheetModalRef.current?.present();
    bottomSheetModalRef.current?.dismiss();
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }
  const place = {
    region: {
        latitude: 10.607917,
        longitude:  7.441819,
        latitudeDelta: 0.00001,
        longitudeDelta: 0.002131,
    },
  };

  const [state, setState] = React.useState(place);


  const _map = React.useRef(null);

  return (
    <GestureHandlerRootView 
    style={{ flex: 1 }}
    >
       
          {/* <Button title="Present Modal" onPress={handlePresentModal} /> */}
          <MapView
          ref={_map}
          initialRegion={state.region}
          style={styles.container}
          provider={PROVIDER_GOOGLE}
          mapType={'satellite'} 
          >
            <Marker
  coordinate={{latitude: 10.607917, longitude: 7.441819}}
  onPress={handlePresentModal}
/>
             </MapView>
                <BottomSheetModalProvider>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 30, backgroundColor: '#4e2a2a' }}
            onDismiss={() => setIsOpen(false)}
            enablePanDownToClose={true}
          >
            <View style={styles.contentContainer}>
            <Text>Hello</Text>
          <Button 
          title="CLose" onPress={closeIt}
          />
            </View>
          </BottomSheetModal>
      </BottomSheetModalProvider>
     </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "gray",
    // alignItems: "center",
    // justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },

});