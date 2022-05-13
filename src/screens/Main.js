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
              height={44}
              style={[b.roundedLow, c.bgGrey50, b.pl6, b.pr2]}
              onPress={() => alert('This is a button!')}
            >
              <Svg icon="setting" size={24} />
            </Button>
          ),
          headerRight: () => (
            <Button
              height={44}
              style={[b.roundedLow, c.bgGrey50, b.pr6, b.pl2]}
              onPress={() => alert('This is a button!')}
            >
              <Svg icon="standing" size={24} />
            </Button>
          ),
        }}
      />
      <Tab.Screen name="Moto3" component={Moto3} />
    </Tab.Navigator>
  );
}
