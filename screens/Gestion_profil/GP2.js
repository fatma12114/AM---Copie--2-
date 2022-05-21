import { StyleSheet, Text, View, ScrollView,SafeAreaView,TouchableOpacity,TextInput } from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'
import Ionicons from "@expo/vector-icons/Ionicons"

const GP2 = (props) => {
    
  return (
    <SafeAreaView style={{flex:1, alignItems:'center', backgroundColor:colors.primary}}>
      <View style={{justifyContent:'flex-end', flex:0.12}}>
          <Text style={{fontFamily:'Lobster', fontSize:40}}>Gérer les profils</Text>
          </View>
      <View style={{flexDirection:'row', justifyContent:'space-evenly', flex:0.15, width:adaptToWidth(0.8)}}>
        <TouchableOpacity  onPress = {() => props.navigation.navigate('GP1')}>
            <Ionicons name={'medkit'} style={{color:colors.black, opacity:0.5}} size={adaptToHeight(0.08)} />
            
            </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'column', alignItems:'center'}}  onPress = {() => props.navigation.navigate('GP2')}>
            <Ionicons name={'person'} style={{color:colors.black}} size={adaptToHeight(0.08)} />
            <Text style={{fontFamily:'Montserrat', fontSize:15, width:adaptToWidth(0.3), textAlign:'center'}}>Mon Profil</Text>
            </TouchableOpacity>
      </View>



      <View style={{flex:0.7, borderWidth:0.5, width:adaptToWidth(1), borderBottomWidth:0}}>
          <ScrollView contentContainerStyle={{alignItems:'center' }} fadingEdgeLength={adaptToHeight(0.5)} >
        <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:18, width:adaptToWidth(0.7),
             paddingLeft:adaptToWidth(0.04)}} placeholder='Nom du Patient' /> 
            </View>
            <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:18, width:adaptToWidth(0.7), 
            paddingLeft:adaptToWidth(0.04)}} placeholder='Email du Patient' />
            </View>
            <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:18, width:adaptToWidth(0.7),
             paddingLeft:adaptToWidth(0.04)}} secureTextEntry={true} placeholder='Mot de passe' />
            </View>
            <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:18, width:adaptToWidth(0.7),
             paddingLeft:adaptToWidth(0.04)}} secureTextEntry={true} placeholder='Confirmer le Mot de passe' />
            </View>
            <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:18, width:adaptToWidth(0.7), 
            paddingLeft:adaptToWidth(0.04)}} keyboardType={'phone-pad'} placeholder='Date de Naissance' />
            </View>
            <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:15, width:adaptToWidth(0.7), 
            paddingLeft:adaptToWidth(0.04)}} keyboardType={'phone-pad'} placeholder='Num de téléphone' />
            </View>
            <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <Text style={{fontFamily:'Montserrat',fontSize:18,width:adaptToWidth(0.7),
             paddingLeft:adaptToWidth(0.04), opacity:0.4}}>Localisation enregistrée</Text>
            </View>
            
             
<Text style={{fontFamily:'Montserrat', fontSize:18, paddingTop:adaptToHeight(0.02)}}>Attachez une photo du Patient </Text>
        <View style={{alignItems:'center', marginVertical:adaptToHeight(0.03)}}>
        <TouchableOpacity
           style={{width:adaptToWidth(0.55),height:adaptToHeight(0.25),
            backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
            <Ionicons
          name="add-outline"
          style={{color:colors.grey}}
          size={adaptToHeight(0.2)}
        />
        </TouchableOpacity>
        </View>
        <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:15, width:adaptToWidth(0.7), 
            paddingLeft:adaptToWidth(0.04)}} keyboardType={'phone-pad'} placeholder="Contact d'urgence 1" />
            </View>
            <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:15, width:adaptToWidth(0.7), 
            paddingLeft:adaptToWidth(0.04)}} keyboardType={'phone-pad'} placeholder="Contact d'urgence 2" />
            </View>
        <TouchableOpacity style={{backgroundColor:colors.yesGreen, marginVertical:adaptToHeight(0.015),
            height:adaptToHeight(0.07), width:adaptToWidth(0.7), borderWidth:0.5, borderColor:'white', elevation:8, borderRadius:50, justifyContent:'center', alignItems:'center'}}
            onPress = {() => props.navigation.navigate('Home_proche')}>
         <Text style={{fontFamily:'Montserrat', fontSize:25, color:'white'}}>Enregistrer</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress = {() => props.navigation.navigate('Home_proche')}>
         <Text style={{fontSize:15, fontFamily:'Roboto', paddingTop:adaptToHeight(0.009)}}>Passer</Text>
    </TouchableOpacity>
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default GP2

const styles = StyleSheet.create({})