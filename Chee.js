// "config": {   
//     "googleMaps": {    
//       "apiKey": "AIzaSyCFgrivo6_Va0_t8BS8Mi2rfuFCC9cduQg"
//     }  
//   } 
import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const Chee = () => { 
  // hooks
//   const sheetRef = useRef<BottomSheet>(null);
const sheetRef = useRef(null);


  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  return (
    <View style={styles.container}>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {data.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});

export default Chee;
// <BottomSheetModalProvider>  
// <BottomSheetModal 
//    ref={bottomSheetModalRef} 
//    index={1}
//    snapPoints={snapPoints}
//    backgroundStyle={{ borderRadius: 30, backgroundColor: '#001b7c' }}
//    isVisible={isOpen}
//    initialScreen={currentScreen}
//    onClose={() => setCurrentScreen(null)}
//    onDismiss={() => setIsOpen(false)}
//    enablePanDownToClose={true}
//  >
//             {currentScreen}
//  </BottomSheetModal> 
// </BottomSheetModalProvider>
