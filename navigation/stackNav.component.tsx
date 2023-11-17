import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../app/screens/welcome.screen';
import BottomTabNav from './bottomTabNav.component';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {User, onAuthStateChanged} from 'firebase/auth';
import {
  FIREBASE_AUTH,
  getRemoteConfigValue,
  initFirebaseConfig,
} from '../app/utils/firebaseConfig';
import {useStores} from '../app/store/mainStore';

const Stack = createStackNavigator();

export default function MyStack() {
  const mainStore = useStores();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    initFirebaseConfig();

    onAuthStateChanged(FIREBASE_AUTH, user => {
      setUser(user);
      console.log('user changes ', user?.email);
      if (user) {
        const appVersion = getRemoteConfigValue('appVersion');
        console.log('TEY ', appVersion);
        // mainStore.setAppVersion(appVersion);
      }
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
