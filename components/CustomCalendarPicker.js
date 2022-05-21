import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { adaptToHeight } from '../config/Demensions';

export default CustomCalendarPicker = ({props}) => {
  
  const [selectedStartDate, setSelectedStartDate]=useState (null)
  const [ selectedEndDate, setSelectedEndDate]=useState(null)

  const minDate = new Date(2000,1,1);
  const maxDate = new Date(2099, 12, 12);
  const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';

 const onDateChange = (date, type)=> {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(date);
    }
  }

  return (
    <View style={styles.container}>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}

        weekdays={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']}
        months={['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre']}
        previousTitle="précédent"
        nextTitle="suivant"
        todayBackgroundColor="#e6ffe6"
        selectedDayColor="#66ff33"
        selectedDayTextColor="#000000"
        scaleFactor={375}
        textStyle={{
          color: '#000000', fontSize:10
        }}
        onDateChange={onDateChange}
      />

      <View>
        <Text style={{fontFamily:'Montserrat'}}>Date de Début:{ startDate }</Text>
        <Text style={{fontFamily:'Montserrat'}}>Date de Fin:{ endDate }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop:adaptToHeight(0.08),
  },
});