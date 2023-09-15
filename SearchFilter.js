import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'

const SearchFilter = ({data, input, setInput, closeIt}) => {
  return (
    <View style={{marginTop:10}}>
            <FlatList
        data={data}
        renderItem={({item}) => {
            if(input === ""){
                return(
                    <Pressable
                    style={styles.pressable}
                    onPress={closeIt}
                    >
                        <View style={styles.innerContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.body}>{item.body}</Text>
        
                        </View>
                    </Pressable>
                )
            }
            if(item.title.toLowerCase().includes(input)){
                return(
                    <Pressable
                    style={styles.pressable}
                    // onPress={closeIt}
                    >
                        <View style={styles.innerContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.body}>{item.body}</Text>
        
                        </View>
                    </Pressable>
                )
            }
         
        }}
        />
    </View>
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
})