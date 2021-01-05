import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
const Telegram = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
        //navigation.openDrawer();
      }}>
      <View>
        <Text>Telegram</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Telegram;

const styles = StyleSheet.create({});
