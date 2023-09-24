import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {BACKGROUND_MAIN, MAIN, WHITE} from '../styles/CommonStyles';

export default function Header(props: {title: string}) {
  const [text, setText] = useState('');

  const handleInputChange = (inputText: string) => {
    setText(inputText);
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.heading}>{props.title}</Text>
        {/* <View style={styles.semiCircle}></View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: MAIN,
    width: '100%',
    // marginBottom: 24,
  },
  heading: {
    color: WHITE,
    fontSize: 26,
    fontWeight: '700',
    paddingBottom: 30,
    paddingTop: 30,
    paddingHorizontal: 30,
    // textAlign:'center'
  },
  searchContainer: {
    paddingTop: 30,
  },
  semiCircle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: BACKGROUND_MAIN,
    height: 30,
    shadowColor: 'black',
  },
});
