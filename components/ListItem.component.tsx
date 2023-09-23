import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GREY} from '../styles/CommonStyles';

export default function ListItem(props: {title: string}) {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    borderRadius: 20,
    marginVertical: 4,
    backgroundColor: GREY,
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
});
