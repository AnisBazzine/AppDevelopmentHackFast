import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { eventsData } from '../data/eventsData';
import EventsSceenComp from '../Components/EventsSceenComp';
import colors from '../styles/Colors';

const Events = ({navigation}) => {
  return (
      <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      <FlatList
        data={eventsData}
        renderItem={EventsSceenComp}
        keyExtractor={(item) => item.id.toString()}
        style={styles.eventList}
      />
    </View>
  );
};

export default Events;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  eventList: {
    width: '100%',
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    overflow: 'hidden',
  },
  eventImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  eventInfo: {
    flex: 1,
    padding: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 16,
  },
  moreDetails: {
    color: colors.dark,
    textDecorationLine: 'runderline',
    marginTop: 5,
  },
});