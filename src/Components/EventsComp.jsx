import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import colors from "../styles/Colors";

const EventsComp = ({ data }) => {
  const { title, desc, date, image } = data;

  const handlePress = () => {
    console.warn("Show More...");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
          <Text style={styles.date}>{date}</Text>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 5,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  desc: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 90,
  },
  buttonText: {
    color: colors.secondary,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default EventsComp;
