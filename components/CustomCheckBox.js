import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default CustomCheckBox = ({color,text}) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={{flexDirection:'row'}}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? {color} : undefined}
        />
        <Text style={styles.paragraph}>{text}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
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
