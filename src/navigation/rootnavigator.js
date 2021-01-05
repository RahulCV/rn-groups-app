import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from '../navigation/DrawerNavigation';
import BottomTabs from '../navigation/BottomTab';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
          <Stack.Screen name="Home" component={BottomTabs} />
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
