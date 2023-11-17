import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../components/header.component';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FIREBASE_AUTH} from '../utils/firebaseConfig';
import {useStores} from '../store/mainStore';

const SettingsScreen = ({navigation}) => {
  const mainStore = useStores();
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Settings'}></Header>
      <Button title={'logout'} onPress={() => FIREBASE_AUTH.signOut()}></Button>
      <Text>{mainStore.appVersionString}</Text>
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
