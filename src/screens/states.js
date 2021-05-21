import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatesList from '../components/CustomStatesList';
import StateCard from '../components/StateCard';

const states = ({item}) => {
  const url =
    'https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true';
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchCovidIndiaData = async () => {
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
    fetchCovidIndiaData();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={{
          width: 400,
          height: 420,
          position: 'absolute',
          bottom: -20,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
        source={require('../img/indiaBack.jpg')}
      />
      <Text style={styles.Head}>Across India</Text>
      <View style={{flexDirection: 'row', margin: 10}}>
        <View>
          <StateCard
            title="Confirmed"
            TitleColor="red"
            number={data ? data.totalCases : 0}
            bg="#fbd2d7"
            numberColor="red"
          />
          <StateCard
            title="Recovered"
            number={data ? data.recovered : 0}
            bg="#cce0cc"
            TitleColor="green"
            numberColor="green"
          />
        </View>
        <View>
          <StateCard
            title="Active"
            number={data ? data.activeCases : 0}
            bg="#d9f1ff"
            TitleColor="#006ee6"
            numberColor="#006ee6"
          />
          <StateCard
            title="Deceased"
            number={data ? data.activeCases : 0}
            bg="#ebecf0"
            TitleColor="gray"
            numberColor="gray"
          />
        </View>
      </View>
      <Text style={styles.Head}>States</Text>
      <View style={{marginTop: 30, marginLeft: 10, marginRight: 10, flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data && data.regionData ? data.regionData : 0}
          renderItem={({item}) => (
            <CustomStatesList
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
  Head: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
  },
  line: {
    borderWidth: 2,
    borderColor: '#ebf2ff',
  },
});

export default states;
