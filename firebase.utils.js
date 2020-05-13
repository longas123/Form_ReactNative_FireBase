import firebase, { firestore } from 'firebase';

const config = {
    apiKey: 'AIzaSyAi0KUEZzM6LhbQbnbLUN6ry9Tfjn6IgLI',
    authDomain: 'servicinhos.firebaseapp.com',
    databaseURL: 'https://servicinhos.firebaseio.com',
    projectId: 'servicinhos',
    storageBucket: 'servicinhos.appspot.com',
    messagingSenderId: '375346518024',
    appId: '1:375346518024:web:579ac3690ff9acd8a0d9bd'
}

export const createUser = async (nome, idade) => {
    console.log(`Nome: ${nome} | Idade:${idade}`)

    firebase.database().ref('/users').push({nome, idade});   
    
}

export const fetchUsers = async () => {

    const ar = [];
    
    firebase.database().ref('/users')
        .on('value', snapshot => {
            ar.push(snapshot.val())
    })

   return await ar;
}



const Firebase = firebase.initializeApp(config);

export default Firebase; 