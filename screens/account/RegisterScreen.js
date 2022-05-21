import { StyleSheet, Text, View ,ScrollView,SafeAreaView,TouchableOpacity, Image} from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import Button from '../../components/Button'
import Input from '../../components/input'
import Display from '../../components/Display'
import {Picker} from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Ionicons from "@expo/vector-icons/Ionicons";
import {adaptToHeight, adaptToWidth} from "../../config/Demensions"

const RegisterScreen = (props) => {
    const [selectedStade, setSelectedStade] = useState();
  return (
    <SafeAreaView style={{flexDirection:'column', flex:1}}>
    <View style={{flex:0.4,
       alignItems: "center",
       backgroundColor: colors.primary,
       borderBottomColor:'black', borderBottomWidth:0.7, justifyContent:'flex-end'}}>
         
     <Image style={{width:adaptToWidth(0.5),height:adaptToHeight(0.23), marginTop:adaptToHeight(0.06), resizeMode:'stretch'}} 
     source={require('../../assets/logo.png')} />
      <Text style={{fontFamily:"Lobster",padding:adaptToHeight(0.01), fontSize:30, color:colors.purple}}>Aide-Mémoire</Text>
     <Text style={{fontFamily:"Lobster", padding:adaptToHeight(0.01), fontSize:15}}>Vos biens aimés, en pleine sécurité </Text>
    
     <View style={{ width:adaptToWidth(0.9),flexDirection:'row', justifyContent:'space-around'}}>
         <TouchableOpacity style={{alignItems:'center'}}  onPress = {() => props.navigation.navigate('Register_malade')}>
         <Text style={{fontFamily:'Montserrat-Bold',fontSize:17, color:colors.purple }} >S'inscrire</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{alignItems:'center'}}  onPress = {() => props.navigation.navigate('Login_malade')}>
             <Text style={{fontFamily:'Montserrat-Bold', fontSize:17, color:colors.black }} >Se connecter</Text> 
         </TouchableOpacity>
         </View>
         </View>



         <View style={{justifyContent:'flex-start', alignItems:'center',flex:0.55}}>
         <ScrollView  contentContainerStyle={{alignItems:'center'}}  > 
             <Text style={{fontFamily:'Roboto-Bold', fontSize:20, color:'black', paddingTop:adaptToHeight(0.02)}}>Veuillez entrer vos informations:</Text>
     
     <Input icon="md-person" placeholder="Nom d'utilisateur" />
          <Input icon="md-mail" placeholder="Email" />
          <Input icon="lock-closed-outline" placeholder="Mot de passe"/>
          <Input icon="lock-closed" placeholder="Confirmer le mot de passe" />
          <Display icon="md-location" label="location"/>
          <Input icon="md-call" placeholder="Contact Médecin"/>
         <View><Text style={styles.textStyle3}>Stade de Maladie</Text>
         <View style={{backgroundColor:"#ddd", borderRadius:12}}>
           <Picker
  selectedValue={selectedStade}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedStade(itemValue)}
    itemStyle={{ backgroundColor: "Black", color: "blue", fontFamily:"Montserrat", fontSize:17 }} >
  <Picker.Item label="Stade 2" value="s2" />
  <Picker.Item label="Stade 3" value="s3" />
  <Picker.Item label="Stade 4" value="s4" />
  <Picker.Item label="Stade 5" value="s5" />
</Picker></View>
       <Text style={styles.textStyle3}>Attachez une photo du Patient </Text>
          <View style={{alignItems:'center', marginVertical:adaptToHeight(0.06)}}>
            <TouchableOpacity
           style={{width:adaptToWidth(0.55),height:adaptToHeight(0.25), backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
              <Ionicons
          name="add-outline"
          style={{color:colors.grey}}
          size={adaptToHeight(0.2)}
        /> 
        </TouchableOpacity></View>
        </View> 
        <View style={{padding:adaptToHeight(0.01)}}>
        <BouncyCheckbox
  size={adaptToHeight(0.02)}
  fillColor='#8E0798'
  unfillColor="white"
  text="J'accepte les termes et les conditions d'utilisation"
  iconStyle={{ borderColor: colors.purple  }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:15  }}
  onPress={(isChecked) => {}}
  style={{}}
  
/>

        </View>
        <TouchableOpacity 
        style={{marginBottom:adaptToHeight(0.08),
           width:adaptToWidth(0.5),
            height:adaptToHeight(0.06),
             backgroundColor:colors.yesGreen,
              borderRadius:15, 
              alignItems:'center', 
              justifyContent:'center',
              borderWidth:1,
               borderColor:'white' ,
               marginTop:adaptToHeight(0.03)}} 
        onPress = {() => props.navigation.navigate('Scan_code')}>
          <Text style={{color:'white', fontFamily:'Roboto-Bold', fontSize:20}}>Confirmer</Text></TouchableOpacity>
         
   </ScrollView>
   </View>
   </SafeAreaView>
   
   
  )
}



const styles = StyleSheet.create({  
  textStyle3:{
    textAlign:'center',
    fontSize:20,
    color: colors.black,
    fontFamily:'Montserrat'
    
},
 
})
 

export default RegisterScreen
