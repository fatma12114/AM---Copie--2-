import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react' ;
import MapView , { Callout, Marker}  from 'react-native-maps';
import * as Location from 'expo-location';
import colors from '../../config/colors';
import { adaptToHeight,adaptToWidth } from '../../config/Demensions';
const Localisation = (props) => {
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
        <View style={styles.container}>
              <View style={{flex:0.15}} ><Text style={styles.title}> Localiser mon malade </Text></View>
          
  
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



          </MapView>
          <View style={{flex:0.15}}></View>
  
         
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      map: {
        width: adaptToWidth(0.95),
        height:adaptToHeight(0.56),
        borderRadius: 200,
        flex:0.55
      },
      title:{
        alignItems:'flex-start',
        fontFamily:'Lobster',
        fontSize:40,
        color:colors.black },
        
    });
export default Localisation

