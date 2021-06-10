import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

const BaseButton = ({
  btntext,
  onPress,
  primary,
  secondary,
  success,
  danger,
  warning,
  disabled,
  block,
  small,
}) => {


  return (
    <TouchableOpacity
      style={[
        styles.button,
        primary ? styles.primary : null,
        secondary ? styles.secondary : null,
        success ? styles.success : null,
        warning ? styles.warning : null,
        danger ? styles.danger : null,
        disabled ? styles.disabled : null,
        block ? styles.block : null,
        small ? styles.small : null,
      ]}

      onPress={disabled ? null : onPress} >
      <Text style={styles.buttonText}>{btntext}</Text>
    </TouchableOpacity >
  )
}
export default BaseButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00d463",
    borderRadius: 10,
    paddingVertical: 5,
    width: "60%"
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  primary: {
    backgroundColor: "#007bff",
  },
  secondary: {
    backgroundColor: "#6c757d"
  },
  success: {
    backgroundColor: "#28a745"
  },
  warning: {
    backgroundColor: "#ffc107",
    color: "#000",
  },
  danger: {
    backgroundColor: "#dc3545"
  },
  disabled: {
    backgroundColor: "gray"
  },
  block: {
    width: "100%"
  },
  small: {
    width: 90,
  },
})
