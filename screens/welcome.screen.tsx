import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import Header from '../components/header.component';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Welcome'}></Header>
      <Button
        title={'go'}
        onPress={() =>
          navigation.navigate('TabNavigator', {screen: 'Home'})
        }></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkListContainer: {
    marginTop: 24,
    marginHorizontal: 14,
    marginBottom: 24,
  },
});

export default WelcomeScreen;
