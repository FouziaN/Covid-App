import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';
import ListItem from '../components/ListItem';

export default class Helpline extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Data,
    };
  }

  renderItem = ({item, index}) => {
    return (
      <ListItem
        title={item.item}
        subtitle={item.subItem}
        maxHeight={item.expandHeight}
        minHeight={item.unexpandHeight}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.MainContainer}>
       <View>
          <Text style={styles.headertext}>FAQ</Text>
        </View>
        <ImageBackground style = {{height : '100%' , width : '100%'}} source = {require('../img/faqBack.jpeg')}>
        <View style={styles.con}>
          <FlatList data={this.state.data} renderItem={this.renderItem} />
        </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const Data = [
  {
    item: 'What are the common symptoms of Coronavirus?',
    subItem:
      'The most common symptoms of Coronavirus are : Fever , Difficulty in breathing , Sore throat , Dry cough , Nasal congestion and running nose . These symptoms are usually mild and begin gradually. Some people do become infected but don’t develop any symptoms and don’t feel unwell. About 80% recover from the disease without needing special treatment. Around 16% of all Coronavirus patients become seriously ill and develop difficulty breathing.',
    unexpandHeight: 75,
    expandHeight: 350,
  },
  {
    item: 'What is corona virus?',
    subItem:
      'Corona viruses are a large family of viruses which may cause illness in animals or humans. In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.',
    unexpandHeight: 50,
    expandHeight: 300,
  },
  {
    item: 'How does COVID-19 spread?',
    subItem:
      'People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is  important to stay more than 1 meter (3 feet) away from a person who is sick',
    unexpandHeight: 50,
    expandHeight: 400,
  },
  {
    item: 'How likely am I to catch COVID-19?',
    subItem:
      'The risk depends on where you are - and more specifically, whether there is a COVID-19 outbreak unfolding there. For most people in most locations the risk of catching COVID-19 is still low. However, there are now places around the world (cities or areas) where the disease is spreading. For people living in, or visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce your risk of catching or spreading COVID-19.COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation where you are or intend to go',
    unexpandHeight: 75,
    expandHeight: 600,
  },
  {
    item: 'Who is at risk of developing severe illness?',
    subItem:  'While we are still learning about how COVID-2019 affects people,older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer ordiabetes) appear to develop serious illness more often than others.',
    unexpandHeight: 75, 
    expandHeight: 250,
  },
  {
    item: 'Are antibiotics effective in preventing or treating the COVID-19?',
    subItem:  'No. Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. They should only be used as directed by a physician to treat a bacterial infection.',
    unexpandHeight: 100, 
    expandHeight: 300,
  },
  {
    item: 'Is COVID-19 the same as SARS?',
    subItem: 'No. The virus that causes COVID-19 and the one that caused the outbreak of Severe Acute Respiratory Syndrome (SARS) in 2003 are related to each other genetically, but the diseases they cause are quite different. SARS was more deadly but much less infectious than COVID-19.There have been no outbreaks of SARS anywhere in the world since 2003.',
    unexpandHeight: 50, 
    expandHeight: 250,
  },
  {
    item: 'How long is the incubation period for COVID-19?',
    subItem: 'The “incubation period” means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1-14 days, most commonly around five days. These estimates will be updated as more data become available.',
    unexpandHeight: 75, 
    expandHeight: 250,
  },
];
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headertext: {
    fontSize: 20,
    fontWeight: 'bold',
    margin : 20
  },

  topcon: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingTop: 15,
    shadowRadius: 10,
    paddingHorizontal: 13,
    shadowColor: 'gray',
    shadowOpacity: 0.3,
  },
  con: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
