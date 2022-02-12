import React from 'react';
import { View, Text } from 'react-native';
import Svg from '@components/Svg';
import { p, c } from '@utils/StyleHelper';

export default function Splash() {
  return (
    <View style={[p.center, c.bgMain, { flex: 1 }]}>
      <Svg icon="gppal_L_white" size={150} />
    </View>
  );
}
