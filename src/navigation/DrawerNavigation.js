import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTab';
import ContactUs from '../pages/ContactUs'
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
            <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={BottomTabs} />
            <Drawer.Screen name="ContactUs" component={ContactUs} />
            </Drawer.Navigator>
       
    );
}