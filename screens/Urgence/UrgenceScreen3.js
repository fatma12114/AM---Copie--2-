import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'

const UrgenceScreen3 = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:0.3, justifyContent:'flex-end'}}><Text  style={{fontFamily:'Montserrat',fontSize:40,textAlign:'center'}}>
        Est-ce que vous êtes dans la maison?</Text></View>
        <View style={{flexDirection:'row', justifyContent:'space-around', flex:0.7}}>
          <TouchableOpacity style={styles.TouchableOpacity1}><Text style={styles.text} 
           onPress = {() => props.navigation.navigate('Urgence4')}>NON</Text></TouchableOpacity>

          <TouchableOpacity style={styles.TouchableOpacity2}><Text style={styles.text} 
           onPress = {() => props.navigation.navigate('Urgence4')}>OUI</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default UrgenceScreen3

const styles = StyleSheet.create({
  container: {
       
    alignItems: "center",
    backgroundColor: colors.primary,
    flex:1
},
TouchableOpacity1:{
    width:adaptToWidth(0.44),
    height:adaptToHeight(0.2),
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center' , 
    borderRadius: 30,
    marginTop:adaptToHeight(0.1),
    margin:adaptToHeight(0.02)
},
TouchableOpacity2:{
  width:adaptToWidth(0.44),
  height:adaptToHeight(0.2),
  backgroundColor:colors.yesGreen,
    justifyContent:'center',
    alignItems:'center' ,
    borderRadius: 30,
    margin:adaptToHeight(0.02),
    marginTop:adaptToHeight(0.1)
},
text:{
    fontFamily:'Montserrat',
    fontSize:50,
    color:colors.white
}
})