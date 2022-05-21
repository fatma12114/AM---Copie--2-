import { StyleSheet, Text, View,Image,StatusBar , TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../../config/colors'
import { adaptToHeight , adaptToWidth } from '../../config/Demensions'
import { SafeAreaView } from 'react-native-safe-area-context'
import FloatingButton from '../../components/FloatingButton'
const DiaryScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      
    <View style={{height:adaptToHeight(0.1) ,alignItems:'flex-start' , flex:0.2 ,width:adaptToWidth(0.9)
             , justifyContent:'center'}}>
    <Text style={styles.title}>Diary</Text>
    <FloatingButton navigation={props.navigation} />
    </View>
    <View  style={{ flex:0.8,alignItems: "center", justifyContent: "center", flexDirection:'row'}}>
        <Text style={{fontSize: 25,fontFamily:'Montserrat-Bold',color:colors.black, width:adaptToWidth(0.75), height:adaptToHeight(0.2), textAlign:'center'}} numberOfLines={4}>Vous pouvez écrire tous ce qui vous vient dans l'esprit dans cet espace</Text>
        </View>
 
    <View style={{flex:0.5 , alignItems:'center',paddingBottom:adaptToHeight(0.19) }}>
     <TouchableOpacity style={{ width:adaptToWidth(0.70),height:adaptToHeight(0.075),backgroundColor:colors.yellow,  borderRadius:30, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white' }}
     onPress = {() => props.navigation.navigate('List')}>
           <Text  style={{fontSize: 25,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.white}}>Accédez à vos notes</Text>
                    </TouchableOpacity> 
    </View>
    </SafeAreaView>
  )
}

export default DiaryScreen

const styles = StyleSheet.create({
    title:{
        alignItems:'flex-start',
        fontFamily:'Lobster',
        fontSize:48,
        color:colors.black },
    titleContainer:{
     
        
            backgroundColor: colors.primary,
            
    },
    container: {
        
        backgroundColor: colors.primary,
        borderWidth: 0.5,
        justifyContent:'center',
        alignItems:'center',
        
        flex:1
      
        
      } ,
      titleContainer:{
        flex:0.35,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginRight:adaptToWidth(0.6),

              backgroundColor: colors.primary,}
      
        
 
})