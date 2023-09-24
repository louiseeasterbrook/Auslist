import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home.screen';
import SettingsScreen from '../screens/settings.screen';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => {
          const icons = {
            Home: focused ? 'home' : 'home-outline',
            Settings: focused ? 'cog' : 'cog-outline',
            Favourites: focused ? 'heart' : 'heart-outline',
          };

          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
