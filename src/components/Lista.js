import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Button} from 'react-native'
import {fetchUsers} from '../../firebase.utils';
class Lista extends Component{
    
    state = { users : []};

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

    render() {

      const {  users } = this.state;
      const items = [];
    

      return(
        <View style={styles.container2 }>
          <Button title='Listar' onPress={() => this.handleFetch()}  />
          <FlatList style={styles.container}
        data={this.state.users}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
            <View>
            <Text  style={{borderRadius:18,marginTop:8,marginBottom: 10,padding: 10,flex:1,backgroundColor: "#EBECF4"}}>Name: {item.nome}<Text>  </Text>Age: {item.idade}</Text>
            </View>
          }
        />
        

        </View>
        
      )


    }    }

export default Lista;

const styles = StyleSheet.create({
    container:{
      padding:10,
      paddingBottom: 1,
    },
    container2:{
      padding:10,
      height: '40%' 
    },

})