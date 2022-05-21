import { StyleSheet, Text, View,TouchableOpacity,ScrollView, SafeAreaView,StatusBar } from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"
import { adaptToHeight, adaptToWidth, width } from '../../config/Demensions'
import FloatingButton from '../../components/FloatingButton'


const NotificationsDone = (props) => {
 

  return (
    <SafeAreaView style={styles.container}>
     
    <View style={{alignItems:'flex-start', flex:0.1,width:adaptToWidth(0.9), justifyContent:'center', paddingTop:adaptToHeight(0.01)}}>
      <Text style={styles.title}> Notifications </Text>
      <FloatingButton navigation={props.navigation} />
      
      </View>
    <View style={{flex:0.1,paddingTop:adaptToHeight(0.06), flexDirection:'row', justifyContent:'space-between', width:adaptToWidth(0.9), alignItems:'flex-start'}}>
    <TouchableOpacity style={{alignItems:'center', opacity:0.6}}  onPress = {() => props.navigation.navigate('NotificationsPending')}>
      <Ionicons name={'notifications-circle-outline'} style={{color:colors.black}} size={adaptToHeight(0.08)} />
      
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:'center', opacity:0.6}} onPress = {() => props.navigation.navigate('NotificationsOublie')}>
      <Ionicons name={'close-circle-outline'} style={{color:colors.black}} size={adaptToHeight(0.08)}/>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:'center'}} onPress = {() => props.navigation.navigate('NotificationsDone')}>
      <Ionicons name={'checkmark-circle-outline'} style={{color:colors.black}} size={adaptToHeight(0.08)}/>
      <Text style={{fontFamily:'Montserrat-Bold'}}>Fait</Text>
      </TouchableOpacity>
    </View>

    
    <View style={{ flex:0.5, padding: adaptToHeight(0.04),alignItems:'center'}} >
   <ScrollView style={{width:adaptToWidth(0.9)}}>
   <TouchableOpacity style={{backgroundColor:colors.violetPastel,flexWrap:'wrap', borderWidth:0.8, borderRadius:50, flexDirection:'column'}}>
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:adaptToWidth(0.9), height:adaptToHeight(0.065)}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:adaptToWidth(0.08) }}>time</Text>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:adaptToWidth(0.08) }}>description</Text>
       </View>
   </TouchableOpacity>


   <TouchableOpacity style={{backgroundColor:colors.PastelYellow,flexWrap:'wrap', borderWidth:0.8, borderRadius:50, flexDirection:'column', marginTop:adaptToHeight(0.04)}} >
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:adaptToWidth(0.9), height:adaptToHeight(0.065)}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:adaptToWidth(0.08) }}>time</Text>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:adaptToWidth(0.08) }}>description</Text>
       </View>
       
   </TouchableOpacity>
   <TouchableOpacity style={{backgroundColor:colors.PastelOrange,flexWrap:'wrap', borderWidth:0.8, borderRadius:50, flexDirection:'column', marginTop:adaptToHeight(0.04)}} >
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:adaptToWidth(0.9), height:adaptToHeight(0.065)}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:adaptToWidth(0.08) }}>time</Text>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:adaptToWidth(0.08) }}>Pillule</Text>
       </View>
       
        </TouchableOpacity>


   </ScrollView>
   </View>
   
    </SafeAreaView>
  )
}

export default NotificationsDone

const styles = StyleSheet.create({ 
  
    container:{
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 ,
      alignItems: "center",
      backgroundColor: colors.primary,
      flex:1
},
title:{
alignItems:'flex-start',
fontFamily:'Lobster',
fontSize:48,
color:colors.black },

})