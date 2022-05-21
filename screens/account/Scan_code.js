import { StyleSheet, Text, View,Image,StatusBar,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import colors from '../../config/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "@expo/vector-icons/Ionicons"
import input from '../../components/input';
import { adaptToHeight, adaptToWidth } from '../../config/Demensions';






const AjoutContacts = (props) => {
   
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView  style={{backgroundColor:colors.primary, alignItems:'center', flex:1}}>
       
       <View style={{flex:0.3}}><Text style={styles.textStyle}>Aide-Mémoire</Text></View> 
<View style={{flex:0.3}}>
    <Text style={{fontFamily:'Montserrat-Bold', fontSize:38, textAlign:'center'}}>Ajouter d'autres contacts d'urgence</Text>
    </View>
    <TouchableOpacity 
    style={{width:adaptToWidth(0.8),height:adaptToHeight(0.07), backgroundColor:colors.lightGrey, borderRadius:50, justifyContent:'center',alignItems:'center', flexDirection:'row'}}>
       
           <Ionicons
          name={'qr-code-outline'}
          size={30}
          style={{marginRight:adaptToWidth(0.05)}}
        />
        <Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Ouvrir la Camera</Text>
        </TouchableOpacity>
        <Text style={{fontFamily:'Montserrat-Bold', fontSize:34, textAlign:'center', paddingVertical:adaptToHeight(0.04)}}>OU</Text>
        <View style={{width:adaptToWidth(0.8),height:adaptToHeight(0.07), backgroundColor:colors.lightGrey, borderRadius:50, justifyContent:'center',alignItems:'flex-start'}}>
        <TextInput
        onChangeText={onChangeText}
        placeholder="Ajouter le code manuellement"
        style={{fontFamily:'Montserrat-Bold', fontSize:15, width:adaptToWidth(0.7), paddingLeft:adaptToWidth(0.06), flex :0.4}}
      />
      
        </View>
        <TouchableOpacity 
        style={{width:adaptToWidth(0.5),height:adaptToHeight(0.07), backgroundColor:colors.yesGreen, borderRadius:15, marginTop:adaptToHeight(0.03),
         alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}} onPress = {() => props.navigation.navigate('Home_malade')}>
          <Text style={{fontFamily:'Montserrat-Bold', fontSize: 25, color:colors.white}} >Ajouter</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default AjoutContacts

const styles = StyleSheet.create({
    
      textStyle:{
        textAlign: 'center',
        fontSize:48,
        color: colors.purple ,
        fontFamily:'Lobster',
        justifyContent:'center',}
})