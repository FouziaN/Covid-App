import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../screens/Home';
import Hospital from '../screens/Hospital';
import Helpline from '../screens/Helpline';
import Images from '../constants/Images';
import states from '../screens/states';
import World from '../screens/World';
import News from '../screens/News'
import HealthNews from '../screens/HealthNews';
import VaccineNews from '../screens/VaccineNews';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const HomeBottom = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'rgb(219,129,109)', height: 70 }}>
      <Tab.Screen
        name="Cases"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ height: 25, width: 25 }}
              source={focused ? Images.home_selected : Images.home_unselected}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsTabNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ height: 25, width: 25 }}
              source={focused ? Images.news_selected : Images.news_unselected}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Helpline"
        component={Helpline}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ height: 25, width: 25 }}
              source={
                focused ? Images.helpline_selected : Images.helpline_unselected
              }
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const NewsTabNavigator = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        showLabel: true,
        pressColor: 'gray',
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold'
        },
        style: {
          backgroundColor: 'white',
          borderRadius: 10,
          width: '90%',
          justifyContent: 'center',
          alignSelf: 'center',
        },
        indicatorStyle: {
          backgroundColor: '#ffc594',
          height: '90%',
          borderBottomColor: '#ffc594',
          borderRadius: 10,
          borderBottomWidth: 1,
        },
      }}>
      <TopTab.Screen name="Covid News" component={News} />
      <TopTab.Screen name="Health" component={HealthNews} />
      <TopTab.Screen name="Vaccine" component={VaccineNews} />
    </TopTab.Navigator>
  );
};



const TopNavigatior = () => {
  return (
    <TopTab.Navigator

      tabBarOptions={{
        showLabel: true,
        pressColor: 'white',
        style: {
          backgroundColor: 'white',
          borderRadius: 10,
          width: '80%',
          justifyContent: 'center',
          alignSelf: 'center',
        },
        indicatorStyle: {
          backgroundColor: '#ffc594',
          height: '100%',
          borderBottomColor: '#ffc594',
          borderRadius: 10,
          borderBottomWidth: 1,
        },
      }}>
      <TopTab.Screen name="India" component={states} />
      <TopTab.Screen name="World" component={World} />
    </TopTab.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Covid-19 Dashboard" component={HomeBottom} />
        <Stack.Screen name="Countries" component={TopNavigatior} />
      </Stack.Navigator>
    </View>
  );
};

export default HomeStackNavigator;
