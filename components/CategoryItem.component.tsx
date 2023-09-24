import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GREY, MAIN, WHITE} from '../styles/CommonStyles';

export default function CategoryItem(props: {title: string}) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: MAIN,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginRight: 8,
  },
  text: {
    color: WHITE,
  },
});
