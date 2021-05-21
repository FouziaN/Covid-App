import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      isSelected: false,
      subitem: this.props.subtitle,
      animation: new Animated.Value(this.props.minHeight),
      maxHeight: this.props.maxHeight,
      minHeight: this.props.minHeight,
    };
  }

  onPress = () => {
    let initial = this.state.isSelected
      ? this.state.maxHeight
      : this.state.minHeight;
    let final = this.state.isSelected
      ? this.state.minHeight
      : this.state.maxHeight;
    this.setState({ isSelected: !this.state.isSelected });
    console.log(this.state.minHeight);
    this.state.animation.setValue(initial);
    Animated.timing(this.state.animation, {
      toValue: final,
      duration : 5
    }).start();
  };

  render() {
    let i = this.state.isSelected
      ? "(https://image.flaticon.com/icons/png/128/271/271203.png)"
      : "(https://image.flaticon.com/icons/png/128/1237/1237946.png)";
    return (
      <Animated.View style={[styles.flatl, { height: this.state.animation }]}>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Image style={styles.icon1} source={i} />
        </TouchableOpacity>
        <View style={{ paddingRight: 40 }}>
          <Text style={styles.itemheader}>{this.state.title}</Text>
          {this.state.isSelected && (
            <Text style={styles.subitem}>{this.state.subitem}</Text>
          )}
        </View>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  icon1: {
    height: 20,
    width: 20,
    marginRight: 10,
    marginTop: 5,
  },
  flatl: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f5deb3',
    marginTop: 10,
    borderRadius: 10,
    paddingBottom: 7,
  },
  itemheader: {
    fontSize: 20,
    fontWeight : '500'
  },
  subitem: {
    color: '#aaaaaa',
    fontSize: 17,
    marginTop: 10,
  },
});