import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const Bai1 = () => {
  const navigation = useNavigation();
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Text
        style={styles.navigateButton}
        onPress={() => {
          navigation.navigate('Bai2');
        }}>
        Go to Bai2
      </Text>
      <Text
        style={styles.moveButton}
        onPress={() => {
          offset.value = Math.random() * 255;
        }}>
        Move
      </Text>
      <Animated.View style={[styles.box, animatedStyles]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  moveButton: {
    backgroundColor: 'blue',
    width: 50,
    height: 30,
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#acacac',
    marginTop: 20,
  },
  navigateButton: {
    backgroundColor: 'green',
    width: 100,
    height: 30,
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Bai1;
