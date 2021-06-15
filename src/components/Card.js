import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const Card = ({ name, status }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{status}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
    width: 250,
    height: 70,
    borderRadius: 10,
    backgroundColor: 'pink'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});