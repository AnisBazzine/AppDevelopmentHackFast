import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome
import { clubsData } from "../data/clubsData"; // Import clubs data
import globalStyles from "../styles/globalStyles";
import colors from "../styles/Colors";

const ContactUs = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.warn("Subscribing with email:", email);
    setEmail("");
  };

  const openFacebookPage = () => {
    Linking.openURL("https://www.facebook.com/univtlemcen");
  };

  const handleClubPress = (club) => {
    console.info("Navigating to club:", club.name);
  };

  const renderClubItem = ({ item }) => (
    <TouchableOpacity
      style={styles.clubContainer}
      onPress={() => handleClubPress(item)}
    >
      <Text style={styles.title}>{item.name}</Text>
      <Image source={item.logo} style={styles.logo} />
      <Text style={styles.clubDescription}>{item.description}</Text>
      <Text
        style={styles.contactEmail}
      >{`Contact Email: ${item.contactEmail}`}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <View style={styles.infoContainer}>
          <Image
            source={require("../assets/uniLogo.png")}
            style={styles.universityLogo}
          />
          <Text style={styles.titleBig}>University Contact Information</Text>
          <Text style={styles.contactInfo}>
            Address: 123 Main Street, City, Country
          </Text>
          <Text style={styles.contactInfo}>Phone: +1234567890</Text>
          <Text style={styles.contactInfo}>Email: example@email.com</Text>
          <View style={styles.linkContainer}>
            <FontAwesome
              name="facebook-square"
              size={24}
              color="blue"
              style={styles.facebookIcon}
            />
            <Text style={styles.link} onPress={openFacebookPage}>
              Facebook Page
            </Text>
          </View>
        </View>
        <FlatList
          data={clubsData}
          renderItem={renderClubItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          contentContainerStyle={styles.clubList}
        />
        <View style={styles.subscribeContainer}>
          <Text style={styles.titleSub}>Subscribe to University News</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Button title="Subscribe" onPress={handleSubscribe} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  clubList: {
    paddingVertical: 20,
    height: 350,
  },
  clubContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: colors.dark,
    padding: 20,
    borderRadius: 10,
    width: 300,
    height: 300,
  },
  infoContainer: {
    marginTop: 40,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
  },
  subscribeContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    letterSpacing: 1.5,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.white,
  },
  titleBig: {
    fontSize: 27,
    letterSpacing: 2,
    fontWeight: "bold",
    color: colors.dark,
  },
  titleSub: {
    fontSize: 23,
    letterSpacing: 0.5,
    fontWeight: "bold",
    color: colors.dark,
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: 18,
    marginBottom: 10,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  facebookIcon: {
    marginRight: 10,
  },
  link: {
    fontSize: 18,
    color: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  clubDescription: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 10,
    textAlign: "center",
  },
  contactEmail: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  universityLogo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 40,
  },
});

export default ContactUs;
