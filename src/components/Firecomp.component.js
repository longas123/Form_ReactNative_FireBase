import React, { Component } from 'react';
import { View, StyleSheet, Button, TextInput, Text} from 'react-native';
import {createUser} from '../../firebase.utils';
import '../../warn.fix';

class FireComp extends Component{
    

    state = { nome: '', idade : ''};

    handleCreate = ({nome, idade}) =>{
        createUser(nome, idade);
        this.setState({ nome: '', idade: ''});
    }


    
    render(){
       

        return(
            <View style={styles.container}>
                <TextInput 
                value={this.state.nome}
                style={{borderRadius:18,paddingLeft:10,height: 40, width: '100%', borderColor: '#000', borderWidth: 2, marginBottom: 20}}
                onChangeText={(text)=> this.setState({nome: text})}
                placeholder='Nome'
                />

                <TextInput 
                value={this.state.idade}
                style={{borderRadius:18,paddingLeft:10,height: 40, width: '100%', borderColor: '#000', borderWidth: 2, marginBottom: 20}}
                onChangeText={(text)=> this.setState({idade: text})}
                placeholder='Idade'
                />

                <Button Style={{borderRadius:18}} title='Enviar' onPress={() => this.handleCreate(this.state)}  />
       
                
            </View>

           
        )
    }   
}

export default FireComp;

const styles = StyleSheet.create({
    container:{
      padding:10,
      paddingBottom: 1,
    },
})
