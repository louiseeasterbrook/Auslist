import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/header.component';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Header title={'Settings'}></Header>
     </View>
  );
}


const styles = StyleSheet.create({
    container: {
      // backgroundColor:'#abf5ce',
      flex:1
    },
  });