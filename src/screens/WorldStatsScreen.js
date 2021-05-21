import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const WorldStateScreen = ({item}) => {
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.RegionText}>{item.country_name}</Text>
      <View style={styles.Container}>
        <View>
          <Text style = {styles.TitleHead}>Cases</Text>
          <Text style={styles.ActiveCase}>{item.cases}</Text>
        </View>
        <View>
          <Text style = {styles.TitleHead}>Recoveries</Text>
          <Text style={{...styles.RecoveredCases, fontSize: 14}}>
            {item.total_recovered}
          </Text>
        </View>
        <View>
         <Text style = {styles.TitleHead}>Deceased</Text>
          <Text style={styles.DeceasedCases}>{item.deaths}</Text>
        </View>
        <View>
         <Text style = {styles.TitleHead}>Critical</Text>
          <Text style={styles.Critical}>{item.serious_critical}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    margin: 10,
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
    alignSelf: 'flex-end',
    fontWeight : '700',
    marginTop : 5
  },
  RecoveredCases: {
    color: 'green',
    fontSize: 16,
    alignSelf: 'flex-end',
    fontWeight : '700',
    marginTop : 5
  },
  DeceasedCases: {
    color: 'gray',
    fontSize: 14,
    alignSelf: 'flex-end',
    fontWeight : '700',
    marginTop : 5
  },
  ViewStyle: {
    backgroundColor: 'white',
    margin: 20,
    height: 110,
    borderRadius: 20,
    borderBottomWidth: 0,
    shadowColor: '#abddfc',
    shadowOffset: {width: 2, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 3,
  },
  Critical : {
    color: 'orange',
    fontWeight : '700',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginTop : 5
  },
  TitleHead : {
      fontWeight : '700',
      fontSize : 16
  }
});

export default WorldStateScreen;
