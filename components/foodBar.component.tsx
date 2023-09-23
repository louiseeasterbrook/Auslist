import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GREY, MAIN, WHITE} from '../styles/CommonStyles';

export default function FoodBar(props: {lock: boolean}) {
  const [barLocked, setBarLocked] = useState<boolean>(true);
  return (
    <TouchableOpacity onPress={() => setBarLocked(!barLocked)}>
      <View style={styles.container}>
        {barLocked ? (
          <View style={styles.waitContainer}>
            <View style={styles.iconContainer}></View>
          </View>
        ) : (
          <View style={styles.resultContainer}>
            <View style={styles.iconContainer}></View>
            <Text style={styles.title}>Twisties</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    borderRadius: 20,
    marginVertical: 12,
  },
  resultContainer: {
    backgroundColor: MAIN,
    borderRadius: 20,
    padding: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  waitContainer: {
    backgroundColor: GREY,
    borderRadius: 20,
    padding: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: 46,
    width: 46,
    borderRadius: 46,
    backgroundColor: WHITE,
  },
  title: {
    marginLeft: 12,
  },
});
