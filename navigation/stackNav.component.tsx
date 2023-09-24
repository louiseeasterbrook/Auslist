import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/welcome.screen';
import BottomTabNav from './bottomTabNav.component';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="TabNavigator" component={BottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
