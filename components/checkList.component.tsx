import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import ListItem from './ListItem.component';
import CategoryItem from './CategoryItem.component';
import {BLACK, GREY, SIDE_PADDING} from '../styles/CommonStyles';
// import {} from 'react-native-gesture-handler';

export default function CheckList() {
  return (
    <View>
      {/* <Text style={styles.heading}>Check List</Text>
      <FlatList
        data={categData}
        renderItem={({item}) => (
          <CategoryItem title={item.Name} key={item.Id}></CategoryItem>
        )}
        horizontal={true}
        style={styles.categoryContainer}
        showsHorizontalScrollIndicator={false}
      /> */}
      <FlatList
        style={styles.container}
        data={data}
        renderItem={({item}) => (
          <ListItem title={item.Name} key={item.Id}></ListItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    // // marginVertical: 4,
    backgroundColor: GREY,
    // maxHeight: 300,
    marginHorizontal: 14,
    // paddingVertical: 18,
    // paddingHorizontal: 24,
  },
  categoryContainer: {
    marginVertical: 12,
    paddingHorizontal: SIDE_PADDING,
  },
  scroll: {
    height: 200,
    borderRadius: 20,
    // marginVertical: 4,
    backgroundColor: GREY,
  },
  heading: {
    color: BLACK,
    marginHorizontal: SIDE_PADDING,
  },
});

const categData = [
  {
    Name: 'Food',
    Id: 1,
  },
  {
    Name: 'Places',
    Id: 2,
  },
  {
    Name: 'Animals',
    Id: 3,
  },
  {
    Name: 'Activities',
    Id: 4,
  },
  {
    Name: 'Activities',
    Id: 5,
  },
];

const data = [
  {
    Name: 'Koala',
    Category: 'Animal',
    Id: 1,
  },
  {
    Name: 'Opera House',
    Category: 'Place',
    Id: 2,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Koala',
    Category: 'Animal',
    Id: 1,
  },
  {
    Name: 'Opera House',
    Category: 'Place',
    Id: 2,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
  {
    Name: 'Anzac Biscuit',
    Category: 'Food',
    Id: 3,
  },
];
