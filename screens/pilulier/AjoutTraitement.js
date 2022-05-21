import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,TextInput,ScrollView,Image } from 'react-native'
import React,{useState} from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import CustomCalendarPicker from '../../components/CustomCalendarPicker'
import colors from '../../config/colors'
import { adaptToHeight,adaptToWidth, width } from '../../config/Demensions'
import Checkbox from 'expo-checkbox';


const AjoutTraitement = (props) => {
    const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow1, setShouldShow1] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  const [shouldShow3, setShouldShow3] = useState(false);
  return (
    <SafeAreaView style={{flex:1, alignItems:'center', backgroundColor:colors.primary}}>
      <View style={{flex:0.15, justifyContent:'flex-end', alignItems:'center'}}>
          <Text style={{fontFamily:'Lobster',fontSize:48,color:colors.purple}}>
Aide-Mémoire
          </Text>
          </View>
          <View style={{flex:0.15, justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontFamily:'Montserrat', fontSize:40,color:colors.black}}>
                  Ajouter un Traitement
              </Text>
          </View>
          <View style={{width:adaptToWidth(0.95),flex:0.68}}>
              <ScrollView style={{width:adaptToWidth(0.99)}} contentContainerStyle={{alignItems:'center'}} fadingEdgeLength={adaptToHeight(0.5)}>
                  
              <View style={{height:adaptToHeight(0.07), width:adaptToWidth(0.85),marginVertical:adaptToHeight(0.015),
             backgroundColor:colors.greyLighter,borderWidth:1, borderRadius:50, elevation:8,
              alignItems:'flex-start', justifyContent:'center'}}>
            <TextInput style={{fontFamily:'Montserrat', fontSize:18, width:adaptToWidth(0.7),
             paddingLeft:adaptToWidth(0.04)}} placeholder='Nom du Traitement' />
            </View>
            <View style={{width:adaptToWidth(1)}}>
                <Text style={{fontFamily:'Montserrat', fontSize:25, alignSelf:'flex-start', marginLeft:adaptToWidth(0.05)}}>Type:</Text>
                <BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Pilule"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {setShouldShow1(!shouldShow1)}}
  style={{ marginLeft:adaptToWidth(0.05)}} 
/>
{shouldShow1 ? (
          <View style={{justifyContent:'space-around', alignItems:'center', borderWidth:1}}>
        <Text style={{padding:adaptToHeight(0.03), fontFamily:'Montserrat', fontSize:18}}>Apparence:</Text>
        <View style={{flexDirection:'row', justifyContent:'space-evenly', width:adaptToWidth(0.8)}}>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <Image style={{width:adaptToWidth(0.2),height:adaptToHeight(0.1) ,justifyContent:'center',alignItems:'center', resizeMode:'stretch'} }
      source={require('../../assets/type1.png')} />
      <BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor={colors.primary}
  iconStyle={{ borderColor: colors.purple, marginLeft:adaptToWidth(0.05)}}
  onPress={(isChecked) => {}}
  style={{}} 
/>
      </View>
      <View style={{flexDirection:'column', alignItems:'center'}}>
        <Image style={{width:adaptToWidth(0.2),height:adaptToHeight(0.1) ,justifyContent:'center',alignItems:'center', resizeMode:'stretch'} }
      source={require('../../assets/type2.png')} />
      <BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor={colors.primary}
  iconStyle={{ borderColor: colors.purple , marginLeft:adaptToWidth(0.05)}}
  onPress={(isChecked) => {}}
  style={{}} 
/>
        
      </View>
      <View style={{alignItems:'center'}}>
        <Image style={{width:adaptToWidth(0.2),height:adaptToHeight(0.1) , resizeMode:'stretch'} }
      source={require('../../assets/type3.png')} />
      <BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor={colors.primary}
  iconStyle={{ borderColor: colors.purple , marginLeft:adaptToWidth(0.05)}}
  onPress={(isChecked) => {}}
  style={{}} 
/>
        </View>
         </View>
<Text style={{padding:adaptToHeight(0.03), fontFamily:'Montserrat', fontSize:18}}> Quantité:</Text>
<View style={{flexDirection:'row', height:adaptToHeight(0.1), justifyContent:'flex-start', width:adaptToWidth(0.7), alignItems:'center'}}>
  <View style={{backgroundColor:'white', height:adaptToHeight(0.05), width:adaptToWidth(0.1), borderWidth:0.5,}}>
    <TextInput keyboardType='number-pad'/>
  </View>
  <Text style={{paddingLeft:adaptToWidth(0.05), fontFamily:'Montserrat', fontSize:18}}>Pilule(s) par prise</Text>
</View>
         </View>
        ) : null}
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Sirop"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {setShouldShow(!shouldShow)}}
  style={{marginLeft:adaptToWidth(0.05)}} 
/>
{shouldShow ? (
<View style={{height:adaptToHeight(0.2), width:adaptToWidth(0.8), borderWidth:1, alignSelf:'center', justifyContent:'center'}}>
<Text style={{alignSelf:'center', fontFamily:'Montserrat', fontSize:18}}>Quantité</Text>
<View style={{flexDirection:'row', height:adaptToHeight(0.1), justifyContent:'flex-start', width:adaptToWidth(0.7), alignItems:'center'}}>
  <View style={{backgroundColor:'white', height:adaptToHeight(0.05), width:adaptToWidth(0.1), borderWidth:0.5, marginLeft:adaptToWidth(0.03)}}>
    <TextInput keyboardType='number-pad'/>
  </View>
  <Text style={{paddingLeft:adaptToWidth(0.05), fontFamily:'Montserrat', fontSize:18}}>Cuillère(s) par prise</Text>
</View>
</View>

):null}
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Injection"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{marginLeft:adaptToWidth(0.05)}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Pommade"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{marginLeft:adaptToWidth(0.05)}} 
/>
<Text style={{fontFamily:'Montserrat', fontSize:25, alignSelf:'flex-start', paddingTop:adaptToHeight(0.03), marginLeft:adaptToWidth(0.05)}}>à Utiliser:</Text>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Avant le repas"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{marginLeft:adaptToWidth(0.05)}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Après le repas"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{marginLeft:adaptToWidth(0.05)}} 
/>
<Text style={{fontFamily:'Montserrat', fontSize:25, alignSelf:'flex-start', paddingTop:adaptToHeight(0.03),marginLeft:adaptToWidth(0.05)}}>Traitement:</Text>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Répétitif"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {setShouldShow2(!shouldShow2)}}
  style={{marginLeft:adaptToWidth(0.05)}} 
