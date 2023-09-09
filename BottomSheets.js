import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View
          style={[
            styles.container,
            { backgroundColor: isOpen ? "#c6aaaa" : "#ff0000b5" },
          ]}
        >
          <Button title="Present Modal" onPress={handlePresentModal} />
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
        </View>
      </BottomSheetModalProvider>
     </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },

});