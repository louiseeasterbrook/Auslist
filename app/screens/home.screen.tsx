import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import {ScrollView} from 'react-native-virtualized-view'; // to avoid build warning
import Header from '../components/header.component';
import FoodBar from '../components/foodBar.component';
import CheckList from '../components/checkList.component';
import FactBar from '../components/factBar.component';
import {BLACK, SIDE_PADDING} from '../../styles/CommonStyles';
import {FlatList} from 'react-native-gesture-handler';
import CategoryItem from '../components/CategoryItem.component';
import {useStores} from '../store/mainStore';

export default function HomeScreen() {
  const hello = useStores();

  useEffect(() => {
    console.log('helllo ', hello);
    hello.setMainColor('blue ');
    console.log('========', hello?.mainColor);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'AusList'}></Header>
      <ScrollView
      // stickyHeaderIndices={[2]}
      >
        <View style={styles.topContainer}>
          <FoodBar></FoodBar>
        </View>
        <FactBar></FactBar>
        <View style={styles.checkListContainer}>
          <View style={styles.checkboxFilter}>
            <Text style={styles.heading}>Check List</Text>
            <FlatList
              data={categData}
              renderItem={({item}) => (
                <CategoryItem title={item.Name} key={item.Id}></CategoryItem>
              )}
              horizontal={true}
              style={styles.categoryContainer}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <CheckList></CheckList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 24,
  },
  topContainer: {
    marginTop: 24,
  },
  checkListContainer: {
    marginTop: 24,
    marginBottom: 24,
  },
  categoryContainer: {
    marginVertical: 12,
    paddingHorizontal: SIDE_PADDING,
  },
  heading: {
    color: BLACK,
    marginHorizontal: SIDE_PADDING,
  },
  checkboxFilter: {
    marginTop: 12,
  },
});
