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
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import {firebase} from './config';
// import BottomSheet from './BottomSheets';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { markers } from './model/mapData';
// import StarRating from './components/StarRating';

// import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const ExploreScreen = () => {

  // FireBase
  const [points, setPoints] = useState([]);
    const places =  firebase.firestore().collection('location')

    useEffect(() => {
      async function fetchMarkers(){
          places
          .onSnapshot(
              querySnapshot => {
                  const points = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, longitude} = doc.data()
                      points.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          longitude,
                          latitude,
                      })
                  })
                  setPoints(points)
              }
          )
      }
      fetchMarkers();
    }, []);

    //Bottom Sheet
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
    

    //Categories
  const initialMapState = {
    markers,
    categories: [
      { 
        name: 'Fastfood Center', 
        icon: <MaterialCommunityIcons style={styles.chipsIcon} name="food-fork-drink" size={18} />,
      },
      {
        name: 'Restaurant',
        icon: <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Dineouts',
        icon: <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Snacks Corner',
        icon: <MaterialCommunityIcons name="food" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Hotel',
        icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15} />,
      },
  ],
  region: {
    latitude: 10.607917, 
    longitude:  7.441819,
    latitudeDelta: 0.00001,
    longitudeDelta: 0.002131,
  },
  };

  const [state, setState] = React.useState(initialMapState);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if( mapIndex !== index ) {
          mapIndex = index;
          const { coordinate } = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp"
    });
    const opacity = mapAnimation.interpolate({
      inputRange,
      outputRange: [0.35, 1, 0.35],
      extrapolate: "clamp",
    });
    return { scale, opacity };
  });

  // const onMarkerPress = (mapEventData) => {
  //   const markerID = mapEventData._targetInst.return.key;

  //   let x = (markerID * CARD_WIDTH) + (markerID * 20); 
  //   if (Platform.OS === 'ios') {
  //     x = x - SPACING_FOR_CARD_INSET;
  //   }

  //   _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  // }

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);


  return (
    <GestureHandlerRootView
    style={{ flex: 1 }}
    >


  <MapView
        ref={_map}
        initialRegion={state.region}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        mapType={'satellite'} 
        >

        {state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          const opacityStyle = {
            opacity: interpolations[index].opacity,
          };
          return (
            <Marker key={index}
             coordinate={marker.coordinate}
            //  onPress={(e)=>onMarkerPress(e)}
             title={marker.title} 
             description={marker.description}
             >
              <Animated.View style={[styles.markerWrap, opacityStyle]}>
                {/* <Animated.Image
                  source={require('./assets/map_marker.png')}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                /> */}

           <Animated.View style={[styles.ring, scaleStyle]} />
          <View style={styles.marker} />

              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.searchBox}>
        <TextInput 
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{flex:1,padding:0}}
        />
        <Ionicons name="ios-search" size={20} />
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.chipsScrollView}
        contentInset={{ // iOS only
          top:0,
          left:0,
          bottom:0,
          right:20
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0
        }}
      >
        {state.categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.chipsItem} 
          onPress={handlePresentModal}
          >
            {category.icon}
            <Text >{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={true}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET
        }}
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                }
              },
            },
          ],
          {useNativeDriver: true}
        )}
      >
        {state.markers.map((marker, index) =>(
          <View style={styles.card} key={index}>
            <Image 
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>
                {marker.title}
                </Text>
              <Text numberOfLines={1} style={styles.cardDescription}>
                {marker.description}
                </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

 {/* <Button title="Present Modal" /> */}

      <BottomSheetModalProvider>
 <BottomSheetModal
    ref={bottomSheetModalRef}
    index={1}
    snapPoints={snapPoints}
    backgroundStyle={{ borderRadius: 30, backgroundColor: '#949ec3' }}
    isVisible={isOpen}
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
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchBox: {
    position:'absolute', 
    // marginTop: Platform.OS === 'ios' ? 40 : 30,
    marginTop: 10,
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '30%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position:'absolute', 
    top:Platform.OS === 'ios' ? 90 : 80, 
    paddingHorizontal:10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'#fff', 
    borderRadius:20,
    padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    height:35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: '5.5%',
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // marginRight: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
    // padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    // width:34,
    // height:34,
  },
  marker: {
    // width: 8,
    // height: 8,
    // borderRadius: 4,
    // backgroundColor: "red",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ff000092",
  },
  ring: {
    // width: 24,
    // height: 24,
    // borderRadius: 12,
    // backgroundColor: "rgba(130,4,150, 0.3)",
    // position: "absolute",
    // borderWidth: 1,
    // borderColor: "rgba(130,4,150, 0.5)",
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },

});