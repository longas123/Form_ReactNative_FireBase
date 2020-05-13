import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import  FireComp from './Firecomp.component';

// import t from 'tcomb-form-native';

// const Form = t.form.Form;

// const User = t.struct({
//   name: t.String,
//   age: t.int,
// });

// const formStyles = {
//   ...Form.stylesheet,
//   formGroup: {
//     normal: {
//       marginBottom: 10
//     },
//   },
//   controlLabel: {
//     normal: {
//       color: 'blue',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     },
//     // the style applied when a validation error occours
//     error: {
//       color: 'red',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     }
//   }
// }


export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Olá mundo</Text>
        <FireComp />


        {/* <Form 
          ref={c => this._form = c}
          type={User} 
        />
        <Button
          title="Validar"
          onPress={this.handleSubmit}
        /> */}
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
