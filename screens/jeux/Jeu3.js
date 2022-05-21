import { StyleSheet, Text, View,SafeAreaView,Image, TouchableOpacity,ScrollView,TextInput } from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import { adaptToHeight, adaptToWidth } from '../../config/Demensions';
import ModalPoupSucess from '../../components/ModalPoupSucess';
import ModalPoupFail from '../../components/ModalPoupFail';
import { checkWarningFilter } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import FloatingButton2 from '../../components/FloatingButton2';
import FloatingButton from '../../components/FloatingButton';


const Jeu3 = (props) => {
const [text, setText] = useState('');
const [visible, setVisible] = React.useState(false);
const [visible2, setVisible2] = React.useState(false);
const [correct,setCorrect]= React.useState(false);

const check = () => {
    if (text=='Alia') {
        setVisible(true)
        setCorrect(true)
    } else {
        setCorrect(false)
        setVisible2(true)
    };
}
  return (
    <SafeAreaView style={{flex:1, alignItems:'center', backgroundColor:colors.primary}}>
        <View style={{ alignItems:'flex-start' , flex:0.1,width:adaptToWidth(0.9)
             , justifyContent:'center', flexDirection:'column ', paddingBottom:adaptToHeight(0.0002)}}>
      <FloatingButton2 navigation={props.navigation} />
      <Text style={styles.title}>Jeux</Text>
      <FloatingButton navigation={props.navigation} /></View>
      <View style={{flex:0.8, width:adaptToWidth(1)}}>
          <ScrollView contentContainerStyle={{alignItems:'center'}}>
      <View style={{flex:0.3}}>
          <Image style={{width:adaptToWidth(0.9),height:adaptToHeight(0.4) , resizeMode:'contain'} }
      source={require('../../assets/Wife.jpg')} /></View>
<Text style={{fontFamily:'Montserrat', fontSize:20, textAlign:'center',
 paddingBottom:adaptToHeight(0.01), width:adaptToWidth(0.92),paddingVertical:adaptToHeight(0.03)}}>Comment s'appelle cette femme? Veuillez écrire la bonne réponse</Text>

<View 
style={{height:adaptToHeight(0.07), width:adaptToWidth(0.8),marginVertical:adaptToHeight(0.01),
 backgroundColor:colors.pastelLightPink, alignItems:'center', justifyContent:'center', borderWidth:1, borderRadius:50}}>
<TextInput style={{fontFamily:'Montserrat', fontSize:20, alignSelf:'center', width:adaptToWidth(0.4)}} placeholder='la réponse est' onChangeText={newText => setText(newText)}
        defaultValue={text} />
</View>


<TouchableOpacity style={{width:adaptToWidth(0.5), height:adaptToHeight(0.08),
    backgroundColor:colors.yesGreen, marginVertical:adaptToHeight(0.05), alignItems:'center', justifyContent:'center'
    ,borderColor:'white', borderWidth:1, borderRadius:50}} onPress={()=>check()}>

<Text style={{fontFamily:'Montserrat', color:'white', fontSize:25, position:'absolute'}}>Vérifier</Text>
</TouchableOpacity>

<ModalPoupSucess visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
              <TouchableOpacity navigation={props.navigation}  onPress = {() => props.navigation.navigate('Jeu4')}>
                  <Image
                source={require('../../assets/x.png')}
                style={{height: 30, width: 30}}
              />
              </TouchableOpacity>
              </View>
              </View>
              <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/success.png')}
            style={{height: 150, width: 150, marginVertical: 10, resizeMode:'contain'}}/>
        </View>
        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}> Très bien, votre réponse est correcte
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



     </ScrollView></View></SafeAreaView>
)
}

export default Jeu3

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