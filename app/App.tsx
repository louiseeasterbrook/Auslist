import React from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyStack from '../navigation/stackNav.component';
import {MainStore, RootStoreProvider} from './store/mainStore';

function App(): JSX.Element {
  const rootStore = MainStore.create({});
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <RootStoreProvider value={rootStore}>
      <MyStack></MyStack>
    </RootStoreProvider>
  );
}
export default App;
