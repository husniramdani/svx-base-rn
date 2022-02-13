import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
// components
import Svg from '@components/Svg';
import Button from '@components/Button';
import { p, c, b } from '@utils/StyleHelper';
import { main, mainGradient } from '@utils/Colors';
import { ms } from '@utils/Responsive'

export default function MotoGP() {
  return (
    <LinearGradient
      colors={mainGradient}
      style={s.container}
    >
      <Shadow
        distance={30}
        offset={[0, 5]}
        startColor={"rgba(148, 227, 226, 0.4)"}
        containerViewStyle={[b.mx8]}
        viewStyle={[{ alignSelf: 'stretch' }]}
      >
        <View style={[p.center, c.bgLight, b.rounded, { height: ms(560), overflow: 'hidden' }]}>
          <Svg icon="gppal_M" size={100} />
        </View>
      </Shadow>
      <View style={[c.bglight, c.bgMain, p.center, { height: ms(60) }]}>
        <Button
          height={40}
          width={40}
          style={[b.roundedLow, b.shadowHigh3, b.mr6]}
          onPress={() => alert('This is a button!')}
        >
          <Svg icon="thropy" size={22} />
        </Button>
      </View>
    </LinearGradient>
  );
}

const s = {
  container: [b.container, p.justifyBetween, { paddingTop: 96 }],
};