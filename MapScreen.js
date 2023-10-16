import "react-native-gesture-handler";
import React, { useState, useEffect, useRef } from 'react';
import openMap from 'react-native-open-maps';
import Chee from "./Chee";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  // FlatList,
  Pressable,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import SearchFilter from "./SearchFilter";
import {firebase} from './config';
import Accomodation from "./tabs/Accomodation/search";
import Department from "./tabs/Department/search";
import Search from "./search";
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { markers } from './model/mapData';

import PopularPlaces from "./PopularPlaces";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1880381343731142/5547595364';


const ExploreScreen = () => {

  
  // FireBase
  // search
  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('location');

  useEffect(() => {
      async function fetchData(){
          todoRef
          .onSnapshot(
              querySnapshot => {
                  const users = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, longitude} = doc.data()
                      users.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          longitude,
                      })
                  })
                  setUsers(users)
              }
          )

      }
      fetchData();
  }, [])

  //Breaking News
  const [breaking, setBreaking] = useState([]);
  const breakingNews = firebase.firestore().collection('BreakingNews');
  useEffect(() => {
      async function fetchData(){
          breakingNews
          .onSnapshot(
              querySnapshot => {
                  const breaking = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, longitude} = doc.data()
                      breaking.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          longitude,
                      })
                  })
                  setBreaking(breaking)
              }
          )

      }
      fetchData();
  }, [])
//Popular
  const [popular, setPopular] = useState([]);
  const popularPlace = firebase.firestore().collection('Popular');
  useEffect(() => {
      async function fetchData(){
          popularPlace
          .onSnapshot(
              querySnapshot => {
                  const popular = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, longitude} = doc.data()
                      popular.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          longitude,
                      })
                  
                  })
                  setPopular(popular)
              }
          )

      }
      fetchData();
  }, [])

  //Lecture Room
  const [lecture, setLecture] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const LectureRoom = firebase.firestore().collection('LectureRoom');
  useEffect(() => {
      async function fetchData(){
          LectureRoom
          .onSnapshot(
              querySnapshot => {
                  const lecture = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, longitude} = doc.data()
                      lecture.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          longitude,
                        })
                      // printTitle(title)
                      // printBody(body)
                    })
                    setLecture(lecture)
                  }
                  )
                  
                }
                fetchData();
                setIsLoading(false);
  }, [])

  // function printTitle(title) {
  //   // console.log(title);
  // }
  // function printBody(body) {
  //   // console.log(body);
  // }
  // Eatery
  const [eatery, setEatery] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const Restaurant = firebase.firestore().collection('Eatery').orderBy("id", "asc");
  useEffect(() => {
      async function fetchData(){
          Restaurant
          .onSnapshot(
              querySnapshot => {
                  const eatery = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, longitude} = doc.data()
                      eatery.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          longitude,
                        })
                    })
                  setEatery(eatery)
              }
          )

      }
      fetchData();
      setIsLoading(false);
  }, [])
  //Accomodation
  const [hostel, setHostel] = useState([]);
  const hostelAccomodation = firebase.firestore().collection('Accomodation').orderBy("id", "asc");
  useEffect(() => {
      async function fetchData(){
          hostelAccomodation
          .onSnapshot(
              querySnapshot => {
                  const hostel = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, id} = doc.data()
                      hostel.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          id,
                      })
                  })
                  setHostel(hostel)
              }
          )

      }
      fetchData();
  }, [])
  //Department
  const [department, setDepartment] = useState([]);
  const departmentBuilding = firebase.firestore().collection('Department').orderBy("id", "asc");
  useEffect(() => {
      async function fetchData(){
          departmentBuilding
          .onSnapshot(
              querySnapshot => {
                  const department = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, id} = doc.data()
                      department.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          id,
                      })
                  })
                  setDepartment(department)
              }
          )

      }
      fetchData();
  }, [])

    //Bottom Sheet
    const [isOpen, setIsOpen] = useState(false);
    const [currentScreen, setCurrentScreen] = useState(Screen1);


    const bottomSheetModalRef = useRef(null);
  
    const snapPoints = [ "35%",  '75%', "100%"];
  

    const openBottomSheet = (screen) => {
      setCurrentScreen(screen);
      // bottomSheetModalRef.current?.present(1);
      bottomSheetModalRef.current?.snapToIndex(1);
      // setIsOpen(true);
      // setTimeout(() => {
      // }, 20);
    };
    function closeIt() {
      // bottomSheetModalRef.current?.dismiss();
      bottomSheetModalRef.current?.close();
      // setTimeout(() => {
      //   setIsOpen(false);
      // }, 100);
    }
    const LoadingAnimation = () => {
      return (
        <ActivityIndicator size="large" color="#ffffff" />
      );
    };

    const [show, setShow] = useState(false);

    useEffect(() => {
      setTimeout(() => setShow(true), 3000);
    }, []);
