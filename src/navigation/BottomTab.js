import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
/*
import Settings from '../pages/Settings';
import Telegram from '../pages/Telegram';
import WhatsApp from '../pages/Telegram';*/
import HomeScreen from '../pages/Home';
import Search from '../pages/Search';
import Category from '../pages/Category';
import Language from '../pages/Language';
import Country from '../pages/Country';
/*
const WhatsAppStack = createStackNavigator();
const SettingsStack = createStackNavigator();*/
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeScreenStack = createStackNavigator();

const CategoryStack = createStackNavigator();
const CountryStack = createStackNavigator();
const LanguageStack = createStackNavigator();
const SearchStack = createStackNavigator();
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

function HomeScreenStackNav() {
  return (
    <HomeScreenStack.Navigator screenOptions={{headerShown: false}}>
      <HomeScreenStack.Screen name="home" component={HomeScreen} />
    </HomeScreenStack.Navigator>
  );
}
function CategoryStackNav() {
  return (
    <CategoryStack.Navigator screenOptions={{headerShown: false}}>
      <CategoryStack.Screen name="category" component={Category} />
    </CategoryStack.Navigator>
  );
}
function SearchStackNav() {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="search" component={Search} />
    </SearchStack.Navigator>
  );
}

function CountryStackNav() {
  return (
    <CountryStack.Navigator screenOptions={{headerShown: false}}>
      <CountryStack.Screen name="country" component={Country} />
    </CountryStack.Navigator>
  );
}

function LanguageStackNav() {
  return (
    <LanguageStack.Navigator screenOptions={{headerShown: false}}>
      <LanguageStack.Screen name="WhatsApp" component={Language} />
    </LanguageStack.Navigator>
  );
}
/*
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
*/

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreenStackNav} />
      <Tab.Screen name="Category" component={CategoryStackNav} />
      <Tab.Screen name="Search" component={SearchStackNav} />
      <Tab.Screen name="Language" component={LanguageStackNav} />
      <Tab.Screen name="Country" component={CountryStackNav} />
    </Tab.Navigator>
  );
}
export default StackNav;
