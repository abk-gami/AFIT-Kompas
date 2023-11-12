import {  StyleSheet, Text, View, FlatList, Pressable, ScrollView } from 'react-native'
import openMap from 'react-native-open-maps';
import React, {useRef, useState, useEffect} from 'react'
import {firebase} from './config';


import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1880381343731142/5547595364';
    const PopularPlaces = () => {
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
    return (
        <View style={styles.ad}>
      <Text style={styles.bts}>POPULAR PLACES</Text>
      <View > 
      <FlatList
        style={{height: '100%'}}
        data={popular}
        numColumns={1}
        renderItem={({item}) => (
            <Pressable
            style={styles.pressable}
            onPress= {() => {  openMap({
              mapType: 'satellite',
              provider: 'google',
              end: item.latitude,
              travelType: 'walk'
            });}}      
          >             
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                    <Text style={styles.other}>{item.other}</Text>

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
        </View>
      );
}

export default PopularPlaces

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: '#e5e5e5',
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
    },
    ad:{
        height: '100%'
    },
    innerContainer: {
        flexDirection:'column',
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'Poppins_700Bold' ,
    },
    body :{
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'Poppins_600SemiBold_Italic' ,
    }, 
    other: {
        fontSize: 15,
        textAlign: "center",
        fontFamily: 'Poppins_400Regular' ,
    },
    scroll: {
        flex: 1,
    },
    bts:{
        fontFamily: 'Poppins_700Bold',
        color:'#fff',
        // fontWeight: 'bold',
        fontSize: 17,
        alignSelf: 'center',
      }
})