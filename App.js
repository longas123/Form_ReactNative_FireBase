import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import  FireComp from './src/components/Firecomp.component';
import Header from './src/components/Header'
import Lista from './src/components/Lista'

 

export default class App extends Component {
  
  render() {
    return ( 
      <View style={styles.container}>
        <Header/>
        <FireComp />
        <Lista />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10%'
  },
  formulario: { height: '30%'}
});

