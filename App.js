import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import dataReducer from './src/redux/catSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
