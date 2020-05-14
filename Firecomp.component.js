import React, { Component } from 'react';
import { View, StyleSheet, Button, TextInput, Text} from 'react-native';
import Firebase, {createUser, fetchUsers} from './firebase.utils';
import './warn.fix';

class FireComp extends Component{
    

    state = { nome: '', idade : '', users : []};

    handleCreate = ({nome, idade}) =>{
        createUser(nome, idade);
        this.setState({ nome: '', idade: ''});
    }

    handleFetch = async () => {
        const users = await fetchUsers();
        const usersData = [];

        let ids = Object.keys(users);
        
        ids.map(id => {
            let data = users[id];
            usersData.push(data); 
        })

        this.setState({ users : usersData});
    }

    
    render(){
        const {  users } = this.state;
        const items = [];

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

                <Text style={{margin: 10}}>Gambiarra visual</Text>
                <Button title='Listar' onPress={() => this.handleFetch()}  />
                
                {
                    this.state.users.map(({nome , idade}) => {
                        return(
                            <Text key={nome}>Nome: {nome} | Idade: {idade}</Text>
                        )
                    })
                }             
               
                
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
