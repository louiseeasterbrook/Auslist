import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem.component';

export default function CheckList() {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <ListItem title={item.Name}></ListItem>}
        // keyExtractor={item => item.Id}
      />
      {/* <Text>Categories</Text> */}
    </View>
  );
}

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
];
