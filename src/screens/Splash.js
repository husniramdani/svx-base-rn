import React from 'react';
import { View, Text } from 'react-native';

export default function Splash() {
  // setTimeout(() => {
  //   this.props.navigation.navigate('AuthIndex');
  // }, 1200);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash</Text>
    </View>
  );
}
