// In App.js in a new project

import  React,{Component} from 'react';
import { View, Text,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var MainValue;

class Player2 extends Component{
  render(props){
    return(
      <View>
        <Text>Player 2</Text>
        <Button
        title="Go to Details"
        onPress={() => props.page1.navigate('Player1')}
      />
      </View>
    );
  }
}

function SecondScreen({navigation}) {
  return (
      <Player2 />
  );
}

const Stack = createStackNavigator();

class Player1 extends Component {
  state = { number: 0 };
  inputtake(text) {
    this.setState({ 
      number: text 
    })
  }
  P1(number) {
    alert(number);
    MainValue=this.state.number;
  }
  render(props) {
   console.log("Here");
    console.log(props);
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }} >Player 1</Text>
        <Text style={{ fontSize: 10 }} >Enter a number between 1 to 100</Text>
        <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={(text) => this.inputtake(text)}   value = {this.state.number} />
        <Button title="Click Me" onPress={() => this.P1(this.state.number)} />
        <Button
        title="Go to Player 2"
        onPress={() => props.navigate('Player2')}
      />
      </View>
    );
  }
}
function HomeScreen({navigation}) {
  return (
      <Player1 page1={navigation}/>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Player1" component={HomeScreen} />
        <Stack.Screen name="Player2" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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

export default App;