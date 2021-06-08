import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ScreenA({ navigation }) {

  const onPressHandler = () => {
    navigation.navigate('CreateTask')
  }


  return (
    <View style={styles.body}>
      <LinearGradient colors={["#EFD167", "#E9D489", "#B6B1B1"]}
        style={styles.headerContainer}>
             <TouchableOpacity onPress={onPressHandler}>
                        <Image
                            style={styles.arrow}
                            source={require('../assets/Arrow.png')}
                        />
         </TouchableOpacity>
      </LinearGradient>
   
      <View style={styles.userContainer}>

        <Image
          style={styles.userLogo}
          source={require('../assets/userImage.png')}>

        </Image>
        <Text style={styles.userText} >
          Betong Jocke
            </Text>

      </View>
      <View style={styles.infoContainer}>  
      <View style={styles.info}>
      <Text>Role: Admin</Text> 
      
          </View> 
        <View style={styles.info}>
      <Text>Email: betong.jocke@gmail.com</Text>
        </View>       
      </View>

      <Image style={styles.houseLogo}
        source={require('../assets/houseLogo.png')}
      >

      </Image>
    </View>
  )
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    height: '45%',
    backgroundColor: '#F1DE7A',
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    overflow: 'hidden',
  },
  userContainer: {
    position: 'absolute',
    top: 180,
    width: 300,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#470000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 10,
    alignItems: 'center',
  },
  userLogo: {
    margin: 20
  },
  userText: {
    fontSize: 20
  },
  infoContainer:{
    position: 'absolute',
    top: 440,
    left: 45,
  },
  h2:{
    fontSize: 25,
    fontWeight: "bold",
    margin: 10
  },
  p:{
    fontSize: 15,
    
  },
  houseLogo:{
    position: 'absolute',
    top: 660
  },
  arrow:{
    margin: 30,
    marginTop: 40,
  },
  info:{
    margin: 10,
    
  }
});