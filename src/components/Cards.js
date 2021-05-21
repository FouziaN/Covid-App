import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default class Cards extends React.Component {
  render() {
    return (
      <View style={{...styles.container, backgroundColor: this.props.bg}}>
        <Text style={{...styles.title, color: this.props.titleColor}}>
          {this.props.title}
        </Text>
        <Text style={{...styles.number, color: this.props.numberColor}}>
          {this.props.number}
        </Text>
      </View>
    );
  }
}

{
  /* <Cards
              Icon={pulse}
              title="Total Cases"
              number={data ? data.cases : 0}
              bg = "red"
            /> */
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 170,
    borderRadius: 15,
    margin: 10,
  },
  col: {
    flexDirection: 'row',
  },
  title: {
    margin: 10,
    fontWeight: '500',
    fontSize: 18,
  },
  number: {
    fontWeight: '700',
    fontSize: 22,
    marginTop: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});
