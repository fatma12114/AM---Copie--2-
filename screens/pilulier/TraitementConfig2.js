import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'


const TraitementConfig2 = (props) => {
    
const [shouldShow, setShouldShow] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor: colors.primary,flex:1}}>
      
    <View style={styles.titleContainer}><Text style={styles.title}>Rappels Utiles</Text></View>  
    
    <View style={{flex:.08,justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.text}>Traitement Médical</Text>  
        </View> 
      <View style={{flex:0.078, alignItems:'flex-end'}}>
        
   <TouchableOpacity    onPress = {() => props.navigation.navigate('Pilulier7')}> 
      
  <Ionicons name={"add-circle-outline"} size={adaptToHeight(0.08)}/>
 
      </TouchableOpacity>
      </View>
     <View style={{flex:0.05, width:adaptToWidth(0.9), alignSelf:'center'}}><Text style={styles.text2}>Traitement:</Text></View>
<View style={{width:adaptToWidth(1),flex:0.6, alignSelf:'center',borderTopWidth:1 }}>
    <ScrollView style={{width:adaptToWidth(1), }} contentContainerStyle={{alignItems:'center'}} fadingEdgeLength={adaptToHeight(0.5)}>
   
    <TouchableOpacity 
   style={{backgroundColor:'white',flexWrap:'wrap', borderWidth:0.8, borderRadius:50, flexDirection:'column', marginTop:adaptToHeight(0.05)}}
    onPress={() => setShouldShow(!shouldShow)}>
    
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:adaptToWidth(0.8),
      height:adaptToHeight(0.065)}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20 }}>Pilule</Text>
       </View>
       {shouldShow ? (
          <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'center', marginTop:adaptToHeight(0.04), marginBottom:adaptToHeight(0.04), borderTopWidth:1, width:adaptToWidth(0.8)}}>
         <TouchableOpacity>
          <Text style={{fontFamily:'Roboto-Bold', fontSize:20}}>Modifer</Text>
          </TouchableOpacity>
         <TouchableOpacity>
          <Text style={{fontFamily:'Roboto-Bold', fontSize:20}}>Supprimer</Text></TouchableOpacity>
          </View>
        ) : null}
   </TouchableOpacity>
    </ScrollView>
</View>
    </SafeAreaView>
  )
}

export default TraitementConfig2

const styles = StyleSheet.create({
    container: {
    flex:1,
    alignItems: "center",
    backgroundColor: colors.primary
},
title:{
    fontFamily:'Lobster',
    fontSize:52,
    color:colors.black },

titleContainer:{
    flex:0.15,
    alignItems: "center",
    justifyContent:'flex-end'
},
text:{
    marginVertical:adaptToHeight(0.01),
    fontFamily:'Roboto-Bold',
    fontSize:25
    },
text2:{
  marginVertical:adaptToHeight(0.01),
    fontFamily:'Roboto-Bold',
    fontSize:20,

}
  })