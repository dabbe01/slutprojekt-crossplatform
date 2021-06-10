import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginForm from '../components/Login/LoginForm';

export default function ScreenB({ navigation }) {

  const onSwipeHandler = () => {
    navigation.navigate('Login')

  }

  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

  return (
    <SafeAreaView style={styles.body} >

      <LinearGradient
        colors={["#EFD167", "#B6B1B1"]}
        style={styles.LinearGradient}

        onStartShouldSetResponder={() => { return true; }}
        onResponderMove={() => { onSwipeHandler() }}
      >
        <Image
          style={styles.Logo}
          source={require('../assets/logo.png')}
        />

        <Text style={styles.titleText}>
          Inge Bra Bygg™
      </Text>
        <Text >
          Vi är så bra att vi bara mäter en gång
      </Text>
        <Image
          style={styles.sawLogo}
          source={require('../assets/sawBlade.png')}
        />
        <Text style={styles.h2} >
          Svep för att logga in {'>'}{'>'}{'>'}
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
  h1: {
    fontSize: 30,
    fontWeight: '700',
  },
  h2: {
    fontSize: 20,
    opacity: 0.5
  },
  Logo: {
    width: 75,
    height: 75,
  },
  sawLogo: {
    margin: 30
  },

});