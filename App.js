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
    const name = [
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
      {id:'1',name: 'adalto'},
    ]
    const age = [
      {id:'1',age: '44'},
      {id:'1',age: '44'},
      {id:'1',age: '44'},
      {id:'1',age: '44'},
    ]
    return (
      
      <View style={styles.container}>
        <Header/>
        <FireComp />

        <FlatList 
        data={name}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Lista
          data={item} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

