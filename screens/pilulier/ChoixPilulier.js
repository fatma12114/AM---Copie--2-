import { StyleSheet, Text, View, ScrollView,Image,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import Demensions, { adaptToHeight, adaptToWidth } from '../../config/Demensions'

const ChoixPilulier = (props) => {
  return (
      <SafeAreaView style={styles.container}>
          <View style={{flex:0.2, justifyContent:'flex-end'}} ><Text style={styles.title}>Aide-Mémoire</Text></View>  
    <ScrollView style={{ flex:0.8, marginTop:adaptToHeight(0.01), marginBottom:adaptToHeight(0.02)}} 
    contentContainerStyle={{alignItems:'center'}}>
    <TouchableOpacity style={{marginBottom:adaptToHeight(0.05) , borderBottomWidth:0.3}}  onPress = {() => props.navigation.navigate('Pilulier2')}>
       <View style={{alignItems:'center',  width:adaptToWidth(0.86)}}>
           <Image style={{width:adaptToHeight(0.23),height:adaptToHeight(0.24),marginTop:adaptToHeight(0.02)}} 
      source={require('../../assets/Pilbox.png')} />
      <Text style={{fontFamily:'Montserrat-Bold', fontSize:20, color:'black',paddingTop:adaptToHeight(0.04)}}
        >Semainier Simplifié</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginBottom:adaptToHeight(0.05) , borderBottomWidth:0.3}}  onPress = {() => props.navigation.navigate('Pilulier2')}>
      <View style={{alignItems:'center',  width:adaptToWidth(0.86)}}>
          <Image style={{width:adaptToHeight(0.23),height:adaptToHeight(0.24),marginTop:adaptToHeight(0.02)}} 
      source={require('../../assets/spécial.png')} />
      <Text style={{fontFamily:'Montserrat-Bold', fontSize:20, color:'black'}} >Spécial Alzheimer</Text>
      </View>
      </TouchableOpacity>
     <TouchableOpacity style={{marginBottom:adaptToHeight(0.05) , borderBottomWidth:0.3}}  onPress = {() => props.navigation.navigate('Pilulier2')}>
     <View style={{alignItems:'center', width:adaptToWidth(0.86)}}>
         <Image style={{width:adaptToHeight(0.23),height:adaptToHeight(0.24),marginTop:adaptToHeight(0.02)}}
      source={require('../../assets/semainier.png')} />
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20, color:'black'}} 
      >Semainier Classique</Text>
       </View>
      </TouchableOpacity>
     <TouchableOpacity style={{marginBottom:adaptToHeight(0.05) , borderBottomWidth:0.3}}  onPress = {() => props.navigation.navigate('Pilulier2')}>
     <View style={{alignItems:'center', width:adaptToWidth(0.86)}}>
         <Image style={{width:adaptToHeight(0.23),height:adaptToHeight(0.24),marginTop:adaptToHeight(0.02)}}
      source={require('../../assets/journalier.png')} />
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20, color:'black'}}
        >journalier</Text>
       </View>
      </TouchableOpacity>
     
      <TouchableOpacity style={{paddingVertical:adaptToHeight(0.03)}}><Text style={{color:'red' , fontFamily:'Montserrat-Bold',  fontSize:15}} 
       onPress = {() => props.navigation.navigate('Home_proche')}>Passer pour le moment</Text></TouchableOpacity>
 </ScrollView></SafeAreaView>
  )
}

export default ChoixPilulier

const styles = StyleSheet.create({
    container: {
       
        alignItems:'center',
        backgroundColor: colors.primary, flex:1
        
    },
    title:{
        textAlign: 'center',
        fontSize:48,
        color: colors.purple ,
        fontFamily:'Lobster',
        justifyContent:'center'},
   
})