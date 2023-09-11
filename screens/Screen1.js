import { StyleSheet, Text, View, FlatList, Pressable,Button } from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import {firebase} from '../config';
import "react-native-gesture-handler";


const Test = () => {

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

  return (
        <View>

  
        <FlatList
        style={{height: '100%'}}
        data={users}
        numColumns={1}
        renderItem={({item}) => (
            <Pressable
            style={styles.pressable}
            // onPress={handlePresentModal}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                    <Text style={styles.body}>{item.other}</Text>
                    <Text style={styles.body}>{item.latitude}</Text>
                    <Text style={styles.body}>{item.longitude}</Text>

                </View>
            </Pressable>
        )}
        />


        </View>
  )
}

export default Test

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
        fontWeight: 'bold'
    },
    body :{
        fontWeight: '300'
    }
})
