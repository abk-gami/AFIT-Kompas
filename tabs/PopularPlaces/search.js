import { StyleSheet, TextInput, View } from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {firebase} from './config';

import SearchFilter from './SearchFilter'
const Search = () => {
  const [input, setInput] = useState("");

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('Department').orderBy("id", "asc");
  

  useEffect(() => {
      async function fetchData(){
          todoRef
          .onSnapshot(
              querySnapshot => {
                  const users = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, find, id} = doc.data()
                      users.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          find,
                          id,
                      })
                  })
                  setUsers(users)
              }
          )

      }
      fetchData();
  }, [])
  return (
    <View style={{flex: 1}}>
          <View style={styles.searchBox1}>
    <TextInput 
    value={input}
    onChangeText={(text) => setInput(text)}
      placeholder="Where You Dey Find?"
      placeholderTextColor="#717172"
      autoCapitalize="none"
      style={{flex:1,padding:0, fontSize: 20}}
    />
    <Ionicons name="ios-search" size={20} />
  </View>

  <SearchFilter data={users} input={input} setInput={setInput}  />
    </View>
  );
}

export default Search

const styles = StyleSheet.create({
  searchBox1: {
    // position:'absolute', 
    // marginTop: Platform.OS === 'ios' ? 40 : 30,
    marginTop: 10,
    marginBottom: 10,
    flexDirection:"row",
    backgroundColor: '#fff',
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
})




