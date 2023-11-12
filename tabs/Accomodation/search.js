import { StyleSheet, TextInput, View, Text, ActivityIndicator } from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {firebase} from './config';
import SearchFilter from './SearchFilter'
const Accomodation = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hostel, setHostel] = useState([]);
  const hostelAccomodation = firebase.firestore().collection('Accomodation').orderBy("id", "asc");
  useEffect(() => {
    setIsLoading(true);
      async function fetchData(){
          hostelAccomodation
          .onSnapshot(
              querySnapshot => {
                  const hostel = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, id, find} = doc.data()
                      hostel.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          id,
                          find,
                      })
                  })
                  setHostel(hostel);
                  setIsLoading(false);
              }
          )

      }
      fetchData();
  }, [])
  return (
    <View style={{flex: 1}}>
            <Text style={styles.bts}>HOSTELS</Text>
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

  <SearchFilter data={hostel} input={input} setInput={setInput}  />
    </View>
  );
}

export default Accomodation

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




