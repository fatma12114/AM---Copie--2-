import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { TouchableOpacity } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons"
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'


const HomeScreenMalade = (props) => {
  
  return (
    <SafeAreaView style={styles.container} >
   <TouchableOpacity style={{ paddingVertical:adaptToHeight(0.025), paddingHorizontal:adaptToWidth(0.025)}}
    onPress = {() => props.navigation.navigate('Urgence1')}> 
     <Image style={{width:adaptToWidth(0.28),height:adaptToHeight(0.2), resizeMode:'contain'}}  
      source={require('../../assets/urgencelogo.png')} />
      
      </TouchableOpacity>
        <View style={styles.titleContainer}><Text style={styles.title}> Aide-Mémoire </Text></View>
      <View style={styles.container3}>

          <View style={{justifyContent:'center'}}>
            <TouchableOpacity style={{alignItems:'center', padding:adaptToHeight(0.04)}} onPress = {() => props.navigation.navigate('Memo')}>
              <Ionicons name={"images"}
          style={{ color: '#cc0000' }}
          size={adaptToWidth(0.25)} />
          <Text style={styles.text}>Memories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center', padding:adaptToHeight(0.04)}} onPress = {() => props.navigation.navigate('Jeu1')}>
            <Ionicons name={"game-controller"}
          style={{ color: colors.blue }}
          size={adaptToWidth(0.25)} />
          <Text style={styles.text} >Jeux</Text></TouchableOpacity>
          </View>
                    <View style={{justifyContent:'space-around',alignItems:'center'}}> 
                    <TouchableOpacity style={{alignItems:'center', padding:adaptToHeight(0.04)}} onPress = {() => props.navigation.navigate('NotificationsPending')}>
                      <Ionicons name={"notifications-circle"}
          style={{ color: colors.yesGreen}}
          size={adaptToWidth(0.25)} /><Text style={styles.text3}  numberOfLines={2}>Espace de notifications</Text>
          </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center', padding:adaptToHeight(0.04)}} onPress = {() => props.navigation.navigate('Diary')}>
                      <Ionicons name={"document"}
          style={{ color: colors.yellow }}
          size={adaptToWidth(0.25)} /><Text style={styles.text}>Diary</Text></TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
        
        alignItems: "center",
        backgroundColor: colors.primary, flex:1
    },
title:{
    alignItems:'flex-start',
    fontFamily:'Lobster',
    fontSize:48,
    color:colors.purple },
titleContainer:{
  flex:0.5,
        alignItems: "center",
        backgroundColor: colors.primary,
        
},
container3:{
    flexDirection:'row',
}    ,
text:{
marginVertical:adaptToHeight(0.02),
fontFamily:'Montserrat',
fontSize:18,
textAlign:'center',
width:adaptToWidth(0.3)
},
text3:{
  marginVertical:adaptToHeight(0.01),
  fontFamily:'Montserrat',
  fontSize:17,
  textAlign:'center',
  width:adaptToWidth(0.3) ,
  
 
  }
})
export default HomeScreenMalade