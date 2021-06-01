import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ScreenA({ navigation }) {

  const onPressHandler = () => {
    navigation.navigate('Screen_B')
  }

  return (
    <View style={styles.body}>
      <Text>
        Screen A
      </Text>
      <Pressable onPress={onPressHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
        <Text>
          Go to B
      </Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
