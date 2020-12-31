import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  state = { number: 0 };
  inputtake(text) {
    this.setState({ 
      number: text 
    })
  }
  P1(number) {
    alert(number);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }} >Player 1</Text>
        <Text style={{ fontSize: 10 }} >Enter a number between 1 to 100</Text>
        <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={(text) => this.inputtake(text)} />
        <Button title="Click Me" onPress={() => this.P1(this.state.number)} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    backgroundColor: 'white',
    borderColor: 'black',
    margin: 10,
    width: 300,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',

  },
  Textstyle: {
    fontWeight: 'bold',
    fontSize: 30,
  }

};
