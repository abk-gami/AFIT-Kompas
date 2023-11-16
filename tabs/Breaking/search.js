import { StyleSheet,  View, Text, Pressable, ActivityIndicator, FlatList } from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import {firebase} from './config';

const Breaking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [breaking, setBreaking] = useState([]);
  const breakingNews = firebase.firestore().collection('BreakingNews');
  useEffect(() => {
      async function fetchData(){
        setIsLoading(true);
        breakingNews
          .onSnapshot(
              querySnapshot => {
                  const breaking = []
                  querySnapshot.forEach((doc) => {
                      const {title, body, other, latitude, longitude} = doc.data()
                      breaking.push({
                          id: doc.id,
                          title,
                          body,
                          other,
                          latitude,
                          longitude,
                      })
                  })
                  setBreaking(breaking);
                  setIsLoading(false);
                }
                )
                
              }
      fetchData();
  }, [])

  return (
    <View style={{flex: 1}}>
      <Text style={styles.bts}>BREAKING NEWS</Text>


  {isLoading &&      
       <ActivityIndicator color='#ffffff' size="170px"/>
    }
      {!isLoading && (
        
        <FlatList
        style={{height: '100%'}}
        data={breaking}
        numColumns={1}
        renderItem={({item}) => (
          <Pressable
          style={styles.pressable}
          // onPress= {closeIt}
          
          >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                    <Text style={styles.other}>{item.other}</Text>

                    </View>
                    </Pressable>
                    )}
                    />
      )}
    </View>
  );
}

export default Breaking

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
    fontSize: 20,
    textAlign: "center",
    fontFamily: 'Poppins_700Bold' ,
},
body :{
    fontSize: 16,
    textAlign: "center",
    fontFamily: 'Poppins_600SemiBold_Italic' ,
}, 
other: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: 'Poppins_400Regular' ,
},
  bts:{
    color:'#fff',
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'Poppins_700Bold'
  }
})




