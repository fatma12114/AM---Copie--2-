import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import Ionicons from "@expo/vector-icons/Ionicons"
import { adaptToHeight } from '../../config/Demensions'

const UrgenceScreen4 = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center',paddingTop:adaptToHeight(0.1), justifyContent:'flex-end'}}>
          <Text style={{fontFamily:'Montserrat',fontSize:40, textAlign:'center',flex:0.27}} numberOfLines={3}>
          Notification envoyée à vos proches  </Text>
          <Text style={{fontFamily:'Montserrat',fontSize:40,textAlign:'center',flex:0.3}}> 
          Prière de rester calme</Text>
          <Ionicons name={"warning-outline"} style={{ color: 'red',flex:.4 }} size={adaptToHeight(0.25)} /> 
        </View>
      
      
    </SafeAreaView>
  )
}

export default UrgenceScreen4

const styles = StyleSheet.create({
    container: {
        
        alignItems: "center",
        backgroundColor: colors.PastelYellow,
        flex:1
    }
})