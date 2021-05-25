import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  Linking,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
const {height, width} = Dimensions.get('window');

export default class HealthNews extends Component {
  state = {
    news: [],
    loading: true,
  };

  fetchnews = () => {
    fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "Your Own Key",
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          news: response.news,
          loading: false,
        });
      });
  };
  componentDidMount() {
    this.fetchnews();
  }

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <ActivityIndicator size="small" color="yellow" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.HeadingTitle}>
            <Text style={styles.Heading}>Health News</Text>
          </View>
          <View style={styles.news}>
            <FlatList
              data={this.state.news}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => {
                return (
                  <TouchableWithoutFeedback
                    onPress={() => Linking.openURL(item.link)}>
                    <View
                      style={{
                        width: '100%',
                        height: 130,
                        backgroundColor: '#f5deb3',
                        marginBottom: 15,
                        borderRadius: 15,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={{uri: item.urlToImage}}
                          style={{
                            borderRadius: 15,
                            height: 110,
                            width: 110,
                            marginTop: 10,
                            marginLeft: 10,
                          }}
                        />
                        <View>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 12,
                              marginTop: 10,
                              marginLeft: 10,
                              width: 230,
                              height : 45,
                            
                              fontWeight: '800',
                            }}>
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              marginLeft: 10,
                              marginTop: 10,
                              width: 230,
                              height : 40
                            }}>
                            {item.content}
                          </Text>
                          <Text style = {{fontSize : 10 , alignSelf : 'flex-end' , marginTop : 10 , color : 'gray'}}>{item.pubDate}</Text>
                        </View>
                        
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                );
              }}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Heading: {
    fontSize: 28,
    color: 'black',
    fontWeight: '600',
  },
  HeadingTitle: {
    margin: 10,
  },
  news: {
    margin: 10,
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
});
