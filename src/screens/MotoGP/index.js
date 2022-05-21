import React from 'react';
import { SafeAreaView, View, Text, FlatList, ImageBackground, StyleSheet } from 'react-native';
// components
import Svg from '@components/Svg';
import Button from '@components/Button';
import { p, c, b, f } from '@utils/StyleHelper';
import { main, mainGradient } from '@utils/Colors';
import { ms } from '@utils/Responsive'
import { light } from '@utils/Colors';

const DATA = [
  {
    id: '0',
    name: 'Qatar',
    flag: 'QA',
    countryColor: require('@images/vector-gray-1.png'),
  },
  {
    id: '1',
    name: 'Indonesia',
    flag: 'ID',
    countryColor: require('@images/vector-red-1.png'),
  },
  {
    id: '2',
    name: 'Republica Argentina',
    flag: 'AR',
    countryColor: require('@images/vector-blue-1.png'),
  },
  {
    id: '3',
    name: 'AT',
    flag: 'AT',
    countryColor: require('@images/vector-gray-1.png'),
  },
  {
    id: '4',
    name: 'AU',
    flag: 'AU',
    countryColor: require('@images/vector-gray-1.png'),
  },
  {
    id: '5',
    name: 'DE',
    flag: 'DE',
    countryColor: require('@images/vector-gray-1.png'),
  },
  {
    id: '6',
    name: 'ES',
    flag: 'ES',
    countryColor: require('@images/vector-gray-1.png'),
  },
  {
    id: '7',
    name: 'FI',
    flag: 'FI',
    countryColor: require('@images/vector-gray-1.png'),
  },
  {
    id: '8',
    name: 'FR',
    flag: 'FR',
    countryColor: require('@images/vector-gray-1.png'),
  },
];

const Item = ({ name, flag, countryColor }) => (
  <View style={[b.mx3, b.my2, c.bgGrey50, b.roundedMedium, { overflow: "hidden" }]}>
    <View style={[p.row]}>
      <View style={[c.bgDark, b.w40, { height: ms(88) }]}>
        <ImageBackground
          source={countryColor}
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
    <View style={[p.row]}>
      <View style={[b.px2, b.py1, b.m2, b.roundedLow, c.bgGrey100]}>
        <Svg icon={flag || "ID"} size={28} />
      </View>
      <Button
        onPress={() => alert('Redirect to detail track!')}
        color={light}
        style={[p.row, b.my2, b.container, b.roundedLow, p.center, { height: ms(40) }]}
      >
        <Svg style={[b.mr1]} icon="pin" size={28} />
        <Text style={[f.uppercase, f.bold, c.grey700]}>Track</Text>
      </Button>
      <Button
        onPress={() => alert('This is Alarm')}
        color={light} style={[b.px2, b.py1, b.m2, b.roundedLow, { height: ms(40) }]}
      >
        <Svg icon="bell" size={28} />
      </Button>

    </View>
    <View></View>
  </View>
);

export default function MotoGP() {
  const renderItem = ({ item }) => (
    <Item name={item.name} flag={item.flag} countryColor={item.countryColor} />
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