/>
{shouldShow2 ? (
  <View style={{borderWidth:1}}>
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <View style={{justifyContent:'center', alignItems:'flex-start', flexDirection:'column'}}>
      <BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Tous les jours"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Lundi"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Mardi"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Mercredi"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
      </View>

      <View style={{justifyContent:'center', alignItems:'flex-start', flexDirection:'column'}}>
      <BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Jeudi"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Vendredi"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Samedi"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Dimanche"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/></View>
    </View>
<Text style={{fontFamily:'Montserrat', fontSize:17, alignSelf:'center', paddingVertical:adaptToHeight(0.03)}}> Horaires</Text>
<View style={{justifyContent:'center', alignItems:'flex-start', flexDirection:'column', paddingLeft:adaptToWidth(0.1), paddingBottom:adaptToHeight(0.02)}}>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Matin"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Midi"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Soir"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Nuit"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
</View>

  </View>
):null}

<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Durée Définie"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {setShouldShow3(!shouldShow3)}}
  style={{marginLeft:adaptToWidth(0.05)}} 
/>{shouldShow3 ? (
  <View style={{borderWidth:1, width:adaptToWidth(0.99)}}>
  <Text style={{fontFamily:'Montserrat', fontSize:17, alignSelf:'flex-start', paddingTop:adaptToHeight(0.03)}}>Durée:</Text>
  <View style={{marginRight:adaptToWidth(0.03)}}><CustomCalendarPicker  /></View>
  <Text style={{fontFamily:'Montserrat', fontSize:17, alignSelf:'center', paddingVertical:adaptToHeight(0.03)}}> Horaires</Text>
<View style={{justifyContent:'center', alignItems:'flex-start', flexDirection:'column', paddingLeft:adaptToWidth(0.1), paddingBottom:adaptToHeight(0.02)}}>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Matin"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Midi"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Soir"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Nuit"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto-Bold", textDecorationLine: "none", fontSize:15, paddingTop:adaptToHeight(0.02) ,color:colors.black  }}
  onPress={(isChecked) => {}}
  style={{}} 
/>
</View>
  </View>
  
):null}


            </View>
<TouchableOpacity style={{width:adaptToWidth(0.7),justifyContent:'center', alignItems:'center', alignSelf:'center', height:adaptToHeight(0.08), backgroundColor:colors.yesGreen, borderWidth:1, borderColor:'white', borderRadius:50, marginVertical:adaptToHeight(0.05)}} 
 onPress = {() => props.navigation.navigate('Pilulier3')}>
  <Text style={{color:'white', fontFamily:'Montserrat', fontSize:27}}>Ajouter</Text>
</TouchableOpacity>
              </ScrollView>
          </View>
    </SafeAreaView>
  )
}

export default AjoutTraitement

const styles = StyleSheet.create({})