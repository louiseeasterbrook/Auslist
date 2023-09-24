import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../components/header.component';
import {SafeAreaView} from 'react-native-safe-area-context';

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Settings'}></Header>
      <Button
        title={'logout'}
        onPress={() =>
          navigation.navigate('MyStack', {screen: 'Welcome'})
        }></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#abf5ce',
    flex: 1,
  },
});

export default SettingsScreen;
