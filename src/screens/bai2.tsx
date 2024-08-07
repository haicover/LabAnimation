import React, { useRef, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle, withTiming, useSharedValue, ViewToken } from 'react-native-reanimated';
import ListItem from '../component/ListItem';
import { useNavigation } from '@react-navigation/native';


const bai2 = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }]); // Sample data
  const viewableItems = useSharedValue<ViewToken[]>([]);
  return (
    <View style={styles.container}>
      <Text
        style={styles.navigateButton}
        onPress={() => {
          navigation.navigate("Quiz");
        }}>
        Go to Bai3
      </Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => (
          <ListItem item={item} viewableItems={viewableItems} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
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
})
export default bai2;