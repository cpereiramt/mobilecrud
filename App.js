import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './android/app/src/store/index';
import PlanetList from './android/app/src/screens/PlanetList';
import PlanetDetails from './android/app/src/screens/PlanetDetails';

// console.disableYellowBox = true;

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={PlanetList} />
            <Stack.Screen name="Details" component={PlanetDetails} />
          </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
