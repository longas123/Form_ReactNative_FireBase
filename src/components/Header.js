import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const Header = () => (
      
        <View style={styles.header}>
          <Text style={{fontSize:24}}>Servicinho</Text>
        </View>
     
 )


export default Header;


// Estilos 
const styles = StyleSheet.create({
  header: {
      paddingTop: 64,
      paddingBottom: 16,
      backgroundColor: "#EFECF4",
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#EBECF4",
      marginBottom: 24, 
  },
});
