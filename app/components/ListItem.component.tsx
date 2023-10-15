import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BLACK, DARK_GREY, GREY} from '../../styles/CommonStyles';

export default function ListItem(props: {title: string}) {
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
    // borderRadius: 20,
    // marginVertical: 4,
    borderBottomColor: DARK_GREY,
    borderBottomWidth: 1,
    // backgroundColor: GREY,
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  text: {
    color: BLACK,
  },
});
