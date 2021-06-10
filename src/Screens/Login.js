import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import API from '../components/api';

export default function ScreenB({ navigation }) {

  const onPressHandler = async () => {
    await API.login(email, password)
    // try {
    //   if (authorized) {
    //     await navigation.navigate('CreateTask')
    //   }
    // } catch (err) {
    //   throw err;
    // }
  }

  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPressHandler}>
      <LinearGradient
        colors={["#EFD167", "#E9D489", "#B6B1B1"]}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.body} >
      <LinearGradient
        colors={["#EFD167", "#B6B1B1"]}
        style={styles.LinearGradient}
      >
        <Image
          style={styles.Logo}
          source={require('../assets/logo.png')}
        />

        <Text style={styles.h1}>
          Inge Bra Bygg™
      </Text>
        <Text >
          Vi är så bra att vi bara mäter en gång
      </Text>

        <View style={styles.container} >
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <AppButton title="login!" size="sm" backgroundColor="#007bff" />
        <Text>
          Glömt Lösenord!
      </Text>
      </LinearGradient>
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