import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const Header = () => (
      <View style={styles.container} >
        <Text style={styles.text}>Servicinho</Text>
      </View>
 )


export default Header;


// Estilos 
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  text : {
      color: "#fff",
      textAlign: 'left',
      fontSize: 20
  },
});
