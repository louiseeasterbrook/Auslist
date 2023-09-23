import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {MAIN} from '../styles/CommonStyles';

export default function Header(props: {title: string}) {
  const [text, setText] = useState('');

  const handleInputChange = (inputText: string) => {
    setText(inputText);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: MAIN,
    width: '100%',
    paddingBottom: 30,
    paddingTop: 70,
    paddingHorizontal: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  heading: {
    color: 'white',
    fontSize: 26,
    fontWeight: '700',
    paddingBottom: 12,
    // textAlign:'center'
  },
  searchContainer: {
    paddingTop: 30,
  },
});
