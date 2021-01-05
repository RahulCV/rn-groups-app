import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../pages/Settings';
import Telegram from '../pages/Telegram';
import WhatsApp from '../pages/Telegram' 
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
          <Tab.Screen name="Telegram" component={Telegram} />
          <Tab.Screen name="WhatsApp" component={WhatsApp} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
export default BottomTabs;
