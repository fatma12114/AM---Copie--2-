import { StyleSheet, Text, View, TouchableOpacity,Image , ScrollView, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import colors from './config/colors'
import { adaptToHeight, adaptToWidth } from './config/Demensions'
import CustomCheckBox from './components/CustomCheckBox'
import Checkbox from 'expo-checkbox';

  const Test = () => {
    const [isChecked, setChecked] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [shouldShow1, setShouldShow1] = useState(false);
   
    return (
      
  <View style={styles.container}>
     <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? colors.purple : undefined}
          
        />
        <Text style={styles.paragraph}>type 1</Text>
  </View>
);}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    justifyContent:'center', alignItems:'center'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

  
export default Test


