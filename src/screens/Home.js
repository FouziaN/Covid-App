import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import PieChart from '../components/PieChart';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Cards from '../components/Cards';
import pulse from '../img/pulse.png';
import heart from '../img/heart.png';
import spirit from '../img/spirit.png';
import coronavirus from '../img/coronavirus.png';
import StateCard from '../components/StateCard';

const Home = ({navigation}) => {
  const url = 'https://covid-simple-api.now.sh/api/world';
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchCovidData = async () => {
      setLoading(true);
      try {
        const result = await fetch(url);
        const response = await result.json();
        setData(response);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCovidData();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: '100%',
          height: 280,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          transform: [{scaleX: 1}, {scaleY: 1}],
        }}
        source={require('../img/HomePage.jpeg')}></Image>
      <View>
        <ScrollView>
          <Text style={styles.HeaderText}>World Cases Update</Text>
          <Text style={styles.lastUpdate}>
            Last Updated : {data ? data.lastUpdate : 0}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Cards
              title="Confirmed"
              number={data ? data.totalCases : 0}
              bg="#fbd2d7"
              titleColor="red"
              numberColor="red"
            />
            <Cards
              title="Active"
              number={data ? data.activeCases : 0}
              bg="#d9f1ff"
              titleColor="#006ee6"
              numberColor="#006ee6"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Cards
              title="Recovered"
              number={data ? data.recovered : 0}
              bg="#cce0cc"
              titleColor="green"
              numberColor="green"
            />
            <Cards
              title="Deceased"
              number={data ? data.deaths : 0}
              bg="#ebecf0"
              titleColor="gray"
              numberColor="gray"
            />
          </View>

          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <TouchableOpacity
              style={styles.MoreUpdate}
              onPress={() => navigation.navigate('Countries')}>
              <Text style={{color: 'white', fontWeight: '800'}}>
                More Updates
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
  HeaderStyle: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    shadowColor: '#000',
    backgroundColor: '#EBF2FF',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
  lastUpdate: {
    color: 'gray',
    marginLeft: 15,
  },
  MoreUpdate: {
    backgroundColor: 'orange',
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default Home;
