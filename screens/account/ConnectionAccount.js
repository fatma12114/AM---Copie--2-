import { View, Text ,StyleSheet,Button,TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import colors from '../../config/colors'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'





const ConnectionAccount = (props) => {
  return (
    <SafeAreaView style={styles.back}>
    <View style={{flex:0.2,paddingTop:adaptToHeight(0.03) ,alignItems:'center', justifyContent:'center'}}>
    <Text style={styles.text}>Aide-Mémoire</Text>
    </View>
    
 
    <View style={{flex:0.5 , alignItems:'center',paddingBottom:adaptToHeight(0.19) }}><Ionicons name={"cloud-done-outline"}  style={{color:'black' , justifyContent:'center' }} size={adaptToWidth(0.6)}/>

       <Text style={{fontSize: 15,fontFamily:'Montserrat-Bold',color:colors.black, width:adaptToWidth(0.75), textAlign:'center'}} numberOfLines={3}> Félicitations! Vous êtes connecté avec votre patient.Il est temps de commencer la configuration .</Text>

    <TouchableOpacity style={{ marginBottom:adaptToHeight(0.03), width:adaptToWidth(0.75), height:adaptToHeight(0.07),backgroundColor:'#EECD12', borderRadius:30, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white' ,marginTop:adaptToHeight(0.03)}}   onPress = {() => props.navigation.navigate('GP1')}>
       <Text style={{color:'white', fontFamily:'Roboto-Bold', fontSize:20}}>Configurer le profil malade</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{ width:adaptToWidth(0.75),height:adaptToHeight(0.07), backgroundColor:'#A3A31C',  borderRadius:30, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white' }} 
        onPress = {() => props.navigation.navigate('Pilulier1')}>
        <Text style={{color:'white', fontFamily:'Roboto-Bold', fontSize:20}}>Configurer le pilulier</Text>
        </TouchableOpacity>
         <TouchableOpacity  onPress = {() => props.navigation.navigate('Home_proche')}>
         <Text style={{fontSize:15, fontFamily:'Roboto', paddingTop:adaptToHeight(0.009)}}>Passer</Text>
    </TouchableOpacity>

    </View>
     </SafeAreaView>
    )}

 const styles = StyleSheet.create({
   
    text2: {
      fontSize: 30
      ,
      letterSpacing: 0.25,
      fontFamily:'Montserrat',
      color: colors.black ,
      alignItems : 'center' ,
      justifyContent: 'center',
      textAlign:'center' , 

   } ,
   text: {
    fontSize: 48,
    
    letterSpacing: 0.25,
    fontFamily:'Lobster',
    color: colors.purple ,
    alignItems : 'center' ,
      justifyContent: 'flex-start' ,
      paddingTop:adaptToHeight(0.002) ,
   },
    back:{
      backgroundColor: colors.primary,
      flex:1
  
    },
    
  })


export default ConnectionAccount