import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import BaseButton from '../BaseButton';
import { AuthContext } from '../../store/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';

const LoginForm = (props) => {

  const { user, changeEmail, changePassword, login } = useContext(AuthContext)
  const [invalidCredentials, SetinvalidCredentials] = useState(false);


  const loginHandler = async (user) => {
    try {
      const data = await login(user.email, user.password)
      await AsyncStorage.setItem('token', data.token)
      props.navigation.navigate('Task')
      SetinvalidCredentials(false)
    } catch (err) {
      SetinvalidCredentials(true)
      console.log(err)
    }
  }



  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('token')
  //     if (value !== null) {
  //       setToken('token')
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // }


  return (
    <View style={styles.container} >
      <TextInput
        style={styles.input}
        placeholder="Email"
        name="email"
        onChangeText={changeEmail}
        value={user.email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        name="email"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={changePassword}
        value={user.password}
        returnKeyType="go"
      />
      {invalidCredentials && <Text >Invalid Credentials</Text>}
      <View style={styles.btnContainer}>
        <BaseButton success block btntext='Login' onPress={() => loginHandler(user)} />
      </View>

    </View >
  )
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