import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import WorldStateScreen from './WorldStatsScreen';

const World = () => {
  const url = 'https://akashraj.tech/corona/api';
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
      <Text style={styles.HeaderText}>World Statistics</Text>
      <Image
        style={{
          width: 400,
          height: 420,
          position: 'absolute',
          bottom: 20,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
        source={require('../img/worldBack.png')}
      />

      <View style={{marginTop: 40}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data && data.countries_stat ? data.countries_stat : 0}
          renderItem={({item}) => (
            <WorldStateScreen
              item={item}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        />
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
    marginTop: 20,
    color: '#000',
    marginLeft: 20,
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
});

export default World;
