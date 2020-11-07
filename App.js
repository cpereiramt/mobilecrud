import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './android/app/src/store/index';
import HomeScreen from './android/app/src/screens/PlanetList';

// console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
