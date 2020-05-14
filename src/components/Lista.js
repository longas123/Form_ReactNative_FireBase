import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'

function Lista(Props){
   var data = [
        {name: 'adalto' ,age:'25'},
        {name: 'adalto' ,age:'25'},
        {name: 'adalto' ,age:'25'},
        {name: 'adalto' ,age:'25'},
        {name: 'adalto' ,age:'25'},
        {name: 'adalto' ,age:'25'},
        {name: 'adalto' ,age:'25'},
        {name: 'adalto' ,age:'25'},
        {name: 'adalto' ,age:'25'},
      ]
    return(
        <FlatList style={styles.container}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
            <View>
            <Text  style={{borderRadius:18,marginTop:8,padding: 10,flex:1,backgroundColor: "#EBECF4"}}>Name: {item.name}<Text>  </Text>Age: {item.age}</Text>
            </View>
          }
        />

)}

export default Lista

const styles = StyleSheet.create({
    container:{
      padding:10,
      paddingBottom: 1,
    },
})