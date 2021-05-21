import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const CustomStatesList = ({item}) => {
  return (
    <View style = {styles.ViewStyle} >
        <Text style={styles.RegionText}>{item.region}</Text>
      <View style={styles.Container}>
      
        <View>
        <Text style = {styles.TitleHead}>Confirmed</Text>
        <Text style={styles.ActiveCase}>{item.activeCases}</Text>
        <Text style={{...styles.ActiveCase , fontSize : 12}}>{item.newInfected}</Text>
        </View>
        <View>
        <Text style = {styles.TitleHead}>Recovered</Text>
        <Text style = {styles.RecoveredCases}>{item.recovered}</Text>
        <Text style = {{...styles.RecoveredCases  ,fontSize : 12}}>{item.newRecovered}</Text>
        </View>
        <View>
        <Text style = {styles.TitleHead}>Deceased</Text>
        <Text style = {styles.DeceasedCases}>{item.deceased}</Text>
        <Text style = {{...styles.DeceasedCases  ,fontSize : 12}}>{item.newDeceased}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-evenly',
    justifyContent: 'space-between',
  },
  RegionText: {
    color: 'black',
    fontSize: 20,
    margin: 10,
    fontWeight : 'bold'
  },
  ActiveCase: {
    color: 'red',
    fontSize: 14,
    alignSelf: 'center',
    fontWeight : '700',
    marginTop : 5
  },
  RecoveredCases: {
    color: 'green',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight : '700',
    marginTop : 5
  },
  DeceasedCases: {
    color: 'gray',
    fontSize: 14,
    alignSelf: 'center',
    fontWeight : '700',
    marginTop : 5
  },
ViewStyle: {
  margin : 5,
  backgroundColor: 'white',
  height: 120,
  borderRadius: 20,
  borderBottomWidth: 0,
  shadowColor: '#abddfc',
  shadowOffset: {width: 2, height: 1},
  shadowOpacity: 0.9,
  shadowRadius: 5,
  elevation: 3,
},
TitleHead : {
  fontWeight : '700',
  fontSize : 16
}
});

export default CustomStatesList;
