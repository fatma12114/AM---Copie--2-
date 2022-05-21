import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"

const RappelsUtiles = (props) => {
  return (
    <View style={{backgroundColor: colors.primary,flex:1 ,alignItems:'center'}}>
        <View style={styles.titleContainer}><Text style={styles.title}>Rappels Utiles</Text></View>  
        <View style={{flex:.6}}>
            
            
            </View>   
            <ScrollView>
                <TouchableOpacity style={{width:"70%", backgroundColor:colors.greyLighter, height: 30, borderRadius:50, justifyContent:"center", flexDirection:'row'}}>
                    <Text>{rappel}</Text>
                    <Text>{heure}</Text>
                </TouchableOpacity>
            </ScrollView>
       <TouchableOpacity style={{flex:0.13,justifyContent:'flex-end'}} > 
          <View style={{flexDirection:'row',justifyContent:'center', alignItems:'baseline'}}>
      <Ionicons name={"notifications"} style={{ color: colors.yesGreen }} size={60}/> 
      <Ionicons name={"add-circle-outline"} style={{ color: colors.yesGreen, fontWeight:'300' }} size={20}/></View>
      <Text style={styles.text}>Ajouter un Rappel</Text>
          </TouchableOpacity>
          </View>
  
  )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.primary
    },
    title:{
        alignItems:'flex-start',
        fontFamily:'Lobster',
        fontSize:48,
        color:colors.black },
    titleContainer:{
        flex:0.2,
            alignItems: "center",
            top:20,
            backgroundColor: colors.primary
    },
    text:{
        marginVertical:10,
        fontFamily:'Roboto',
        fontSize:20
        }
})
export default RappelsUtiles

