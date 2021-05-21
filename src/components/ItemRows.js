import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ItemRows = ({item}) => {
  return (
    <View style={styles.rows}>
      <View style={styles.Head}>
        <View style={styles.CountryHead}>
          <Image
            source={{
              uri: `https://www.countryflags.io/${item.CountryCode}/flat/64.png`,
            }}
            style={styles.flag}
          />
          <Text style={styles.countryName}>{item.Country}</Text>
        </View>
        <View>
          <Text style={styles.totalCases}>{item.TotalConfirmed}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rows: {
    width: '100%',
    marginBottom: 5,
  },
  countryName: {
    fontSize: 15,
    color: '#EBF2FF',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  totalCases: {
    fontSize: 16,
    color: '#EBF2FF',
    fontWeight: 'bold',
    marginTop: 5,
  },
  flag: {
    height: 30,
    width: 30,
    padding: 10,
    borderRadius: 1000,
  },
  CountryHead: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});

export default ItemRows;