//Bottom Sheet Screens
    const Screen1 = () => {
      return (
        <View style={styles.ad}>
          <Text style={styles.bts}>BREAKING NEWS</Text>
            <FlatList
        style={{height: '100%'}}
        data={breaking}
        numColumns={1}
        renderItem={({item}) => (
          <Pressable
          style={styles.pressable}
          onPress= {closeIt}
          
          >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                    <Text style={styles.body}>{item.other}</Text>

                    </View>
                    </Pressable>
                    )}
                    />
          <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
        </View>
      );
    };

    
    
    const Screen2 = () => {
      return(
        <PopularPlaces/>
        // <Chee/>
      );
    };
    
    const Screen3 = () => {

      return (
        <View style={styles.ad}>
          <Text style={styles.bts}>LECTURE ROOMS</Text>
          {isLoading && (
          <LoadingAnimation visible={isLoading} />
          )}
      <FlatList
        style={{height: '100%'}}
        data={lecture}
        numColumns={1}
        renderItem={({item}) => (
            <Pressable
            style={styles.pressable}
            onPress= {() => {  openMap({
              // zoom: 23,
              mapType: 'satellite',
              provider: 'google',
              end: item.latitude,
              travelType: 'walk'
            });}} 
                >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                    <Text style={styles.body}>{item.other}</Text>

                </View>
            </Pressable>
        )}
        />
                 <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
        </View>
      );
    };
    const Screen7 = () => {
      return (
        <View style={styles.ad}>
          <Text style={styles.bts}>EATERY</Text>
      <FlatList
        style={{height: '100%'}}
        data={eatery}
        numColumns={1}
        renderItem={({item}) => (
            <Pressable
            style={styles.pressable}
            onPress= {() => {  openMap({
              // zoom: 23,
              mapType: 'satellite',
              provider: 'google',
              end: item.latitude,
              travelType: 'walk'
            });}} 
                >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                    <Text style={styles.body}>{item.other}</Text>

                </View>
            </Pressable>
        )}
        />
                 <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
        </View>
      );
    };

    const Screen4 = () => {
      return (
        <Accomodation/>
    //     <View style={styles.ad}>
    //       <Text style={styles.bts}>HOSTELS</Text>
    //   <FlatList
    //     style={{height: '100%'}}
    //     data={hostel}
    //     numColumns={1}
    //     renderItem={({item}) => (
    //         <Pressable
    //         style={styles.pressable}
    //         onPress= {() => {  openMap({
    //           mapType: 'satellite',
    //           provider: 'google',
    //           end: item.latitude,
    //           travelType: 'walk'
    //         });}}             >
    //             <View style={styles.innerContainer}>
    //                 <Text style={styles.title}>{item.title}</Text>
    //                 <Text style={styles.body}>{item.body}</Text>
    //                 <Text style={styles.body}>{item.other}</Text>

    //             </View>
    //         </Pressable>
    //     )}
    //     />
    //              <BannerAd
    //   unitId={adUnitId}
    //   size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    //   requestOptions={{
    //     requestNonPersonalizedAdsOnly: true,
    //   }}
    // />
    //     </View>
      );
    };

    const Screen5 = () => {
      return (
        <Department/>
    //     <View style={styles.ad}>
    //       <Text style={styles.bts}>DEPARTMENTS</Text>
    //   <FlatList
    //     style={{height: '100%'}}
    //     data={department}
    //     numColumns={1}
    //     renderItem={({item}) => (
    //         <Pressable
    //         style={styles.pressable}
    //         onPress= {() => {  openMap({
    //           mapType: 'satellite',
    //           provider: 'google',
    //           end: item.latitude,
    //           travelType: 'walk'
    //         });}}             >
    //             <View style={styles.innerContainer}>
    //                 <Text style={styles.title}>{item.title}</Text>
    //                 <Text style={styles.body}>{item.body}</Text>
    //                 <Text style={styles.body}>{item.other}</Text>

    //             </View>
    //         </Pressable>
    //     )}
    //     />
    //              <BannerAd
    //   unitId={adUnitId}
    //   size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    //   requestOptions={{
    //     requestNonPersonalizedAdsOnly: true,
    //   }}
    // />
    //     </View>
      );
    };

    const Screen6 = () => {
      return (
      <Search/>
      );
    };

    //Categories
  const initialMapState = {
    markers,
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

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = (markerID * CARD_WIDTH) + (markerID * 20); 
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  }

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  return (
    <GestureHandlerRootView
    style={{ flex: 1 }}
    >
           <StatusBar backgroundColor="#001b7c" barStyle="light-content"/>

  <MapView
        ref={_map}
        initialRegion={state.region}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        mapType={'satellite'} 
        showsUserLocation={true}
        followUserLocation={true}
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
             onPress={(e)=>onMarkerPress(e)}
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
        {/* search button at the top */}
      <TouchableOpacity
      onPress={() => openBottomSheet(Screen6)}
       style={styles.searchBox}>
      <Ionicons name="ios-search" size={20} color={'#001b7c'} />
        <Text style={styles.text}> AFIT Guide </Text>
      </TouchableOpacity>

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
        {/* {state.categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.chipsItem} 
          onPress={handlePresentModal}
          >
            {category.icon}
            <Text >{category.name}</Text>
          </TouchableOpacity>
        ))} */}


        <TouchableOpacity
        style={styles.chipsItem}
         onPress={() => openBottomSheet(Screen1)}
        ><Text>
        </Text>
          <Text style={styles.text}> 
          Breaking News</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.chipsItem}
         onPress={() => openBottomSheet(Screen2)}
        >
          <Text style={styles.text}> 
          Popular Places</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.chipsItem}
         onPress={() => openBottomSheet(Screen3)}
        >
          <Text style={styles.text}> Lecture Rooms</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.chipsItem}
         onPress={() => openBottomSheet(Screen7)}
        >
          <Text style={styles.text}>
            Eatery</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.chipsItem}
         onPress={() => openBottomSheet(Screen4)}
        >
          <Text style={styles.text}>
            Accomodations</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.chipsItem}
         onPress={() => openBottomSheet(Screen5)}
        >
          <Text style={styles.text}>Departments</Text>
        </TouchableOpacity>


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

      {/* <BottomSheetModalProvider>
 <BottomSheetModal
    ref={bottomSheetModalRef}
    index={1}
    snapPoints={snapPoints}
    backgroundStyle={{ borderRadius: 30, backgroundColor: '#001b7c' }}
    isVisible={isOpen}
    initialScreen={currentScreen}
    onClose={() => setCurrentScreen(null)}
    onDismiss={() => setIsOpen(false)}
    enablePanDownToClose={true}
  >
             {currentScreen}
  </BottomSheetModal>
 </BottomSheetModalProvider>  */}

 <BottomSheet
    ref={bottomSheetModalRef}
    index={1}
    snapPoints={snapPoints}
    backgroundStyle={{ borderRadius: 30, backgroundColor: '#001b7c' }}
    isVisible={isOpen}
    initialScreen={currentScreen}
    onClose={() => setCurrentScreen(null)}
    onDismiss={() => setIsOpen(false)}
    enablePanDownToClose={true}
      >
        <Text style={styles.bsup}>swipe down to close</Text>
        <BottomSheetScrollView>
        {currentScreen}
        </BottomSheetScrollView>
        <View>
        <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
        </View>
      </BottomSheet>
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
    width: '65%',
    alignSelf:'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#001b7c',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  searchBox1: {
    // position:'absolute', 
    // marginTop: Platform.OS === 'ios' ? 40 : 30,
    marginTop: 10,
    flexDirection:"row",
    backgroundColor: '#fff',
    height: '100%',
    width: '90%',
    alignSelf:'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position:'absolute', 
    top:Platform.OS === 'ios' ? 80 : 65, 
    paddingHorizontal:10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'#fff', 
    borderRadius:20,
    // padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    paddingTop: 7,
    height: 40,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 17,
    color: '#001b7c',
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
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ff0000b5",
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
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,

  },
  ad: {
    // paddingBottom: 50,
    height: '100%'
  },
pressable: {
    backgroundColor: '#e5e5e5', 
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
},
innerContainer: {
    flexDirection:'column',
    alignItems: 'center',
},
title:{
    fontWeight: 'bold',
    fontSize: 19, 
    textAlign: "center",
},
body :{
    fontWeight: '300'
}, 
bts:{
  color:'#fff',
  fontWeight: 'bold',
  fontSize: 17,
  alignSelf: 'center',
},
bsup:{
  fontSize:14,
  color:'#ff0000' ,
  alignSelf: 'center',
  fontWeight: 'bold',
},
});