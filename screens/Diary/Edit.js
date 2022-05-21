
import { StyleSheet, Text, View,Image,StatusBar ,TextInput,TouchableWithoutFeedback,Keyboard, TouchableOpacity , SafeAreaView, ScrollView, FlatList,TouchableHighlight, BackHandler} from 'react-native'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'


const Edit = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes.list);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [done, setDone] = useState(false);
  const [status, setStatus] = useState("new");

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus("edit");
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
      setDone(list[route.params.key].done);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status === "new" ? "Nouvelle note" : "Editer la note",
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft:15 , padding: 10 }} underlayColor="transparent" onPress={handleCloseButton}>
         <Ionicons name={"close-outline"}
          style={{ color: colors.black }}
          size={adaptToWidth(0.06)} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableHighlight style={{marginLeft:15 , padding: 10 }} underlayColor="transparent" onPress={handleSaveButton}>
         <Ionicons name={"save-outline"}
          style={{ color: colors.black }}
          size={adaptToWidth(0.06)} />
        </TouchableHighlight>
      ),
    });
  }, [status, title, body]);

  const handleSaveButton = () => {
    if (title !== "" && body !== "") {
      if (status === "edit") {
        dispatch({
          type: "EDIT_NOTE",
          payload: {
            key: route.params.key,
            title,
            body,
            done,
          },
        });
      } else {
        dispatch({
          type: "ADD_NOTE",
          payload: { title, body },
        });
      }

      navigation.navigate("List");
    } else {
      alert("");
    }
  };

  const handleCloseButton = () => navigation.navigate("List");

  const handleDeleteNote = () => {
    dispatch({
      type: "DELETE_NOTE",
      payload: {
        key: route.params.key,
      },
    });
    navigation.navigate("List");
  };

  const handleSuccessNote = () => {
    dispatch({
      type: "SUCCESS_NOTE",
      payload: {
        key: route.params.key,
        title,
        body,
      },
    });
    navigation.navigate("List");
  };

  const handleNoSuccessNote = () => {
    dispatch({
      type: "UNCHECK_NOTE",
      payload: {
        key: route.params.key,
        title,
        body,
      },
    });
    navigation.navigate("List");
  };
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                          accessible={false}>
    <View style={{flex:1 , backgroundColor: colors.primary}}>
      <TextInput 
        value={title}
        onChangeText={(t) => setTitle(t)}
        placeholder="Titre | ex: Courir 🏃"
        placeholderTextColor="#ccc"
        autoFocus={true}
        style={{ fontFamily: "Roboto" , fontSize: 20 , padding: 15 , color:colors.black }}
      />
      <TextInput 
        value={body}
        onChangeText={(t) => setBody(t)}
        placeholder="Details | ex: ce jour je suis en forme 😎"
        placeholderTextColor="#ccc"
        multiline={true}
        textAlignVertical="top"
        style={{ fontFamily: "Roboto" , fontSize: 17 , flex:0.5 , padding :15 , color: colors.black  }}
      />
      {status === "edit" && (
        <View  style={{flex:1 , flexDirection: 'row' , alignItems:'flex-end', width:adaptToWidth(0.9), justifyContent:'space-around'}}>
          <TouchableOpacity style={{borderRadius:10, Width:adaptToWidth(0.8),height:adaptToHeight(0.1), justifyContent: 'center' , alignItems:'center'}}onPress={handleDeleteNote}>
            <Text style={{ color:"red",fontFamily: "Roboto" , fontSize: 16 }}>
              Exclure 
            </Text>
          </TouchableOpacity>

          {!done && (
            <TouchableOpacity style={{borderRadius:10, Width:adaptToWidth(0.5),height:adaptToHeight(0.1), justifyContent: 'center' , alignItems:'center' }}  onPress={handleSuccessNote}>
              <Text style={{color:colors.yesGreen, fontFamily: "Roboto" , fontSize: 16}}>
                Marquer
              </Text>
            </TouchableOpacity>
          )}

          {done && (
            <TouchableOpacity
            style={{borderRadius:10, Width:adaptToWidth(0.5),height:adaptToHeight(0.1),  justifyContent: 'center' , alignItems:'center'}}
             
              onPress={handleNoSuccessNote}
            >
              <Text style={{ fontFamily: "Roboto" , fontSize: 16 , color:colors.purple}}>
                Démarquer 
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  </TouchableWithoutFeedback>)
};
export default Edit