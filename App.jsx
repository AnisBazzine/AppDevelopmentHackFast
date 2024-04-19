import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Splash from "./src/screens/Splash";
import TabsButtoms from "./src/navigation/TabsButtoms";
import { useEffect, useState } from "react";
import colors from "./src/styles/Colors";

export default function App() {
  const [splashVisible, setSplashVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      {splashVisible ? <Splash /> : <TabsButtoms />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});
