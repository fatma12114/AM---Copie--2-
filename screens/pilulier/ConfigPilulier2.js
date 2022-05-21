import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity , ScrollView} from 'react-native'
import React ,{ useState }from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'

const ConfigPilulier2 = (props) => {
  const [Semaine, setSemaine] = useState();
  const [Jour1,setJour1]=useState();
  const [numMois,setNumMois]=useState();
  const [Jour2,setJour2]=useState();
  const [Jour3,setJour3]=useState();
  const [Jour4,setJour4]=useState();
  const [Jour5,setJour5]=useState();
  const [Jour6,setJour6]=useState();
  const [Jour7,setJour7]=useState();
  return (
   
<SafeAreaView style={styles.container}>
<View style={styles.titleContainer}><Text style={styles.title}>Traitement et Pilulier</Text></View>

<View style={{justifyContent:'space-around', flexDirection:'row',flex:0.1 }}>
  <TouchableOpacity>
  <Ionicons name={"caret-back-outline"}
          style={{ color: colors.black }}
          size={adaptToHeight(0.04)} />
  </TouchableOpacity>
  <View style={{width:adaptToWidth(0.7), height:adaptToHeight(0.04), justifyContent:'center', alignItems:'center'}}>
<Text style={{fontFamily:'Montserrat-Bold',fontSize:20}}>Semaine{Semaine}</Text>
  </View>
  <TouchableOpacity>
  <Ionicons name={"caret-forward-outline"}
          style={{ color: colors.black }}
          size={adaptToHeight(0.04)} />
  </TouchableOpacity>
  </View>  
      
      <View style={{flexDirection:'row', flex:0.1, marginTop:10}}>
  <TouchableOpacity style={{borderWidth:1.5,width:adaptToWidth(0.115),height:adaptToHeight(0.055),borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:adaptToHeight(0.007), justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'Roboto'}}>{Jour1}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:adaptToWidth(0.115),height:adaptToHeight(0.055),borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:adaptToHeight(0.007), justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'Roboto'}}>{Jour2}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:adaptToWidth(0.115),height:adaptToHeight(0.055),borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:adaptToHeight(0.007), justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'Roboto'}}>{Jour3}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:adaptToWidth(0.115),height:adaptToHeight(0.055),borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:adaptToHeight(0.007), justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'Roboto'}}>{Jour4}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:adaptToWidth(0.115),height:adaptToHeight(0.055),borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:adaptToHeight(0.007), justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'Roboto'}}>{Jour5}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:adaptToWidth(0.115),height:adaptToHeight(0.055),borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:adaptToHeight(0.007), justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'Roboto'}}>{Jour6}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:adaptToWidth(0.115),height:adaptToHeight(0.055),borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:adaptToHeight(0.007), justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'Roboto'}}>{Jour7}.{numMois}</Text></TouchableOpacity>
</View> 
<View style={{flex:0.05}}></View>
<View style={{flex:0.08, alignItems:'flex-start', width:adaptToWidth(0.9)}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:18}}>Compartiments:</Text></View>
<View style={{flex:0.05}}></View>
<View style={{flexDirection:'row', flex:0.15, justifyContent: 'center', alignContent:'center'}}>
     <TouchableOpacity style={{color:colors.primary,width:adaptToWidth(0.23),height:adaptToHeight(0.13),borderColor:'black',borderWidth:1,borderTopLeftRadius:50,borderBottomLeftRadius:50, alignItems:'center', justifyContent:'center'}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Matin</Text></TouchableOpacity>
     <TouchableOpacity style={{color:colors.primary,width:adaptToWidth(0.23),height:adaptToHeight(0.13),borderColor:'black',borderWidth:1, alignItems:'center', justifyContent:'center'}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Midi</Text></TouchableOpacity>
     <TouchableOpacity style={{color:colors.primary,width:adaptToWidth(0.23),height:adaptToHeight(0.13),borderColor:'black',borderWidth:1, alignItems:'center', justifyContent:'center'}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Soir</Text></TouchableOpacity>
     <TouchableOpacity style={{color:colors.primary,width:adaptToWidth(0.23),height:adaptToHeight(0.13),borderColor:'black',borderWidth:1,borderTopRightRadius:50,borderBottomRightRadius:50, alignItems:'center', justifyContent:'center'}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Nuit</Text></TouchableOpacity>
   </View>   
   <View style={{flex:0.1}}></View>
   <View style={{width:adaptToWidth(0.8), borderColor:'black', borderWidth:2,flex:0.3}}></View>
   <View style={{flex:0.05}}></View>
   <View style={{alignItems:'center', justifyContent:'flex-start', flexDirection:'row'}}>
      <TouchableOpacity style={{justifyContent:'center', alignItems:'center', marginBottom:adaptToHeight(0.02)}}  onPress = {() => props.navigation.navigate('Pilulier3')} > 
      <Ionicons name={"add-circle-outline"} style={{ color: 'black', fontWeight:'300' }} size={adaptToHeight(0.07)}/>
      <Text style={styles.text}>Ajouter un Traitement</Text>
          </TouchableOpacity>
          
          </View> 
   
    </SafeAreaView>
  );
};

export default ConfigPilulier2

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    backgroundColor: colors.primary, flex:1
},
title:{
    textAlign: 'center',
    fontSize:40,
    color: 'black' ,
    fontFamily:'Lobster',
    justifyContent:'flex-start'
},
titleContainer:{
       
        alignItems: "center",
        backgroundColor: colors.primary,
        flex:0.2, justifyContent:'flex-end'
},
text:{
    fontFamily:'Roboto-Bold',
    fontSize:15, textAlign:'center'
    }
})
