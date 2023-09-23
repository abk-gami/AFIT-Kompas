// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';
// import * as Location from 'expo-location'
// const Locate = () => {
//   const [mapRegion, setmapRegion] = useState({
//     latitude: 11.140335,
//     longitude: 7.709777,
//     latitudeDelta: 0.00001,
//     longitudeDelta: 0.002131,
//   }); 



 
//  return (
//     <View style={styles.container}>
//       <MapView
//         style={{ alignSelf: 'stretch', height: '100%' }}
//         region={mapRegion}
//         showsUserLocation={true}
//         showsBuildings={true}
//         zoomEnabled={true}
//       />
//     </View>
//   );
// };
// export default Locate;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
// import MapView from 'react-native-maps';

// import React, { useState, useEffect } from 'react';
// import { StyleSheet } from 'react-native';
// import * as Location from 'expo-location'
// import { MapView, MapViewDirections } from 'expo';
// const Locate = () => {
//   const [origin, setOrigin] = useState(null);
//   const [destination, setDestination] = useState(null);
//   const GOOGLE_MAPS_APIKEY = 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8';

//   useEffect(() => {
//     // Get the user's current location.
//     navigator.geolocation.getCurrentPosition((position) => {
//       setOrigin({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//       });
//     });
//   }, []);

//   // Set the destination location.
//   setDestination({
//     latitude: 37.78825,
//     longitude: -122.4167,
//   });

//   return (
//     <MapView
//       style={{ height: 300, width: 300 }}
//       showsUserLocation={true}
//     >
//       {origin && destination && (
//         <MapViewDirections
//           origin={origin}
//           destination={destination}
//           apikey={GOOGLE_MAPS_APIKEY}
//         />
//       )}
//     </MapView>
//   );
 
// };
// export default Locate;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
//API Key: AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8


// import React, { useState, useEffect } from 'react';
// import { StyleSheet } from 'react-native';
// import * as Location from 'expo-location'
// import { MapView, MapViewDirections } from 'expo';
// const Locate = () => {
//   const [origin, setOrigin] = useState(null);
//   const [destination, setDestination] = useState(null);
//   const GOOGLE_MAPS_APIKEY = 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8';

//   useEffect(() => {
//     // Get the user's current location.
//     navigator.geolocation.getCurrentPosition((position) => {
//       setOrigin({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//       });
//     });
//   }, []);

//   // Set the destination location.
//   const setDestinationCallback = (newDestination) => {
//     setDestination(newDestination);
//   };

//   return (
//     <MapView
//       style={{ height: 300, width: 300 }}
//       showsUserLocation={true}
//     >
//       {origin && destination && (
//         <MapViewDirections
//           origin={origin}
//           destination={destination}
//           apikey= 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8'
//         />
//       )}
//     </MapView>
//   );
 
// };
// export default Locate;




