import React from "react";
import { TouchableHighlight, View , Text , Image , TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native'

import colors from "../config/colors";

import Ionicons from "@expo/vector-icons/Ionicons";

import { useDispatch } from "react-redux";

import { adaptToHeight , adaptToWidth } from "../config/Demensions";

export default ({ data, index, onPress }) => {
  const dispatch = useDispatch();

  const handleCheckNote = () => {
    dispatch({
      type: "SUCCESS_NOTE",
      payload: {
        key: index,
        title: data.title,
        body: data.body,
      },
    });
  };

  const handleUnCheckNote = () => {
    dispatch({
      type: "UNCHECK_NOTE",
      payload: {
        key: index,
        title: data.title,
        body: data.body,
      },
    });
  };

  return (
    <TouchableOpacity
    style={{padding:15 ,backgroundColor:colors.yellow, margin: 10 , borderRadius: 20 }}
      onPress={() => onPress(index)}
      underlayColor={data.done ? "#0000ff" : "#fff"}
      check={data.done}
    >
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize:19 ,
            color : "#fff",

        
          }}
          success={data.done}
        >
          {data.title}
        </Text>
        {data.done !== true && (
          <TouchableOpacity style={{width:adaptToWidth(0.06), height:adaptToHeight(0.03), justifyContent:'center' , alignItems:'center'}}onPress={handleCheckNote} underlayColor="transparent">
            <Ionicons name={"checkmark-done-outline"}
          style={{ color: 'black' }}
          size={adaptToWidth(0.06)} />
          </TouchableOpacity>
        )}
        {data.done !== false && (
          <TouchableOpacity style={{width:adaptToWidth(0.06), height:adaptToHeight(0.03), justifyContent:'center' , alignItems:'center'}} onPress={handleUnCheckNote} underlayColor="transparent">
           <Ionicons name={"alert-circle-outline"}
          style={{ color: 'black' }}
          size={adaptToWidth(0.055)} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};
