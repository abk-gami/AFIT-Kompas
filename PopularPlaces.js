import {  StyleSheet, Text, View, FlatList, Pressable, ScrollView } from 'react-native'
import openMap from 'react-native-open-maps';
import React, {useRef, useState, useEffect} from 'react'
import {firebase} from './config';


    
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
        <View>
      <Text style={styles.bts}>POPULAR PLACES</Text>
      <View>
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
                    <Text style={styles.body}>{item.other}</Text>

                </View>
            </Pressable>
        )}
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
    innerContainer: {
        flexDirection:'column',
        alignItems: 'center',
    },
    title:{
        fontWeight: '900',
        fontSize: 19
    },
    body :{
        fontWeight: '500'
    }, 
    other: {
        color: '#e5e5e5',
        fontSize: 3,
    },
    scroll: {
        flex: 1,
    },
    bts:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 17,
        alignSelf: 'center',
      }
})