import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';
import  FireComp from './Firecomp.component';
import Header from './src/components/Header'
import Lista from './src/components/Lista'



export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  
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
});

