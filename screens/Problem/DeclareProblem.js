import { StyleSheet, Text, View ,TouchableOpacity , Linking, SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { adaptToHeight, adaptToWidth } from '../../config/Demensions'
const DeclareProblem = ({navigation}) => {
  return (
    <SafeAreaView style={styles.back} >

    <View style={{flex:0.2,width:adaptToWidth(0.8), alignItems:'center', justifyContent:'flex-end'}}>
      <Text style={styles.text}>Déclaration de Problème</Text>
      </View>
    
      <View style={{flex:0.65, alignItems:'center', justifyContent:'space-evenly'}}>
     
      <TouchableOpacity style={styles.button1}>
     <Text onPress={()=>{Linking.openURL('tel:71 589 461');}}
      style={{  fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>SAMU</Text>
     </TouchableOpacity>
     
    
      <TouchableOpacity style={styles.button2}>
     <Text onPress={()=>{Linking.openURL('tel:197');}}
      style={{fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>Protection Civile</Text>
     </TouchableOpacity>
     
     
      <TouchableOpacity style={styles.button3}>
     <Text onPress={()=>{Linking.openURL('tel:29579539');}} 
     style={{fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>Appeler Contact 1</Text>
     </TouchableOpacity>
     
     
      <TouchableOpacity style={styles.button3}>
     <Text onPress={()=>{Linking.openURL('tel:58961144');}} 
     style={{fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>Appeler Contact 2</Text>
     </TouchableOpacity>
    
     
      <TouchableOpacity style={styles.button3}>
     <Text onPress={()=>{Linking.openURL('tel:29579539');}}
      style={{fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>Appeler service client</Text>
     </TouchableOpacity>
     
     
      <TouchableOpacity style={styles.button3}>
     <Text onPress={()=>{Linking.openURL('tel:58961144');}}
      style={{fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>Appeler service technique</Text>
     </TouchableOpacity>
     </View>
     </SafeAreaView>
  )
}



const styles = StyleSheet.create({ 
  button1: {
  elevation: 8,
  backgroundColor: colors.pastelGreen,
  borderRadius: 30,
  paddingVertical: adaptToHeight(0.01),
  paddingHorizontal: adaptToWidth(0.08),
  fontFamily:'Montserrat-Bold',
  width:adaptToWidth(0.4),
  height:adaptToHeight(0.07),
  alignItems:'center',
  justifyContent:'center'
},
button2: {
  elevation: 8,
  backgroundColor: colors.pastelGreen,
  borderRadius: 30,
  paddingVertical: adaptToHeight(0.01),
  paddingHorizontal: adaptToWidth(0.08) ,
  fontFamily:'Montserrat',
  width:adaptToWidth(0.6),
  height:adaptToHeight(0.07),
  alignItems:'center',
  justifyContent:'center',
  color:'white'
},
button3: {
  elevation: 8,
 borderRadius: 30,
 paddingVertical: adaptToHeight(0.01),
  paddingHorizontal: adaptToWidth(0.08) ,
 fontFamily:'Montserrat',
 backgroundColor:colors.white,
 width:adaptToWidth(0.8),
 height:adaptToHeight(0.07),
 alignItems:'center',
 justifyContent:'center'} ,


text: {
  fontSize: 48,
  letterSpacing: adaptToWidth(0.001),
  fontFamily:'Lobster',
  color: colors.purple ,
    textAlign:'center'

   
  
},
back:{
  backgroundColor: colors.primary ,
  flex:1, alignItems:'center'
}})
export default DeclareProblem