import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/header.component';
import FoodBar from '../components/foodBar.component';
import CheckList from '../components/checkList.component';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title={'AusList'}></Header>
      <FoodBar lock={true}></FoodBar>
      <CheckList></CheckList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
