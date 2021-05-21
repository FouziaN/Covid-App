import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class StateCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={{...styles.number, color: this.props.bg}}>
          {this.props.number}
        </Text>
        <View style={styles.col}>
          <Text style={styles.DailyText}>{this.props.daily}</Text>
          <Text style={{...styles.DailyCases, color: this.props.newColor}}>
            {this.props.lilNumber}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 110,
    borderRadius: 15,
    padding: 10,
    margin: 5,
    backgroundColor: '#ebf2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'row',
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 14,
    margin: 10,
    fontWeight: '500',
  },
  Icon: {
    height: 40,
    width: 40,
  },
  DailyText: {
    fontWeight: '300',
    fontSize: 12,
  },
  DailyCases: {
    fontSize: 12,
  },
});
