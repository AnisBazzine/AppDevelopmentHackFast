import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { newsData } from '../data/newsData'; // Import news data
import NewsScreenComp from '../Components/NewsScreenComp';
import colors from '../styles/Colors';

const News = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
      <FlatList
        data={newsData}
        renderItem={NewsScreenComp} // Pass each news item to NewsScreenComp
        keyExtractor={(item) => item.id.toString()}
        style={styles.newsList}
      />
    </View>
  );
};

export default News;

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
  newsList: {
    width: '100%',
  },
});
