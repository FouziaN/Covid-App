import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';

const Hospital = () => {
  return (
     <View style = {styles.container}>
         <Text>Hospital</Text>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop : 50 ,
    color: '#EBF2FF',
  },
  HeaderStyle : {
    borderBottomWidth : 2,
    borderColor : 'gray',
    shadowColor: '#000',
    backgroundColor : '#EBF2FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    elevation: 3
  }
});

export default Hospital;
