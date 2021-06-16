import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../store/AuthContext'
import API from '../components/api'

export default function ScreenB({ navigation }) {

  const { user } = useContext(AuthContext)
  const token = user.token

  const done = async () => {
    console.log(token)
    await API.createTask(name, token)
    // navigation.navigate('Task')
  }
  const [clientId, setClientId] = useState()
  const [name, setName] = useState()
  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

  return (
    <SafeAreaView style={styles.body} >
      <View style={styles.header}>
        <Text style={styles.textHeader}>Skapa din task</Text>
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.textTask}>Skriv din task här!</Text>


        <TextInput
          style={styles.input}
          placeholder="Task Name"
          onChangeText={setName}
          value={name} />

        <TextInput
          style={styles.input}
          placeholder="Client ID"
          onChangeText={setClientId}
          value={clientId} />

        <Text>{name}, {clientId}</Text>

        <TouchableOpacity onPress={done}
          style={styles.doneContainer}>
          <Image
            source={require('../assets/addTask.png')}
            style={styles.doneLogo}
          />
          <Text style={styles.doneText}>Klar</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/houseLogo.png')}
          style={styles.logo}
        />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'

  },
  header: {
    width: '100%',
    height: 160,
    backgroundColor: '#ECD586',
    borderBottomLeftRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  taskContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTask: {
    margin: 20,
    fontSize: 20
  },
  input: {
    textAlignVertical: 'top',
    width: 340,
    height: 70,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 10
  },
  doneContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
    flexDirection: 'row',
    backgroundColor: "#FDDF75",
    width: 120,
    height: 50,
    borderRadius: 50,
    padding: 20
  },
  doneLogo: {
    width: 20,
    height: 20,
  },
  doneText: {
    fontSize: 20,
    fontWeight: '700'
  },
  logo: {
    position: 'absolute',
    top: 530
  }

});