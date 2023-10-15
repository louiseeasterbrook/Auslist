import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../app/screens/welcome.screen';
import BottomTabNav from './bottomTabNav.component';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {User, onAuthStateChanged} from 'firebase/auth';
import {FIREBASE_AUTH} from '../utils/firebaseConfig';

const Stack = createStackNavigator();

export default function MyStack() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, user => {
      setUser(user);
      console.log('user changes ', user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user == null ? (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        ) : (
          <Stack.Screen name="TabNavigator" component={BottomTabNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
