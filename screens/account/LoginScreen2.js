import { StyleSheet, Text, View , Button,SafeAreaView} from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import AppButton from '../../components/AppButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from "@expo/vector-icons/Ionicons"
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'



const LoginScreen2 = (props) => {
  return (
  <SafeAreaView style={styles.back} >

<View style={{marginVertical:adaptToHeight(0.06) , alignItems:'center', justifyContent:'center', flex:0.2}}>
  <Text style={styles.text}>Aide-Mémoire</Text>
  </View>

  <View style={{marginVertical:adaptToHeight(0.04) , alignItems:'center'}}>
  <Text style={styles.text2}>Créer votre profil</Text>
  </View>
  <View style={{marginVertical:adaptToHeight(0.015) , alignItems:'center'}}>
 
 <TouchableOpacity style={styles.button1}><Ionicons name={"logo-google"}  style={{color:'#B22222'}} size={adaptToWidth(0.06)}/>
 <Text style={{fontFamily:'Montserrat',fontWeight: 'bold'}}> S'INSCRIRE AVEC GOOGLE</Text>
 </TouchableOpacity>
 </View>

  <View style={{marginVertical:adaptToHeight(0.015) , alignItems:'center'}}>
 
  <TouchableOpacity style={styles.button2}><Ionicons name={"logo-facebook"}   style={{color:colors.white}} size={adaptToWidth(0.06)}/>
  <Text style={{fontFamily:'Montserrat',fontWeight: 'bold', color:colors.white}}> S'INSCRIRE AVEC FACEBOOK</Text>
  </TouchableOpacity>
  </View>
  
  <View style={{marginVertical:adaptToHeight(0.015), alignItems:'center'}}>
 
 <TouchableOpacity style={styles.button3}><Ionicons name={"mail-outline"}  size={adaptToWidth(0.065)}/>
 <Text style={{fontFamily:'Montserrat',fontWeight: 'bold' }}> S'INSCRIRE AVEC EMAIL</Text>
 </TouchableOpacity>
 </View>
  <View>
    <TouchableOpacity style={{flexDirection:'row' , alignItems: 'center',justifyContent:'center',marginVertical:adaptToHeight(0.015)}}>
  <Text style={styles.text4}>Vous avez déjà un compte?</Text>
  <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={styles.text5}>
    <Text style={styles.text5}>Se connecter</Text>
  </TouchableOpacity></TouchableOpacity>
   </View>
  </SafeAreaView> 
  )}


 

const styles = StyleSheet.create({
  button1: {
    elevation: 8,
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingVertical: adaptToHeight(0.01),
    paddingHorizontal: adaptToWidth(0.04) ,
    flexDirection:'row',
    fontFamily:'Montserrat',
    fontWeight: 'bold',
    flexDirection:'row',
    width:adaptToWidth(0.9),
    height:adaptToHeight(0.065),
    alignItems:'center',
    justifyContent:'center'
  },
  button2: {
    elevation: 8,
    backgroundColor: '#1778F2',
    borderRadius: 30,
    paddingVertical: adaptToHeight(0.01),
    paddingHorizontal: adaptToWidth(0.04) ,
    flexDirection:'row',
    fontFamily:'Montserrat',
    fontWeight: 'bold',
    width:adaptToWidth(0.9),
    height:adaptToHeight(0.065),
    alignItems:'center',
    justifyContent:'center',
    color:'white'
  },
  button3: {
     elevation: 8,
    borderRadius: 30,
    paddingVertical: adaptToHeight(0.01),
    paddingHorizontal: adaptToWidth(0.04) ,
    flexDirection:'row',
    fontFamily:'Montserrat',
    fontWeight: 'bold',
    backgroundColor:colors.white,
    width:adaptToWidth(0.9),
    height:adaptToHeight(0.065),
    alignItems:'center',
    justifyContent:'center'
  },
  text2: {
    fontSize: 40,
    letterSpacing: 0.25,
    fontFamily:'Montserrat-Bold',
    color: colors.black ,
    
 } ,
 text: {
  fontSize: 48,
  letterSpacing: adaptToWidth(0.005),
  fontFamily:'Lobster',
  color: colors.purple 
},
 text3: {
    
    fontWeight: 'bold',
    color:'red',
    
 } ,
 text4: {
    
    fontWeight: 'bold',
    color: colors.black ,

    
 } ,
 text5: {
    
    fontWeight: 'bold',
    color: '#B22222' ,
  
    
 } ,
  back:{
    backgroundColor: colors.primary,
   flex:1

  },
  
});
export default LoginScreen2