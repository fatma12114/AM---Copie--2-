import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { adaptToHeight, adaptToWidth } from '../config/Demensions'

const FloatingButton = (props) => {
  return (
    <View style={{position:'absolute', alignSelf:'flex-end'}}>
        <TouchableOpacity onPress = {() => props.navigation.navigate('Urgence1')}>
      <Image style={{width:adaptToWidth(0.26),height:adaptToHeight(0.15), resizeMode:'contain'}}  
      source={require('../assets/urgencelogo.png')}/></TouchableOpacity>
    </View>
  )
}

export default FloatingButton

const styles = StyleSheet.create({})