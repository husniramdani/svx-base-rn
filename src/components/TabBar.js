import React from 'react';
import FadingEdge from 'react-native-fading-edge';
import { FlatList, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { b, p, c, f } from '@utils/StyleHelper';
export default function TabBar({ state, descriptors, navigation }) {

  const renderItem = ({ item, index }) => {
    const { options } = descriptors[item.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
          ? options.title
          : item.name;

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: item.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({ name: item.name, merge: true });
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: item.key,
      });
    };

    return (
      <TouchableOpacity
        key={index}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={[b.px5, p.center, isFocused ? b.borderTopMain : b.borderTopGrey]}
      >
        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <FadingEdge
      left={250}
      right={250}
      style={[b.mx6, { maxHeight: 60 }]}
    >
      <FlatList
        // fadingEdgeLength={100}
        style={[{ height: 60 }]}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={state.routes}
        renderItem={(item, index) => renderItem(item, index)}
        keyExtractor={item => item.key}
        snapToAlignment="center"
      />
    </FadingEdge>
  );
}