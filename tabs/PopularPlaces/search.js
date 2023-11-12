import { StyleSheet, TextInput, View, Text, ActivityIndicator } from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {firebase} from './config';

import SearchFilter from './SearchFilter'
const Popular = () => {
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [popular, setPopular] = useState([]);
  const popularPlace = firebase.firestore().collection('Popular').orderBy("id", "asc");
  useEffect(() => {
      async function fetchData(){
        setLoading(true)
          popularPlace
          .onSnapshot(
              querySnapshot => {
                  const popular = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, find, id} = doc.data()
                      popular.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          id,
                          find,
                      })
                  
                  })
                  setPopular(popular)
              }
          )

      }
      fetchData();
      setLoading(false)
  }, [])
  if(isLoading) {
    return (
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
             <ActivityIndicator/>
         </View>
    )
   }
  return (
    <View style={{flex: 1}}>
            <Text style={styles.bts}>POPULAR PLACES</Text>
          <View style={styles.searchBox1}>
    <TextInput 
    value={input}
    onChangeText={(text) => setInput(text)}
      placeholder="Where You Dey Find?"
      placeholderTextColor="#717172"
      autoCapitalize="none"
      style={{flex:1, padding:0, fontSize: 20, fontFamily: 'Poppins_600SemiBold_Italic'}}
    />
    <Ionicons name="ios-search" size={20} />
  </View>

  <SearchFilter data={popular} input={input} setInput={setInput}  />
    </View>
  );
}

export default Popular

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
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'Poppins_700Bold'
  }
})




