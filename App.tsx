import React from 'react';
import RootNavigation from './navigations';
import {screenName} from './src/utils/screenName';
import { MenuProvider } from 'react-native-popup-menu';

const App = () => {
  const screen = screenName.SignInScreen;
  return (
    <MenuProvider>
      <RootNavigation initialRouteName={screen} />
    </MenuProvider>
  );};
export default App;
