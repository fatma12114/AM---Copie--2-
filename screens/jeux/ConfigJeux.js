import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import colors from '../../config/colors'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'
import Ionicons from "@expo/vector-icons/Ionicons";

const ConfigJeux = (props) => {
  return (
    <SafeAreaView style={{alignItems:'center', flex:1, backgroundColor:colors.primary}}>
      <View style={{flex:0.15, justifyContent:'flex-end', alignItems:'center'}}>
          <Text style={{fontFamily:'Lobster',fontSize:40,color:colors.black}}>
Ajouter un jeux
          </Text>
          </View>
<View style={{flex:0.8}}>
    <ScrollView style={{width:adaptToWidth(0.95)}} contentContainerStyle={{alignItems:'center'}}>
          <View style={{flex:0.4, paddingTop:adaptToHeight(0.05)}}>
          <Text style={styles.textStyle3}>Attachez une photo d'un membre de famille </Text>
          <View style={{alignItems:'center', marginVertical:adaptToHeight(0.02)}}>
            <TouchableOpacity 
            style={{width:adaptToWidth(0.55),height:adaptToHeight(0.25)
            , backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
              <Ionicons
          name="add-outline"
          style={{color:colors.grey}}
          size={adaptToHeight(0.2)}
        /> 
        </TouchableOpacity>
        </View>
        </View>
        <View style={{ justifyContent:'center'}}>
        <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.9),marginVertical:adaptToHeight(0.05),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:18, width:adaptToWidth(0.85),
             paddingLeft:adaptToWidth(0.04)}} placeholder='Nom de la personne' />
            </View></View>
            <TouchableOpacity style={{width:adaptToWidth(0.7),justifyContent:'center', alignItems:'center', alignSelf:'center', height:adaptToHeight(0.08), backgroundColor:colors.yesGreen, borderWidth:1, borderColor:'white', borderRadius:50, marginVertical:adaptToHeight(0.05)}}
             onPress = {() => props.navigation.navigate('Home_proche')}>
  <Text style={{color:'white', fontFamily:'Montserrat', fontSize:27}}>Enregistrer</Text>
</TouchableOpacity>
<TouchableOpacity  onPress = {() => props.navigation.navigate('Home_proche')}>
         <Text style={{fontSize:15, fontFamily:'Roboto', paddingTop:adaptToHeight(0.009)}}>Annuler</Text>
    </TouchableOpacity>
            </ScrollView>
            </View>
    </SafeAreaView>
  )
}

export default ConfigJeux

const styles = StyleSheet.create({
    textStyle3:{
        textAlign:'center',
        fontSize:20,
        color: colors.black,
        fontFamily:'Montserrat',
        width:adaptToWidth(0.7)
        
      },
      
})