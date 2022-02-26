import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screen
import MotoGP from './MotoGP';
import Moto2 from './Moto2';
import Moto3 from './Moto3';
// components
import Svg from '@components/Svg';
import Button from '@components/Button';
import TabBar from '@components/TabBar';
import { b, p, c, f } from '@utils/StyleHelper';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="MotoGP"
      screenOptions={{
        headerTransparent: true,
      }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen name="Moto2" component={Moto2} />
      <Tab.Screen
        name="MotoGP"
        component={MotoGP}
        options={{
          headerStyle: {
            height: 100,
          },
          headerTitleAlign: 'center',
          headerTitle: () => <Svg icon="gppal_M" size={100} />,
          headerLeft: () => (
            <Button
              disabled
              height={40}
              width={40}
              style={[b.roundedLow, b.shadowHigh3, b.ml6]}
              onPress={() => alert('This is a button!')}
            >
              <Svg icon="chartX" size={24} />
            </Button>
          ),
          headerRight: () => (
            <Button
              height={40}
              width={40}
              style={[b.roundedLow, b.shadowHigh3, b.mr6]}
              onPress={() => alert('This is a button!')}
            >
              <Svg icon="thropy" size={22} />
            </Button>
          ),
        }}
      />
      <Tab.Screen name="Moto3" component={Moto3} />
      <Tab.Screen name="Moto4" component={Moto3} />
      <Tab.Screen name="Moto5" component={Moto3} />
      <Tab.Screen name="Moto6" component={Moto3} />
      <Tab.Screen name="Moto7" component={Moto3} />
    </Tab.Navigator>
  );
}
