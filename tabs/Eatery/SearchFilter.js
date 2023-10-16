import { StyleSheet, Text, View, FlatList, Pressable, ScrollView } from 'react-native'
import React from 'react'
import openMap from 'react-native-open-maps';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1880381343731142/5547595364';
const SearchFilter = ({data, input, setInput, closeIt}) => {
  return (
    <View style={styles.scroll}>

    <View style={{marginTop:10, flex: 1, paddingBottom: 20,}}>
            <FlatList
        data={data}
        // onRefresh={() => console.log("refreshing")}
        // refreshing={true}
        renderItem={({item}) => {
            if(input === ""){
                return(
                    <Pressable
                    style={styles.pressable}
                    onPress= {() => {  openMap({
                        mapType: 'satellite',
                        provider: 'google',
                        end: item.latitude,
                        travelType: 'walk'
                      });}}                     >
                        <View style={styles.innerContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.body}>{item.body}</Text>
                            <Text style={styles.other}>{item.other}</Text>
                        </View>
                    </Pressable>
                    
                )
            }
            if(item.find.toLowerCase().includes(input)){
                return(
                    <Pressable
                    style={styles.pressable}
                    onPress= {() => {  openMap({
                        mapType: 'satellite',
                        provider: 'google',
                        end: item.latitude,
                        travelType: 'walk'
                      });}}                       >
                        <View style={styles.innerContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.body}>{item.body}</Text>
                            <Text style={styles.other}>{item.other}</Text>
                        </View>
                    </Pressable>
                )
            }
         
        }}
        />
    </View>
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    </View>

  )
}

export default SearchFilter

const styles = StyleSheet.create({
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
        flex:1
    },
    title:{
        fontWeight: '900',
        fontSize: 20,
        textAlign: "center",
    },
    body :{
        fontWeight: '600',
        fontSize: 16,
        textAlign: "center",
    }, 
    other: {
        fontSize: 15,
        textAlign: "center",
    },
})