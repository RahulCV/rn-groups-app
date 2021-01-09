import React from 'react';
import DrawerNavigation from '../navigation/DrawerNavigation';
import BottomTabs from '../navigation/BottomTab';

export default function MyStack() {
  return (
    <DrawerNavigation />
    // <Stack.Navigator>
    //   <Stack.Screen name="Drawer" component={DrawerNavigation} />
    //       {/* <Stack.Screen name="Home" component={BottomTabs} /> */}

    //   {/* <Stack.Screen name="Notifications" component={Notifications} />
    //   <Stack.Screen name="Profile" component={Profile} />
    //   <Stack.Screen name="Settings" component={Settings} /> */}
    // </Stack.Navigator>
  );
}
