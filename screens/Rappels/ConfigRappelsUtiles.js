import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView ,TextInput,ScrollView} from 'react-native'
import React,{useState} from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import colors from '../../config/colors'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native'



const ConfigRappelsUtiles = (props) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text1, setText1] = useState("Selectionner l'heure");
    const [text2, setText2] = useState("Selectionner la date");
  
  
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
  setShow(Platform.OS==='ios');
  setShow(false);
    setDate(currentDate);
  
  let tempDate = new Date(currentDate);
   let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
let fDate = tempDate.getDate() +'/'+(tempDate.getMonth() +1)+'/'+tempDate.getFullYear();
  console.log(fTime,fDate)
 if (mode=='time'){ setText1(fTime)};

  if (mode=='date'){setText2(fDate)};
    };
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      setShow(true);
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
      
  
    };
  return (
    <SafeAreaView style={styles.container} >
    
      <View style={{flex:0.2, justifyContent:'center'}}><Text style={styles.title}>Rappels Utiles</Text></View>
<View style={{ width:'100%', flex:0.75}}>
      <ScrollView   contentContainerStyle={{alignItems:'center'}} > 
      <Text style={{fontFamily:"Montserrat-Bold", fontSize:30, textAlign:'center'}}>Ajouter un nouveau Rappel</Text>
      
      <View style={{alignItems:'center'}}>
    <View style={{backgroundColor:colors.lightGrey,width:350, height:75, justifyContent:'center', alignItems:'stretch', justifyContent:'center',borderColor:'black', borderWidth:1, borderRadius:30, margin:20 }}>
        <TextInput placeholder='Nom du Rappel' style={{fontFamily:'Montserrat-Bold', fontSize:25, margin:10 }}/>
    </View>
      <View style={{width:'90%', height:'30%', alignItems:'center', justifyContent:'center' }}>
      <TouchableOpacity style={{  backgroundColor:colors.lightGrey , margin:5, borderColor:'black', width:350, height:75,borderRadius:50, borderWidth:1, justifyContent:"center", alignItems:'center', margin:20 }} onPress={()=>showDatepicker()}>
      <Text style={{fontFamily:'Montserrat-Bold', fontSize:25, margin:10,}}>{text2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor:colors.lightGrey, margin:5, borderColor:'black',width:350, height:75, borderRadius:50, borderWidth:1, height:60, justifyContent:"center", alignItems:'center', margin:20 }} onPress={()=>showTimepicker()}>
              <Text style={{fontFamily:'Montserrat-Bold', fontSize:25, margin:10}}>{text1}</Text>
          </TouchableOpacity>
          { show &&  <DateTimePicker mode={mode} value={new Date()}  onChange={onChange} /> }
          </View>
          <View style={{width:'70%', alignItems:'flex-start', margin:20}}>
              <Text style={{fontFamily:'Roboto', fontSize:25 }}>Répétition:</Text>
      <BouncyCheckbox
  size={30}
  fillColor='#8E0798'
  unfillColor="#f7f2e2"
  text="Une seule fois"
  iconStyle={{ borderColor: colors.purple }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:25  }}
  onPress={(isChecked) => {}}
  style={{margin:10 }}
/>
<BouncyCheckbox
  size={30}
  fillColor='#8E0798'
  unfillColor="#f7f2e2"
  text="Chaque jour"
  iconStyle={{ borderColor: colors.purple }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:25  }}
  onPress={(isChecked) => {}}
  style={{margin:10 }}
/>
<BouncyCheckbox
  size={30}
  fillColor='#8E0798'
  unfillColor="#f7f2e2"
  text="Chaque semaine"
  iconStyle={{ borderColor: colors.purple }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:25  }}
  onPress={(isChecked) => {}}
  style={{margin:10}}
/>
<BouncyCheckbox
  size={30}
  fillColor='#8E0798'
  unfillColor="#f7f2e2"
  text="Chaque mois"
  iconStyle={{ borderColor: colors.purple }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:25 }}
  onPress={(isChecked) => {}}
  style={{margin:10 }}
/>
</View>
</View>

</ScrollView>

</View>
<View style={{justifyContent:'center', alignItems:'center',flex:0.15}}>
  <TouchableOpacity style={{backgroundColor:colors.yesGreen, borderRadius:50, width:200, height: 70, justifyContent:'center', alignItems:'center'}}>
  <Text style={{fontFamily:'Roboto-Bold', fontSize:25, color:'white'}} onPress = {() => props.navigation.navigate('Home_proche')} >
    Ajouter</Text>
  </TouchableOpacity>
  </View>
    </SafeAreaView>
  )
}

export default ConfigRappelsUtiles

const styles = StyleSheet.create({
    container: {
      
      alignItems: "center",
      backgroundColor: colors.primary,
      flex:1,
      
    
      },
  title:{
    alignItems:'flex-start',
    fontFamily:'Lobster',
    fontSize:48,
    color:colors.black,
alignItems:'center',
justifyContent:'center'
 },
 
  })