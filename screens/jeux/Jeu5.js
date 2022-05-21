import { StyleSheet, Text, View,SafeAreaView,Image, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import { adaptToHeight, adaptToWidth } from '../../config/Demensions';
import ModalPoupSucess from '../../components/ModalPoupSucess';
import ModalPoupFail from '../../components/ModalPoupFail';
import Route from '../../navigation/Route';
import FloatingButton2 from '../../components/FloatingButton2';
import FloatingButton from '../../components/FloatingButton';


const Jeu5 = (props) => {

const [visible, setVisible] = React.useState(false);
const [visible2, setVisible2] = React.useState(false);
  return (
    <SafeAreaView style={{flex:1, alignItems:'center', backgroundColor:colors.primary}}>
      <View style={{ alignItems:'flex-start' , flex:0.1,width:adaptToWidth(0.9)
             , justifyContent:'center', flexDirection:'column ', paddingBottom:adaptToHeight(0.0002)}}>
      <FloatingButton2 navigation={props.navigation} />
      <Text style={styles.title}>Jeux</Text>
      <FloatingButton navigation={props.navigation} /></View>
      <View style={{flex:0.8, width:adaptToWidth(1)}}>
          <ScrollView contentContainerStyle={{alignItems:'center'}}>
          <View style={{width:adaptToWidth(0.9),height:adaptToHeight(0.4), justifyContent:'center', alignItems:'center', borderWidth:1}} >
<Text style={{fontFamily:'Montserrat', fontSize:60}}>Bleu</Text>
          </View>
<Text style={{fontFamily:'Montserrat', fontSize:20, textAlign:'center', paddingTop:adaptToHeight(0.05)}}>Veuillez choisir la bonne réponse</Text>
<View style={{flexDirection:'row', justifyContent:'space-around', width:adaptToWidth(0.99), marginTop:adaptToHeight(0.07)}}>
<TouchableOpacity 
style={{height:adaptToHeight(0.1), width:adaptToWidth(0.3),marginVertical:adaptToHeight(0.01),
 backgroundColor:'white', alignItems:'center', justifyContent:'center', borderWidth:1, borderRadius:50}}
 onPress={() => setVisible2(true)}>
</TouchableOpacity>

<ModalPoupSucess visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
              <TouchableOpacity navigation={props.navigation}  onPress = {() => props.navigation.navigate(Route.HOME_MALADE)}>
                  <Image
                source={require('../../assets/x.png')}
                style={{height: 30, width: 30}}
              />
              </TouchableOpacity>
              </View>
              </View>
              <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/games.png')}
            style={{height: 150, width: 150, marginVertical: 10, resizeMode:'contain'}}/>
        </View>
        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}> Merci d'avoir joué, veuillez revenir demain pour vos parties quotidiennes
        </Text>
      </ModalPoupSucess>


      <ModalPoupFail visible={visible2}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
              <TouchableOpacity navigation={props.navigation}  onPress={() => setVisible2(false)}>
                  <Image
                source={require('../../assets/x.png')}
                style={{height: 30, width: 30}}
              />
              </TouchableOpacity>
              </View>
              </View>
              <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/Fail.png')}
            style={{height: 150, width: 150, marginVertical: 10, resizeMode:'contain'}}/>
        </View>
        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}> Réessayez encore, vous y êtes presque
        </Text>
      </ModalPoupFail>
      

<TouchableOpacity 
style={{height:adaptToHeight(0.1), width:adaptToWidth(0.3),marginVertical:adaptToHeight(0.01),
 backgroundColor:'blue', alignItems:'center', justifyContent:'center', borderWidth:1, borderRadius:50}}
 onPress={() => setVisible(true)}>

</TouchableOpacity>

<TouchableOpacity 
style={{height:adaptToHeight(0.1), width:adaptToWidth(0.3),marginVertical:adaptToHeight(0.01),
 backgroundColor:colors.pastelLightPink, alignItems:'center', justifyContent:'center', borderWidth:1, borderRadius:50}}
 onPress={() => setVisible2(true)}>
</TouchableOpacity>
</View>

     </ScrollView></View></SafeAreaView>
)
}

export default Jeu5

const styles = StyleSheet.create({
    title:{
      fontFamily:'Lobster',
      fontSize:52,
      color:colors.black , 
      justifyContent:'center' , 
      alignItems:'center',
      paddingLeft:adaptToWidth(0.3)
     },
    
    titleContainer:{
        flex:0.15,
        alignItems: "center",
        justifyContent:'flex-end'
    },
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
      },
      header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
})