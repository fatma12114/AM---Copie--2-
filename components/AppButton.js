import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import Icon from "react-native-ionicons";
import Ionicons from "@expo/vector-icons/Ionicons"


const AppButton = ({ onPress, title,icon }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Ionicons name={{icon}}/><Text style={styles.appButtonText}>{title}</Text>
    
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
export default AppButton 