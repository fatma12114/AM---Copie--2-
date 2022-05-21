import { StyleSheet, Text, View,Image,StatusBar , TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../../config/colors'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'

const WelcomeScreen = (props) => {

  return (
   
       <View style={styles.container}>
       
      <Image style={{width:adaptToWidth(0.6),height:adaptToHeight(0.275) ,justifyContent:'center',alignItems:'center', resizeMode:'stretch'} }
      source={require('../../assets/logo.png')} />
      <View ><Text style={styles.textStyle}>Aide-Mémoire</Text></View> 
    <TouchableOpacity style={{ height:adaptToHeight(0.06),width:adaptToWidth(0.5),backgroundColor:colors.yesGreen, borderRadius:15, marginTop:adaptToHeight(0.04), alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}} 
    onPress = {() => props.navigation.navigate('Role')}>
           <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.white}}>COMMENCER</Text>
                    </TouchableOpacity>
                    <StatusBar style="auto" />
    </View>
  
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderWidth: 0.5,
        justifyContent:'center',
        alignItems:'center',
        flex:1
      
        
      } ,
      
      textStyle:{
        textAlign: 'center',
        fontSize:48,
        color: colors.purple ,
        fontFamily:'Lobster',
        padding:adaptToHeight(0.02),
        justifyContent:'flex-start',}
      
})