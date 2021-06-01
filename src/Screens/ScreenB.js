import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';


export default function ScreenB({ navigation }) {

  const onPressHandler = () => {
    navigation.goBack()
  }

  TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPressHandler} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.body}>
      <Image
        style={styles.Logo}
        source={require('../assets/logo.jpg')}
      />

      <Text style={styles.h1}>
        Inge Bra Bygg™
      </Text>
      <Text style={styles.test}>
        Vi är så bra att vi bara mäter en gång
      </Text>

      <View style={styles.container} >
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <AppButton title="login!" size="sm" backgroundColor="#007bff" />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#E5E5E5'
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
    backgroundColor: "#D4C3A3",
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