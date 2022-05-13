import React from 'react';
import { View, Text } from 'react-native';
import Svg from '@components/Svg';
import { p, c } from '@utils/StyleHelper';
import LottieView from 'lottie-react-native';

export default function Splash() {
  return (
    <View style={[p.center, c.bgMain, { flex: 1 }]}>
      <LottieView source={require('../assets/animation/splash.json')} autoPlay />
      {/* <Svg icon="gppal_L_white" size={150} /> */}
    </View>
  );
}
