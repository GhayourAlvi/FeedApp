import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import DetailsScreen from '../Screens/Details';
const Stack = createStackNavigator();
const AppNavigator = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#1A0289',
    },
    headerTintColor: '#fff',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Cats World" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
