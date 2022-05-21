import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView} from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import colors from '../../config/colors'
import { useEffect,useState } from 'react'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'

const CodeMalade = (props) => {
  const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from(
    { length: 8 },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  );
 


  const randomString = randomArray.join("");
  const [input, setInput]=useState('') ;
  const [qrValue,setQrValue]=useState('') ;


  return (
    <SafeAreaView style={styles.back}>
      <View style={{marginVertical: adaptToHeight(0.05), alignItems:'center', flex:0.2}}>
      <Text style={styles.text}>Aide-Mémoire</Text>
      </View>
      <View style={{marginVertical:adaptToHeight(0.05) , alignItems:'center'}}>
      <Text style={styles.text2}>Votre code QR est :</Text>
      </View>
      <View style={{alignItems:'center' , justifyContent:'center' , }} >
      <QRCode
      value={qrValue ?qrValue :'code malade'}
      size={adaptToHeight(0.3)}
      color='white'
      backgroundColor='black'
     ></QRCode>
      <Text style={styles.text3}>Scannez-le avec le téléphone du malade ou connectez-vous manuellement en utilisant votre code unique :</Text>
       
      <Text style={styles.text4} on changeText={(text)=>(setInput(props.text)) } onPress = {() => props.navigation.navigate('Connection')}  >{randomArray}</Text>
     
    </View></SafeAreaView>
  )
}
const styles = StyleSheet.create({
 text: {
    fontSize: 48,
    
    letterSpacing:adaptToWidth(0.001),
    fontFamily:'Lobster',
    color: colors.purple ,
    alignItems : 'center' ,
      justifyContent: 'flex-start',
     
    
  },
  text3: {
    fontSize: 15
    ,marginVertical:adaptToHeight(0.025) ,
    letterSpacing: adaptToWidth(0.001),
    fontFamily:'Montserrat',
    color: colors.black ,
    alignItems : 'center' ,
    justifyContent: 'center',
    textAlign:'center' ,  },
  text2: {
    fontSize: 25,
    letterSpacing: adaptToWidth(0.001),
    fontFamily:'Montserrat',
    color: colors.black ,
    alignItems : 'center' ,
    justifyContent: 'center'
 } ,
 text4: {
    
  fontWeight: 'bold',
  color:'red' ,
  fontSize: 20,
},
  back:{
    backgroundColor: colors.primary ,
   flex:1
  }
});

export default CodeMalade
