import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import API from '../components/api';
import LoginForm from '../components/Login/LoginForm'

export default function ScreenB({ navigation }) {


  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

  return (
    <SafeAreaView style={styles.body} >
      <LoginForm navigation={navigation}></LoginForm>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LinearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  input: {
    borderWidth: 0,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 8,
    margin: 10,
    width: 250,

  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 105,
    margin: 25,
  },
  appButtonText: {
    fontSize: 23,
    color: "#000000",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  h1: {
    fontSize: 30,
    fontWeight: '700',
  },
  container: {
    marginTop: 45
  },
  Logo: {
    width: 75,
    height: 75,
  }
});