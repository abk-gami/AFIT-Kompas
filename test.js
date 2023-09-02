import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import {firebase} from './config';

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
    <View style={styles.container} >
        <FlatList
        style={{height: '100%'}}
        data={users}
        numColumns={1}
        renderItem={({item}) => (
            <Pressable
            style={styles.pressable}
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
        marginTop: 100,
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
