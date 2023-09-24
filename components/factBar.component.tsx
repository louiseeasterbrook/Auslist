import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BLACK, GREY, MAIN, WHITE} from '../styles/CommonStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FactBar() {
  const [barLocked, setBarLocked] = useState<boolean>(true);
  return (
    <TouchableOpacity onPress={() => setBarLocked(!barLocked)}>
      <View style={styles.container}>
        {barLocked ? (
          <View style={styles.waitContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="book-outline"
                size={30}
                color={BLACK}></MaterialCommunityIcons>
            </View>
          </View>
        ) : (
          <View style={styles.resultContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="book-outline"
                size={30}
                color={BLACK}></MaterialCommunityIcons>
            </View>
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
    marginTop: 12,
  },
  resultContainer: {
    backgroundColor: MAIN,
    borderRadius: 20,
    padding: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  waitContainer: {
    backgroundColor: GREY,
    borderRadius: 20,
    padding: 18,
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 12,
    textAlign: 'center',
  },
});
