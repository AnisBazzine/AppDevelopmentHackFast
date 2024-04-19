import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { eventsData } from '../data/eventsData';
import colors from '../styles/Colors';

const EventsSceenComp = ({ item, onPress }) => (
    
  <View onPress={() => onPress(item)} style={styles.eventItem}>
    <Image source={item.image} style={styles.eventImage} />
    <View style={styles.eventInfo}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
      <TouchableOpacity>
        <Text style={styles.moreDetails}>More Details</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const EventsCompScreen = () => {
  const handleEventPress = (item) => {
    // Implement navigation or display more details logic here
    console.warn("More details for:", item.title);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      <FlatList
        data={eventsData}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.eventList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
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
    backgroundColor: '#f0f0f0',
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
    color: 'gray',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 16,
  },
  moreDetails: {
    color: colors.primary,
    marginTop: 5,
  },
});

export default EventsSceenComp;
