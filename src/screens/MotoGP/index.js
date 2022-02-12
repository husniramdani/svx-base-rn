import React from 'react';
import { View, Text } from 'react-native';
import Svg from '@components/Svg';
import { p, c, b } from '@utils/StyleHelper';

export default function MotoGP() {
  return (
    <View style={[p.center, c.bgLight, b.container]}>
      <Text>Home!</Text>
      <Svg icon="chart" />
      <Svg icon="chartX" />
      <Svg icon="thropy" />
      <Svg icon="gppal_M" size={200} />
    </View>
  );
}