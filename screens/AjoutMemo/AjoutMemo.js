import React, { useState, useEffect  , useRef} from 'react';
import { Text, View, TouchableOpacity , StyleSheet , Alert , Image,ScrollView, SafeAreaView} from 'react-native';
import { Camera } from 'expo-camera';
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'
import FloatingButton from '../../components/FloatingButton'


const AjoutMemo = ({navigation}) => {
 
    const [hasPermission, setHasPermission] = useState(null);
    const [showCamera,setShowCamera]=useState(false) ;
    const [type, setType] = useState(Camera.Constants.Type.back);
   const [image,setImage]= useState(null);

   const cameraRef = useRef(null) ;
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
    if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
    const takePhoto= async ()=>{
  if (cameraRef) {
      console.log('in take picture') ;
      try {
          let photo = await cameraRef.current.takePictureAsync({
              allowEditing : true ,
              aspect:[4, 3],
              quality:1,
          })
          return photo;  
      } catch (e) {
          console.log(e) ;
      }
  }


    }
  
  
  
    return (
        <View style={{flex:1}}>
        { showCamera ?
        <Camera style={{flex:1}} type={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{color:"white", fontWeight:'bold'}}> Flip </Text>
             
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.button} 
            onPress={async ()=>{
             const r = await takePhoto() ;
             if (!r.cancelled) {
                setImage(r.uri)
             }
           
             setShowCamera(false) ;
             
             }}>
              <Text style={{color:"white", fontWeight:'bold'}}>Photo </Text>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} 
            onPress={async ()=>{
             
                setShowCamera(false) ;
             }}>
              <Text style={{color:"white", fontWeight:'bold'}}>CANCEL</Text>
             
            </TouchableOpacity>
          </View>
        </Camera> : (
            //WHEN THE CAMERA ISNT SHOWING
            









        <SafeAreaView style={styles.container}>
          <FloatingButton navigation={props.navigation} />
            <View 
            style={{height:adaptToHeight(0.1) ,alignItems:'flex-start' , flex:0.15 ,width:adaptToWidth(0.9)
             , justifyContent:'center'}}><Text style={styles.title}>Ajout Memories</Text></View>
             <View style={{flex:0.8}}>
<ScrollView>
<TouchableOpacity 
         style={{alignItems:'flex-start'
         , justifyContent:'flex-start'}} 
        onPress={()=>setShowCamera(true)}>
              <Ionicons name={'camera'} style={{color:colors.black}} size={adaptToHeight(0.15)}/>
             
            </TouchableOpacity>

            <View style={{alignItems:'flex-start'  , justifyContent:'flex-end'}}>
                <Text style={styles.title2}>Nouvelles photos
                  </Text></View>
            <View
            style={{ 
            justifyContent:'center' , 
            alignItems: 'center'}}>


                <View style={{marginRight:adaptToWidth(0.5), alignItems:'center'}}>
            {image && (
                <Image
                source={{uri:image}}
                style={{ width:adaptToWidth(0.3), height:adaptToHeight(0.15)}}
                />
            )}</View>
 <View style={{alignItems:'flex-start', alignSelf:'flex-start'  
 , justifyContent:'flex-end'}}><Text style={styles.title2}>Famille  </Text></View>
<View  style={{ flexDirection:"row", 
            alignSelf:'flex-start'}}>
        <Image style={{marginRight: adaptToWidth(0.02) , width:adaptToWidth(0.25), height:adaptToHeight(0.15)} }
       source={require('../../assets/1.jpg')} />
       <Image style={{ marginRight:adaptToWidth(0.02),width:adaptToWidth(0.25), height:adaptToHeight(0.15)} }
       source={require('../../assets/2.jpg')} /> 
        <Image style={{marginRight: adaptToWidth(0.01) ,width:adaptToWidth(0.25), height:adaptToHeight(0.15)} }
       source={require('../../assets/3.jpg')} /> 
          </View>
          <View  style={{ flexDirection:"row", 
            alignSelf:'flex-start'}}>
        <Image style={{marginTop:adaptToHeight(0.02) , marginRight: adaptToWidth(0.02) , width:adaptToWidth(0.25), height:adaptToHeight(0.15)} }
       source={require('../../assets/4.jpg')} />
       <Image style={{marginTop:adaptToHeight(0.02) ,  marginRight:adaptToWidth(0.02),width:adaptToWidth(0.25), height:adaptToHeight(0.15)} }
       source={require('../../assets/5.jpg')} /> 
     
          </View>
          <View style={{alignItems:'flex-start', alignSelf:'flex-start'  
 , justifyContent:'flex-end'}}><Text style={styles.title2}>Cuisine   </Text></View>
  <View  style={{ flexDirection:"row", 
            alignSelf:'flex-start'}}>
        <Image style={{marginTop:adaptToHeight(0.02) , marginRight: adaptToWidth(0.02) , width:adaptToWidth(0.25), height:adaptToHeight(0.15)} }
       source={require('../../assets/7.jpg')} />
       <Image style={{marginTop:adaptToHeight(0.02) ,  marginRight:adaptToWidth(0.02),width:adaptToWidth(0.25), height:adaptToHeight(0.15)} }
       source={require('../../assets/8.jpg')} /> 
     
          </View>
          <View style={{alignItems:'flex-start', alignSelf:'flex-start'  
 , justifyContent:'flex-end'}}><Text style={styles.title2}>Vues  </Text></View>
 <View  style={{ flexDirection:"row", 
            alignSelf:'flex-start'}}>
        <Image style={{marginTop:adaptToHeight(0.02) , marginRight: adaptToWidth(0.02) , width:adaptToWidth(0.25), height:adaptToHeight(0.15)} }
       source={require('../../assets/9.jpg')} />
       
     
          </View>

 
          </View>
          </ScrollView>
            </View>
            </SafeAreaView>
)}
      </View>
    );
        } 
        export default AjoutMemo


const styles = StyleSheet.create({
    container: {
        
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderWidth: 0.5,
        justifyContent:'center',
        alignItems:'center',
        
        flex:1
      
        
      } ,
      buttonTitle :{
      
      fontWeight :'bold' ,
      color:"white" ,
      },
      
      buttonContainer:{
    flex:1 ,
    backgroundColor:"transparent",
    flexDirection:'row',
   justifyContent:'space-around',
   paddingBottom:adaptToHeight(0.01)
   
          },
      button:{
         
         alignSelf: "flex-end" ,
         alignItems:'center',
      },
      container: {
       
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        flex:1 } ,
        title:{
           
            fontFamily:'Lobster',
            fontSize:48,
            color:colors.black,
            
        
} ,
title2:{
           
    fontFamily:'Montserrat-Bold',
    fontSize:20,
    color:colors.black,
    paddingBottom:adaptToHeight(0.02),
    paddingTop:adaptToHeight(0.02)
    

}
     
        
    
     
})