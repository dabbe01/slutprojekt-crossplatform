import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ScreenB({ navigation }) {

  const onPressHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.body}>
      <Text>
        Screen B
      </Text>
      <Pressable onPress={onPressHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
        <Text>
          Go to A
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