import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

import Settings from '../pages/Settings';
import Telegram from '../pages/Telegram';
import WhatsApp from '../pages/Telegram';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TeleGramStack = createStackNavigator();
const WhatsAppStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainStack"
        component={BottomTabs}
        options={({navigation, route}) => ({
          headerTitle: '',
          headerLeft: () => (
            <Button
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              title="Info"
              color="blue"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
function TeleGramStackNav() {
  return (
    <TeleGramStack.Navigator screenOptions={{headerShown: false}}>
      <TeleGramStack.Screen name="Telegram" component={Telegram} />
    </TeleGramStack.Navigator>
  );
}
function WhatsAppStackNav() {
  return (
    <WhatsAppStack.Navigator screenOptions={{headerShown: false}}>
      <WhatsAppStack.Screen name="WhatsApp" component={WhatsApp} />
    </WhatsAppStack.Navigator>
  );
}
function SettingsStackNav() {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Telegram" component={TeleGramStackNav} />
      <Tab.Screen name="WhatsApp" component={WhatsAppStackNav} />
      <Tab.Screen name="Settings" component={SettingsStackNav} />
    </Tab.Navigator>
  );
}
export default StackNav;
