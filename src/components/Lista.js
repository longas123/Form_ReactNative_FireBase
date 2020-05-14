import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

function Lista({data}){
    return(
    <View style={styles.container}>
        <Text  style={{borderRadius:18,marginTop:8,padding: 10,flex:1, heigth:1, backgroundColor: '#DDD'}}>{data.name}</Text>
    </View>
)}

export default Lista

const styles = StyleSheet.create({
    container:{
      padding:10,
      paddingBottom: 1,
    },
})