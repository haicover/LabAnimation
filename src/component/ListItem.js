import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  ViewToken,
} from 'react-native-reanimated';

interface ListItemProps {
  item: any; 
  viewableItems: {value: ViewToken[]};
}

const ListItem: React.FC<ListItemProps> = React.memo(
  ({item, viewableItems}) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter(viewableItem => viewableItem.isViewable)
          .find(viewableItem => viewableItem.item.id === item.id),
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0.5, {duration: 300}),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.8, {duration: 300}),
          },
        ],
      };
    }, [viewableItems.value]);

    return (
      <Animated.View style={[styles.item, rStyle]}>
        <Text>{item.title}</Text> 
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  item: {
    padding: 25,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'cyan', 
    borderRadius:15,
  },
});

export default ListItem;
