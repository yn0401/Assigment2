import { StyleSheet, Text} from 'react-native';
import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import MyTodo from './screens/Todo';
import {store, persistor} from './redux/store';
import { Provider } from 'react-redux';
import { AppNavigator } from './screens/navigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { IconRegistry } from '@ui-kitten/components';

export default function App() {

  return (
    
    <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      {/* <MyTodo/> */}
      <AppNavigator/>
    </PersistGate>
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
