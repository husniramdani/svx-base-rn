/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// router
import Router from './src/Router';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Router />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
