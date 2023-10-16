import { StyleSheet, TextInput, View, Text } from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {firebase} from './config';

import SearchFilter from './SearchFilter'
const Department = () => {
  const [input, setInput] = useState("");

  const [department, setDepartment] = useState([]);
  const departmentBuilding = firebase.firestore().collection('Department').orderBy("id", "asc");
  useEffect(() => {
      async function fetchData(){
          departmentBuilding
          .onSnapshot(
              querySnapshot => {
                  const department = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, id, find} = doc.data()
                      department.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          id,
                          find,
                      })
                  })
                  setDepartment(department)
              }
          )

      }
      fetchData();
  }, [])
  return (
    <View style={{flex: 1}}>
      <Text style={styles.bts}>DEPARTMENTS</Text>
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

  <SearchFilter data={department} input={input} setInput={setInput}  />
    </View>
  );
}

export default Department

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
  bts:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'center',
  },
})




