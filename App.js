import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './routes';
import ImageProvider from './context/imageProvider';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageProvider>
        <AppNavigator />
      </ImageProvider>
    </>
  );
};

export default App;
