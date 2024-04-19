import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { newsData } from '../data/newsData';
import colors from '../styles/Colors';

const NewsScreenComp = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)} style={styles.newsItem}>
    <Image source={item.image} style={styles.newsImage} />
    <View style={styles.newsInfo}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDesc}>{item.desc}</Text>
      <Text style={styles.newsDate}>{item.date}</Text>
      <TouchableOpacity>
        <Text style={styles.moreDetails}>More Details</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  newsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  newsImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  newsInfo: {
    flex: 1,
    padding: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsDesc: {
    fontSize: 16,
  },
  newsDate: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  moreDetails: {
    color: colors.primary,
    marginTop: 5,
  },
});

export default NewsScreenComp;
