import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {COLORS} from './src/common';
import { SafeAreaView,StyleSheet} from 'react-native';
import {Search} from './src/screens';

export default function App() {
  // const [loaded] = useFonts({
  //   Montserrat: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  // });
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.oxfordBlue,
   paddingTop: 15,
    // justifyContent: 'center',
  },
});



