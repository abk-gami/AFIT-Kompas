import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import openMap from 'react-native-open-maps';


const SearchFilter = ({data, input, setInput, closeIt}) => {
  return (
    <ScrollView style={styles.scroll}>

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
            if(item.other.toLowerCase().includes(input)){
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
    </ScrollView>

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
        paddingBottom: 50
    }
})