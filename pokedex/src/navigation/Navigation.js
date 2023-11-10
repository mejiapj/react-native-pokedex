import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from '../screens/Account';
import FavoriteScreen from '../screens/Favorite';
import PokedexScreen from '../screens/Pokedex';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="PokedexScreen" component={PokedexScreen} />
    </Tab.Navigator>
  );
}
