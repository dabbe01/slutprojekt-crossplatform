import React, { Component } from 'react';
import { StyleSheet, TextInput, View, } from 'react-native';
import BaseButton from '../BaseButton';


const onPress = () => alert('Hej');

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (

      <View style={styles.container} >
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(password) => this.setState({ password })}
          returnKeyType="go"
        />
        <View style={styles.btnContainer}>
          <BaseButton success block btntext='Login' onPress={onPress} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    margin: 8,
    width: 220,
    height: 35,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoginForm