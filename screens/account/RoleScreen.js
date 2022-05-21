import { StyleSheet, Text, View , Button , TouchableOpacity , Image,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { adaptToHeight, adaptToWidth } from '../../config/Demensions'
import Input from '../../components/input'

const RoleScreen = (props) => {
  return (
    
    

    <SafeAreaView style={{flexDirection:'column', flex:1}}>
    <View style={{flex:0.4,
       alignItems: "center",
       backgroundColor: colors.primary,
       borderBottomColor:'black', borderBottomWidth:0.7}}>
         
     <Image style={{width:adaptToWidth(0.5),height:adaptToHeight(0.23), marginTop:adaptToHeight(0.05), resizeMode:'stretch'}} 
     source={require('../../assets/logo.png')} />
      <Text style={{fontFamily:"Lobster", padding:adaptToHeight(0.01), fontSize:30, paddingTop:adaptToHeight(0.02), color:colors.purple}}>Aide-Mémoire</Text>
     <Text style={{fontFamily:"Lobster",  padding:adaptToHeight(0.01), fontSize:15}}>Vos biens aimés, en pleine sécurité </Text>
    
         </View>
         <View style={{justifyContent:'flex-start', alignItems:'center',flex:0.6,  backgroundColor:colors.primary}}>
        
             <Text style={{fontFamily:'Montserrat-Bold', fontSize:15, color:'black' ,paddingTop:adaptToHeight(0.04)}}>Veuillez indiquer vote profil</Text>

     <TouchableOpacity 
     style={{ width:adaptToWidth(0.75), height:adaptToHeight(0.065), marginTop:adaptToHeight(0.03) ,backgroundColor:'#A3A31C', borderRadius:15,  alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}}
      onPress = {() => props.navigation.navigate('Register_malade')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}} >Je suis un Malade</Text>
     </TouchableOpacity>
     
     <TouchableOpacity 
     style={{width:adaptToWidth(0.75),height:adaptToHeight(0.065),marginTop:adaptToHeight(0.03), backgroundColor:'#EECD12', borderRadius:15,  alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}}
      onPress = {() => props.navigation.navigate('Register_proche')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}}
      >Je suis un Proche</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={{width:adaptToWidth(0.75), height:adaptToHeight(0.065),marginTop:adaptToHeight(0.03), backgroundColor:'#F9AF19', borderRadius:15, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}}
      onPress = {() => props.navigation.navigate('Register_proche')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}}>Je suis un Médecin</Text>
     </TouchableOpacity>
     </View>
     </SafeAreaView>
  )}

 

const styles = StyleSheet.create({
});
export default RoleScreen