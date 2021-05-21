import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


export default class StateCard extends React.Component {
  render() {
    return (
      <View style = {{...styles.container , backgroundColor : this.props.bg}}>
        <Text style={{...styles.title, color: this.props.TitleColor}}>{this.props.title}</Text>
        <Text style={{...styles.number , color : this.props.numberColor}}>{this.props.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 170,
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
  col: {
    flexDirection: 'row',

  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight : '500',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop : 35,
    fontWeight : '500',
    alignSelf : 'flex-end'
  },
});
