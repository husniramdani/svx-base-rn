import React from 'react';
import { SafeAreaView, View, Text, FlatList, ImageBackground, StyleSheet } from 'react-native';
// components
import Svg from '@components/Svg';
import Button from '@components/Button';
import { p, c, b, f } from '@utils/StyleHelper';
import { main, mainGradient } from '@utils/Colors';
import { ms } from '@utils/Responsive'

const DATA = [
  {
    id: '0',
    name: 'Qatar',
    flag: 'QA',
  },
  {
    id: '1',
    name: 'Indonesia',
    flag: 'ID',
  },
  {
    id: '2',
    name: 'Republica Argentina',
    flag: 'AR',
  },
  {
    id: '3',
    name: 'AT',
    flag: 'AT',
  },
  {
    id: '4',
    name: 'AU',
    flag: 'AU',
  },
  {
    id: '5',
    name: 'DE',
    flag: 'DE',
  },
  {
    id: '6',
    name: 'ES',
    flag: 'ES',
  },
  {
    id: '7',
    name: 'FI',
    flag: 'FI',
  },
  {
    id: '8',
    name: 'FR',
    flag: 'FR',
  },
];

const Item = ({ name, flag }) => (
  <View style={[b.mx3, b.my2, c.bgGrey50, b.rounded, { overflow: "hidden" }]}>
    <View style={[p.row]}>
      <View style={[c.bgDark, b.w40, { height: ms(88) }]}>
        <ImageBackground
          source={require('@images/vector-red-1.png')}
          resizeMode="cover"
          style={[b.p2, { ...StyleSheet.absoluteFillObject }]}
        >
          <Text style={[f.uppercase, c.light, f.bold, f._14]}>Round</Text>
          <Text style={[f.uppercase, c.light, f.bold, f._14]}>01 / 22</Text>
        </ImageBackground>
      </View>
      <View style={[c.bgDark, b.w60, p.center, b.px3]}>
        <Text style={[f.uppercase, c.light, f.bold, f._18]}>{name}</Text>
      </View>
    </View>
    <View>
      <Svg icon={flag || "ID"} size={28} />

    </View>
    <View></View>
  </View>
);

export default function MotoGP() {
  const renderItem = ({ item }) => (
    <Item name={item.name} flag={item.flag} />
  );

  return (
    <SafeAreaView style={[b.container, c.bgLight, b.pt14]}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}