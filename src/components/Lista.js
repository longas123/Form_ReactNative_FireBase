import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

function Lista({data}){
    return(
    <View >
        <Text  style={{borderRadius:8,marginTop:8,padding: 10,flex:1, heigth:1, backgroundColor: '#DDD'}}>{data.name}</Text>
    </View>
)}

export default Lista

/* const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 25,
        backgroundColor: "green",
        borderRadius: 8,
        padding: 24,
    },
    text:{
     fontWeight: "bold",
     fontSize: 18,
    }
}) */