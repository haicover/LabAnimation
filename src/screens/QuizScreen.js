import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const HEADER_HEIGHT = 280;
const {width: windowWidth} = Dimensions.get('window');

const QuizScreen = () => {
  const [data] = useState([
    {id: 1, name: 'Popular'},
    {id: 2, name: 'Products Design'},
    {id: 3, name: 'Development'},
    {id: 4, name: 'Popular'},
    {id: 5, name: 'Products Design'},
    {id: 6, name: 'Development'},
    {id: 7, name: 'Popular'},
    {id: 8, name: 'Products Design'},
    {id: 9, name: 'Development'},
    {id: 10, name: 'Popular'},
    {id: 11, name: 'Products Design'},
    {id: 12, name: 'Development'},
  ]);

  const [body] = useState([
    {id: 1, name: 'Products Designs', title: 'Design System', chatting: 10},
    {id: 2, name: 'Products Designs', title: 'Design System', chatting: 20},
    {id: 3, name: 'Products Designs', title: 'Design System', chatting: 42},
    {id: 4, name: 'Products Designs', title: 'Design System', chatting: 40},
  ]);

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerScale = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2],
    outputRange: [1, 0.25],
    extrapolate: 'clamp',
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT / 2],
    extrapolate: 'clamp',
  });

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, HEADER_HEIGHT / 4],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const renderItemHeaderComponent = ({item}) => (
    <View style={styles.headerItem}>
      <Text style={styles.headerText}>{item.name}</Text>
    </View>
  );

  const renderItemBodyComponent = ({item}) => {
    const backgroundColor = item.chatting > 30 ? 'pink' : 'blue';
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemContent}>
          <View style={styles.itemHeader}>
            <Text style={styles.fz_12}>{item.name}</Text>
            <View style={[styles.chattingBadge, {backgroundColor}]}>
              <Image
                source={require('../img/book.png')}
                style={styles.bookIcon}
              />
              <Text style={styles.chattingText}>{item.chatting}</Text>
            </View>
          </View>
          <Text style={styles.fz_22}>{item.title}</Text>
          <View style={styles.footer}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXksdu3aWAj1aBuoU5l7yOPx7SMr3Ee7HnAp7u4-TaJg&s',
              }}
              style={styles.footerImage}
            />
            <Text>hainguyen</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, {height: HEADER_HEIGHT}]}>
        <View style={styles.headerTop}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXksdu3aWAj1aBuoU5l7yOPx7SMr3Ee7HnAp7u4-TaJg&s',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>netguru</Text>
          <View style={styles.quizBadge}>
            <Text style={styles.quizBadgeText}>Quiz</Text>
          </View>
        </View>
        <Animated.View
          style={[
            styles.headerContent,
            {
              transform: [{scale: headerScale}, {translateY: headerTranslateY}],
              opacity: headerOpacity,
            },
          ]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXksdu3aWAj1aBuoU5l7yOPx7SMr3Ee7HnAp7u4-TaJg&s',
            }}
            style={styles.headerImage}
          />
          <Text style={styles.title}>Mornin` Mark!</Text>
          <Text style={styles.title}>Ready for a quiz?</Text>
        </Animated.View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItemHeaderComponent}
          contentContainerStyle={styles.headerFlatList}
          style={styles.flatList}
        />
      </Animated.View>
      <Text style={styles.fz_22}>Popular Quizzes</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={body}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItemBodyComponent}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'green',
    width: windowWidth,
    overflow: 'hidden',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  headerFlatList: {
    paddingHorizontal: 10, // Add padding or margin if needed
  },

  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  profileText: {
    marginStart: 10,
    color: 'white',
  },
  quizBadge: {
    paddingStart: 7,
    paddingEnd: 7,
    backgroundColor: '#339900',
    marginStart: 10,
  },
  quizBadgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerContent: {
    padding: 16,
  },
  headerImage: {
    borderRadius: 15,
    width: 50,
    height: 40,
    margin: 5,
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  fz_22: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginStart: 20,
  },
  headerItem: {
    height: 40,
    marginTop: 10,
    margin: 5,
    backgroundColor: 'rgba(200,200,200, 0.8)',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
  },
  itemContainer: {
    marginTop: 20,
    margin: 5,
    backgroundColor: 'rgba(100,100,100, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  itemContent: {
    margin: 10,
    backgroundColor: '#aeaeae',
    padding: 10,
    borderRadius: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fz_12: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    margin: 5,
  },
  chattingBadge: {
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
  },
  bookIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginEnd: 5,
  },
  chattingText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  footerImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginEnd: 5,
  },
});

export default QuizScreen;
