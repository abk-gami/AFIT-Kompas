import { StyleSheet, TextInput, View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {firebase} from './config';

import SearchFilter from './SearchFilter'
const Lecture = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [lecture, setLecture] = useState([]);
  const LectureRoom = firebase.firestore().collection('LectureRoom').orderBy("id", "asc");
  useEffect(() => {
      async function fetchData(){
        setIsLoading(true);
          LectureRoom
          .onSnapshot(
              querySnapshot => {
                  const lecture = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, find, id} = doc.data()
                      lecture.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          find,
                          id,
                        })
                    })
                    setLecture(lecture)
                    setIsLoading(false);
                  }
                  )
                  
                }
                fetchData();
  }, [])
  return (
    <View style={{flex: 1}}>
      <Text style={styles.bts}>LECTURE ROOMS</Text>
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

  <SearchFilter data={lecture} input={input} setInput={setInput}  />

  {isLoading &&      
       <ActivityIndicator color='#ffffff' size="170px"/>
    }
      {!isLoading && (
        <FlatList
          data={lecture}
          renderItem={({ item }) => (
            <Text style={{fontSize: 0,}}>
              {item.title} - {item.body}
            </Text>
          )}
        />
      )}
    </View>
  );
}

export default Lecture

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




