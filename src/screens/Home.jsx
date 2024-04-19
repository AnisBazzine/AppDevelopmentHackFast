import React, { useEffect } from 'react';
import {  StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView, Button, Dimensions } from 'react-native';
import globalStyles from '../styles/globalStyles';
import EventsComp from '../Components/EventsComp'
import NewsComp from '../Components/NewsComp'
import colors from '../styles/Colors';
import { newsData } from '../data/newsData';
import { eventsData } from '../data/eventsData'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.container}>    
    <ScrollView>
     <View style={styles.headerContainer}>
      <Image
        source={require('../assets/univ-tlemcen.png')}
        style={styles.introImage}
      />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Computer Science Department of Telemcam Universty</Text>
      </View>
      </View> 
    <View style={styles.introContainer}>
      <Text style={styles.introText}>        
Welcome to the Computer Science Department of Telemcam University, where innovation meets education. Our department is a hub of cutting-edge research and hands-on learning, empowering students to excel in the dynamic field of computer science. Join us in shaping the future of technology and making a difference in the digital world.
      </Text>
    </View>
    <Text style={styles.sectionTitle}>Latest News</Text>
    <FlatList
      data={newsData.slice(0, 3)}
      renderItem={({ item }) => <NewsComp data={item} navigation={navigation} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      style={styles.flatlistStyles}
      />
     <TouchableOpacity style={styles.showMoreButton} onPress={() => { console.warn('Show More..') }}>
          <Text style={styles.showMoreButtonText}>Show More</Text>
      </TouchableOpacity>
    <Text style={styles.sectionTitle}>Upcoming Events</Text>
    <FlatList
      data={eventsData.slice(0, 3)}
      renderItem={({ item }) => <EventsComp data={item} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      style={styles.flatlistStyles}
      />
      <TouchableOpacity style={styles.showMoreButton} onPress={() => { console.warn('Show More...') }}>
          <Text style={styles.showMoreButtonText}>Show More</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);
};
export default Home;
const styles = StyleSheet.create({
  headerContainer: {
    overflow: 'hidden',
    backgroundColor: colors.primary,
    height: windowWidth,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

  },
  introImage: {
    width: '100%',
    height: windowWidth * .80, // Adjust the height as needed
    resizeMode: 'cover',
  },
  headerTextContainer:{
    position: 'absolute',
    bottom: 15,
    paddingHorizontal: 20,
    alignItems:'center',
    justifyContent:'center',
    width: 350,
  },
  headerText: {
    textAlign:'center',
    letterSpacing: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  introContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  introText: {
    flex: 1,
    fontSize: 13,
    fontWeight:'400',
    marginHorizontal: 10,
  },
  departmentPhoto: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  flatlistStyles:{
    marginHorizontal: 10,
  },
  showMoreButton: {
    position: 'relavite',
    top: 0,
    left: 0,
    right: 0,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,
  },
  showMoreButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});