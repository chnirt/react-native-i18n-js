/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {LanguageProvider} from './src/context/LanguageContext';
import Hello from './hello';

function App() {
  return (
    <LanguageProvider>
      <Hello />
    </LanguageProvider>
  );
}

export default App;
