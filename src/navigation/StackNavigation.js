import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FlatListData from '../screens/FlatlistDataScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Search city',
            headerStyle: {backgroundColor: '#121212'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FlatListData"
          component={FlatListData}
          options={{
            headerStyle: {backgroundColor: '#121212'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
