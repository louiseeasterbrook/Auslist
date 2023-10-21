import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Header from '../components/header.component';
import {TextInput} from 'react-native-gesture-handler';
import {WHITE} from '../../styles/CommonStyles';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {FIREBASE_AUTH, initFirebaseConfig} from '../utils/firebaseConfig';
import {FIREBASE_API_KEY} from '@env';

const WelcomeScreen = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );
      console.log('000000000000000000');
      console.log('000000000000000000');
      console.log('000000000000000000');
      console.log('---login res ', response);
      // initFirebaseConfig();
      navigation.navigate('TabNavigator', {screen: 'Home'});
    } catch (error) {
      twoOptionAlert(error);
      console.log('ERROR login ', error);
    }
  };

  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );
      console.log('---reg res ', response);
    } catch (error) {
      // twoOptionAlert();
      console.log('ERROR reg', error);
    }
  };

  const twoOptionAlert = error => {
    Alert.alert(
      //This is title
      'Alert',
      //This is body text
      'Something went wrong. Please try again.',
      [{text: 'Ok'}],
      //on clicking out side, Alert will not dismiss
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Welcome'}></Header>
      {/* <Button
        title={'go'}
        onPress={() =>
          navigation.navigate('TabNavigator', {screen: 'Home'})
        }></Button> */}
      <KeyboardAvoidingView>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={x => setEmail(x)}
          style={styles.textInput}></TextInput>
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={x => setPassword(x)}></TextInput>
        <Button title={'Login'} onPress={() => signIn()}></Button>
        <Button title={'Register'} onPress={() => signUp()}></Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkListContainer: {
    marginTop: 24,
    marginHorizontal: 14,
    marginBottom: 24,
  },
  textInput: {
    backgroundColor: WHITE,
    padding: 20,
    marginBottom: 6,
  },
});

export default WelcomeScreen;
