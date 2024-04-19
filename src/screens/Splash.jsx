import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet, Text } from 'react-native';

const Splash = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 2,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/uniLogo.png')} 
        style={[styles.image, { transform: [{ scale: scaleValue }] }]}
      />
      <Text style={styles.developedByText}>Developed by UnderScore Team</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  developedByText: {
    position: 'absolute',
    bottom: 25,
    fontSize: 16,
    color: 'white',
  },
});

export default Splash;
