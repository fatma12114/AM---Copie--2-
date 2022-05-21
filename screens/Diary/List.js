import { StyleSheet, Text, View,Image,StatusBar , TouchableOpacity , SafeAreaView, ScrollView, FlatList,TouchableHighlight, BackHandler} from 'react-native'
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import colors from '../../config/colors'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'
import { useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import NoteItems from '../../components/NoteItems';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";


const List = () => {
    const navigation = useNavigation();
    const list = useSelector((state) => state.notes.list);
  
    useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", () => true);
    }, []);
  
    useLayoutEffect(() => {
      navigation.setOptions({
        title: "Vos Notes",
        headerLeft: false,
        headerRight: () => (
          <TouchableOpacity
            underlayColor="transparent"
            onPress={() => navigation.navigate("Edit")}
          >
            <Ionicons name={"add-circle-outline"}
          style={{ color: colors.black }}
          size={adaptToWidth(0.08)} />
          </TouchableOpacity>
        ),
      });
    }, []);
    const handleNotePress = (index) => {
        navigation.navigate("Edit", {
          key: index,
        });
      }

      
      return (
        <View style={styles.container}>
          {list.length > 0 && (
            <FlatList
            style={{width:adaptToWidth(0.99)}}
              data={list}
              renderItem={({ item, index }) => (
                <NoteItems data={item} index={index} onPress={handleNotePress} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
          {list.length === 0 && (
            <View
            style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                height:adaptToHeight(0.5),
                
                }}>
               <Ionicons name={"mail-open-outline"}
          style={{ color: colors.black  }}
          size={adaptToWidth(0.3)} />
              <Text style={{ fontFamily: "Roboto" , fontSize:20  }}>
              aucune annotation
              </Text>
            </View>
          )}
        </View> ) 
     
  

  
           
} 


export default List

const styles = StyleSheet.create({
    container: {
        
        alignItems: "center",
        backgroundColor: colors.primary, flex:1
    },
title:{
    alignItems:'flex-start',
    fontFamily:'Lobster',
    fontSize:48,
    color:colors.black },
titleContainer:{
  flex:0.5,
        alignItems: "center",
        backgroundColor: colors.primary,
        
},
container3:{
    flexDirection:'row',
}    ,
text:{
marginVertical:adaptToHeight(0.02),
fontFamily:'Montserrat',
fontSize:18,
textAlign:'center',
width:adaptToWidth(0.3)
},
text3:{
  marginVertical:adaptToHeight(0.01),
  fontFamily:'Montserrat',
  fontSize:17,
  textAlign:'center',
  width:adaptToWidth(0.3) ,
  
 
  }



})