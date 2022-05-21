import { StyleSheet, Text, View, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import * as React from 'react' ;
import MapView , { Callout, Marker, Circle}  from 'react-native-maps';
import * as Location from 'expo-location';
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'
import colors from '../../config/colors'
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const InfoAdd = (props) => {
    const [pin, setPin]= React.useState({
        latitude: 13.406 ,
         longitude: 123.3753 ,
      })
  
     React.useEffect(() => {
          (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              console.log('Permission to access location was denied');
              return;
            }
      
            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
            setPin({
              latitude:location.coords.latitude,
              longitude:location.coords.longitude,
            })
          })();
        }, []);
  return (
    <SafeAreaView style={{backgroundColor:colors.primary, flex:1, alignItems:'center'}}>
      <View style={{flex:0.15, justifyContent:'flex-end'}}>
          <Text style={{fontSize: 48,letterSpacing: adaptToWidth(0.005),fontFamily:'Lobster',color: colors.purple}}>
          Aide-Mémoire</Text></View>
          <View style={{ alignItems:'center', flex:0.1}}>
  <Text style={ {fontSize: 32,fontFamily:'Montserrat-Bold',color: colors.black, textAlign:'center' }}>
      Quelques informations additionelles</Text></View>

      <View style={{flex:0.7}}>
      <ScrollView fadingEdgeLength={adaptToHeight(0.5) } showsHorizontalScrollIndicator={true}>
      <Text style={{fontSize: 20,fontFamily:'Montserrat-Bold',color: colors.black, paddingTop:adaptToHeight(0.03) }}>
          Veulliez sélectionner les maladies dont a votre Proche :</Text>
<View style={{alignItems:'flex-start'}}>
  <BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Les maladies cardiovasculaires"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02), color:colors.greyDark }}
  onPress={(isChecked) => {}}
  style={{}}
  
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Les maladies rhumatologiques"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.greyDark  }}
  onPress={(isChecked) => {}}
  style={{}}
  
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Les maladies urologiques"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.greyDark  }}
  onPress={(isChecked) => {}}
  style={{}}
  
/>
<BouncyCheckbox
  size={adaptToHeight(0.025)}
  fillColor='#8E0798'
  unfillColor='white'
  text="Les maladies des yeux et des oreilles"
  iconStyle={{ borderColor: colors.purple, marginTop:adaptToHeight(0.02)  }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:20, paddingTop:adaptToHeight(0.02) ,color:colors.greyDark  }}
  onPress={(isChecked) => {}}
  style={{}}
  
/>
</View>
<Text style={{fontSize:17,fontFamily:'Montserrat-Bold',color: colors.black, paddingVertical:adaptToHeight(0.02) }}>
    Veuillez spécifier une zone géographique pour votre proche afin de vous notifier s'il en sort:</Text>

<MapView style={styles.map} 
         
       
          showsUserLocation={true}
          onUserLocationChange={(e)=>{
              console.log('onUserLocationChange',e.nativeEvent.coordinate) ;
              setPin({
                latitude:e.nativeEvent.coordinate.latitude,
                longitude:e.nativeEvent.longitude,
          });
        
        }}
          >
              <Marker
              
              coordinate={pin}  
              
              draggable={true}
              onDragStart={(e)=>{
               console.log("Drag start" , e.nativeEvent.coordinate);

              }}
              onDragEnd={(e)=>{
                console.log("Drag end" , e.nativeEvent.coordinate);  
                setPin({
                    latitude: e.nativeEvent.coordinate.latitude ,
                    longitude: e.nativeEvent.coordinate.longitude,
                })
              }}
              >
                 
                 
             </Marker>
             <Circle
                 center={pin}
                radius={70}
                
                
                   
             />


          </MapView>
          <TouchableOpacity style={{width:adaptToWidth(0.4),height:adaptToHeight(0.07), backgroundColor:colors.yesGreen, borderRadius:50, justifyContent:'center', alignItems:'center', marginTop:adaptToHeight(0.05), alignSelf:'center'}}
          onPress = {() => props.navigation.navigate('Home_proche')}>
            <Text style={{fontFamily:'Roboto-Bold', color:'white', fontSize:20, textAlign:'center'}}
          >Confirmer</Text></TouchableOpacity>
          </ScrollView>
          </View>
    </SafeAreaView>
  )
}

export default InfoAdd

const styles = StyleSheet.create({
    map: {
        width: adaptToWidth(0.95),
        height:adaptToHeight(0.56),
        borderRadius: 50,
        flex:0.55
      },
})