import React from 'react';
import {StyleSheet, Text,TouchableOpacity, View} from 'react-native';

const Telegram = ({navigation}) => {
  return (
      <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
          <View >
              <Text>Telegram</Text>

          </View>
      </TouchableOpacity>
      
  );
};

export default Telegram;

const styles = StyleSheet.create({});
