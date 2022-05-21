import { StyleSheet, Text, View, ScrollView,SafeAreaView,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'
import Ionicons from "@expo/vector-icons/Ionicons"
import {Picker} from '@react-native-picker/picker';

const GP1 = (props) => {
    const [selectedStade, setSelectedStade] = useState();
    const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow1, setShouldShow1] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  return (
    <SafeAreaView style={{flex:1, alignItems:'center', backgroundColor:colors.primary}}>
      <View style={{justifyContent:'flex-end', flex:0.12}}>
          <Text style={{fontFamily:'Lobster', fontSize:40}}>Gérer les profils</Text>
          </View>
      <View style={{flexDirection:'row', justifyContent:'space-evenly', flex:0.18, width:adaptToWidth(0.8)}}>
        <TouchableOpacity style={{flexDirection:'column', alignItems:'center'}}  onPress = {() => props.navigation.navigate('GP1')}>
            <Ionicons name={'medkit'} style={{color:colors.black}} size={adaptToHeight(0.08)} />
            <Text style={{fontFamily:'Montserrat', fontSize:15, width:adaptToWidth(0.3), textAlign:'center'}}>Profil du Patient</Text></TouchableOpacity>
        <TouchableOpacity  onPress = {() => props.navigation.navigate('GP2')}><Ionicons name={'person'} style={{color:colors.black, opacity:0.5}} size={adaptToHeight(0.08)} /></TouchableOpacity>
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
            paddingLeft:adaptToWidth(0.04)}} keyboardType={'phone-pad'} placeholder='Numero de téléphone du patient' />
            </View>
            <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <Text style={{fontFamily:'Montserrat',fontSize:18,width:adaptToWidth(0.7),
             paddingLeft:adaptToWidth(0.04), opacity:0.4}}>Localisation enregistrée</Text>
            </View>
            <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:15, width:adaptToWidth(0.8), paddingLeft:adaptToWidth(0.04)}}
                placeholder="Contact Médecin en cas d'urgence" keyboardType={'phone-pad'} />
            </View>
            <View style={{backgroundColor:colors.pinkLight, borderRadius:12,
                 height:adaptToHeight(0.08), width:adaptToWidth(0.7),
                 marginVertical:adaptToHeight(0.015), justifyContent:'center'}}>
           <Picker
  selectedValue={selectedStade}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedStade(itemValue)}
    itemStyle={{ backgroundColor: "Black", fontFamily:"Montserrat", fontSize:17 }} >
  <Picker.Item label="Stade 2" value="s2" />
  <Picker.Item label="Stade 3" value="s3" />
  <Picker.Item label="Stade 4" value="s4" />
  <Picker.Item label="Stade 5" value="s5" />
</Picker>
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
        <TouchableOpacity style={{backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50,marginVertical:adaptToHeight(0.015), elevation:8, width:adaptToWidth(0.8)}} 
        onPress={() => setShouldShow(!shouldShow)}>
            <Text style={{fontFamily:'Montserrat', fontSize:17, alignSelf:'center', padding:adaptToHeight(0.02)}}>Proche 2</Text>
            {shouldShow ? (
          <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'center', marginTop:adaptToHeight(0.04), marginBottom:adaptToHeight(0.04), borderTopWidth:1}}>
        <TouchableOpacity>
        <Text style={{fontFamily:'Roboto-Bold', fontSize:15, width:adaptToWidth(0.33), textAlign:'center' }} >Supprimer de la liste des proches</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{fontFamily:'Roboto-Bold', fontSize:15, width:adaptToWidth(0.33), textAlign:'center'}}  >Définir comme proche admin</Text>
        </TouchableOpacity>
        </View>
        ) : null}
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:colors.greyLighter,borderWidth:1,marginVertical:adaptToHeight(0.015), borderRadius:50, elevation:8, width:adaptToWidth(0.8)}}
             onPress={() => setShouldShow1(!shouldShow1)}>
            <Text style={{fontFamily:'Montserrat', fontSize:17, alignSelf:'center', padding:adaptToHeight(0.02)}}>Proche 3</Text>
                {shouldShow1 ? (
        <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'center', marginTop:adaptToHeight(0.04), marginBottom:adaptToHeight(0.04), borderTopWidth:1}}>
        <TouchableOpacity>
        <Text style={{fontFamily:'Roboto-Bold', fontSize:15, width:adaptToWidth(0.33), textAlign:'center' }} >Supprimer de la liste des proches</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{fontFamily:'Roboto-Bold', fontSize:15, width:adaptToWidth(0.33), textAlign:'center'}}  >Définir comme proche admin</Text>
        </TouchableOpacity>
        </View>
        ) : null}
        </TouchableOpacity>
        <TouchableOpacity style={{ width:adaptToWidth(0.8),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8}} 
             onPress={() => setShouldShow2(!shouldShow2)}>
        <Text style={{fontFamily:'Montserrat', fontSize:17, alignSelf:'center', padding:adaptToHeight(0.02)}}>Ajouter un proche</Text>
            {shouldShow2 ? (
        <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'center',
         marginTop:adaptToHeight(0.04), marginBottom:adaptToHeight(0.02), borderTopWidth:1}}>
        <TouchableOpacity>
        <Text style={{fontFamily:'Roboto-Bold', fontSize:20, width:adaptToWidth(0.2), textAlign:'center'}} >Code Unique</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontFamily:'Roboto-Bold', fontSize:20, paddingTop:adaptToHeight(0.009)}}  >QR Code</Text>
        <Ionicons
          name="qr-code-outline"
          style={{color:colors.grey}}
          size={adaptToHeight(0.05)}
        /> 
        </TouchableOpacity>
        </View>
        ) : null}
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:colors.yesGreen, marginVertical:adaptToHeight(0.015),
            height:adaptToHeight(0.07), width:adaptToWidth(0.7), borderWidth:0.5, borderColor:'white', elevation:8, borderRadius:50, justifyContent:'center', alignItems:'center'}}
            onPress = {() => props.navigation.navigate('GP2')}>
         <Text style={{fontFamily:'Montserrat', fontSize:25, color:'white'}}>Enregistrer</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress = {() => props.navigation.navigate('Home_proche')}>
         <Text style={{fontSize:15, fontFamily:'Roboto', paddingBottom:adaptToHeight(0.006)}}>Passer</Text>
    </TouchableOpacity>
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default GP1

const styles = StyleSheet.create({})