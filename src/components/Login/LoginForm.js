import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, View, } from 'react-native';
import BaseButton from '../BaseButton';
import { login } from '../../components/api'
import { AuthContext } from '../../store/AuthContext';

const LoginForm = (props) => {

  const { user, changeEmail, changePassword, changeToken } = useContext(AuthContext)

  const loginHandler = async (user) => {
    const authorized = await login(user.email, user.password)
    if (authorized) {
      changeToken(authorized.token)
      props.navigation.navigate('CreateTask')
    }
  }

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

      <View style={styles.btnContainer}>
        <BaseButton success block btntext='Login' onPress={() => loginHandler(user)} />
      </View>

    </View>
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