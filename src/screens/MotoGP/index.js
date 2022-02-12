import React from 'react';
import { View, Text } from 'react-native';
import Svg from '@components/Svg';

export default function MotoGP() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Svg icon="chart" />
      <Svg icon="chartX" />
      <Svg icon="thropy" />
      <Svg icon="gppal_M" size={200} />
      <Svg icon="gppal_L_white" size={200} />
    </View>
  );
}