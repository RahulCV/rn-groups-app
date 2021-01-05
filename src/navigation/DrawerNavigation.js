import React from 'react';
import {
  createDrawerNavigator,
  DrawerItems,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, Linking} from 'react-native';
import BottomTabs from './BottomTab';
import ContactUs from '../pages/ContactUs';
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: '#f50057',
          height: 100,
          margin: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 30}}>Header</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}
const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#f50057',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 30}}>Header</Text>
    </View>
    <DrawerItems {...props} />
  </View>
);
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  );
}


/**
const Stack = createStackNavigator();
const MyStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      headerMode="screen"
      screenOptions={({navigation}) => ({
        headerRight: () => <HeaderRight navigation={navigation} />,
      })}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default MyStack;
options={({ navigation }) => ({ title: 'Products', headerLeft: () => <TouchableOpacity onPress={() => navigation.toggleDrawer()}> <FontAwesome5 name='bars' color='white' size={20} /> </TouchableOpacity>, headerLeftContainerStyle: { paddingLeft: 10 } })}
*/