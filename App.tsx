// import React, { useRef } from 'react';
// import { Animated, FlatList, Text, View, Image, StyleSheet } from 'react-native';

// const HEADER_HEIGHT = 200;
// const SCROLL_THRESHOLD = HEADER_HEIGHT / 2;

// const App = () => {
//   const scrollY = useRef(new Animated.Value(0)).current;

//   const headerTranslate = scrollY.interpolate({
//     inputRange: [0, SCROLL_THRESHOLD],
//     outputRange: [0, -SCROLL_THRESHOLD],
//     extrapolate: 'clamp',
//   });

//   const headerScale = scrollY.interpolate({
//     inputRange: [0, SCROLL_THRESHOLD],
//     outputRange: [1, 0.7],
//     extrapolate: 'clamp',
//   });

//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, SCROLL_THRESHOLD],
//     outputRange: [1, 0.5],
//     extrapolate: 'clamp',
//   });

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text>{item}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.header,
//           {
//             transform: [{ translateY: headerTranslate }, { scale: headerScale }],
//             opacity: headerOpacity,
//           },
//         ]}
//       >
//         <Image
//           source={{ uri: 'https://via.placeholder.com/100' }}
//           style={styles.avatar}
//         />
//         <Text style={styles.title}>Title</Text>
//       </Animated.View>
//       <FlatList
//         data={Array.from({ length: 30 }, (_, i) => `Item ${i}`)}
//         renderItem={renderItem}
//         keyExtractor={(item) => item}
//         ListHeaderComponent={<Text style={styles.listHeader}>Popular Quizzes</Text>}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: HEADER_HEIGHT,
//     backgroundColor: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     width: '100%',
//     top: 0,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   title: {
//     color: 'white',
//     fontSize: 24,
//   },
//   item: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   listHeader: {
//     fontSize: 24,
//     padding: 10,
//     backgroundColor: 'white',
//   },
// });

// export default App;
// App.js
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;
