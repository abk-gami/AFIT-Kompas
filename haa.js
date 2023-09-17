import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
const Locate = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 10.607917,
    longitude: 7.441819,
    latitudeDelta: 0.00001,
    longitudeDelta: 0.002131,
  }); 
 return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      />
    </View>
  );
};
export default Locate;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});